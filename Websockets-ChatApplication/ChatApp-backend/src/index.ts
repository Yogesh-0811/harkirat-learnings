import { WebSocketServer } from 'ws';
import type { WebSocket } from 'ws';
import { v4 as uuidv4 } from 'uuid';

const wss = new WebSocketServer({ port: 8080 });

interface User {
    id: string;
    socket: WebSocket;
    room: string;
    username: string;
    joinedAt: Date;
}

interface Message {
    id: string;
    type: 'chat' | 'join' | 'leave' | 'user_list' | 'room_list';
    payload: any;
    timestamp: string;
    userId?: string;
    username?: string;
}

let allUsers: User[] = [];
const rooms: Set<string> = new Set(['general', 'random', 'tech']);

// Helper function to get users in a room
function getUsersInRoom(roomId: string): User[] {
    return allUsers.filter(user => user.room === roomId);
}

// Helper function to broadcast to room
function broadcastToRoom(roomId: string, message: Message, excludeUserId?: string) {
    getUsersInRoom(roomId).forEach(user => {
        if (!excludeUserId || user.id !== excludeUserId) {
            user.socket.send(JSON.stringify(message));
        }
    });
}

// Helper function to send user list to room
function sendUserListToRoom(roomId: string) {
    const usersInRoom = getUsersInRoom(roomId).map(user => ({
        id: user.id,
        username: user.username,
        joinedAt: user.joinedAt
    }));

    broadcastToRoom(roomId, {
        id: uuidv4(),
        type: 'user_list',
        payload: { users: usersInRoom },
        timestamp: new Date().toISOString()
    });
}

wss.on('connection', (socket: WebSocket) => {
    const userId = uuidv4();
    console.log(`User ${userId} connected`);

    // Send available rooms to new connection
    socket.send(JSON.stringify({
        id: uuidv4(),
        type: 'room_list',
        payload: { rooms: Array.from(rooms) },
        timestamp: new Date().toISOString()
    }));

    socket.on('message', (message) => {
        try {
            const parsedMessage: Message = JSON.parse(message.toString());

            switch (parsedMessage.type) {
                case 'join':
                    const { roomId, username } = parsedMessage.payload;
                    
                    // Remove user from previous room if exists
                    const existingUser = allUsers.find(user => user.socket === socket);
                    if (existingUser) {
                        const oldRoom = existingUser.room;
                        allUsers = allUsers.filter(user => user.id !== existingUser.id);
                        
                        // Notify old room about user leaving
                        broadcastToRoom(oldRoom, {
                            id: uuidv4(),
                            type: 'leave',
                            payload: { 
                                message: `${existingUser.username} left the room`,
                                username: existingUser.username 
                            },
                            timestamp: new Date().toISOString(),
                            userId: existingUser.id
                        });
                        sendUserListToRoom(oldRoom);
                    }

                    // Add to new room
                    const newUser: User = {
                        id: userId,
                        socket,
                        room: roomId,
                        username: username || `User_${userId.slice(0, 6)}`,
                        joinedAt: new Date()
                    };

                    allUsers.push(newUser);
                    rooms.add(roomId); // Add room to set if it doesn't exist

                    // Notify room about new user
                    broadcastToRoom(roomId, {
                        id: uuidv4(),
                        type: 'join',
                        payload: { 
                            message: `${newUser.username} joined the room`,
                            username: newUser.username 
                        },
                        timestamp: new Date().toISOString(),
                        userId: newUser.id
                    });

                    // Send confirmation to user
                    socket.send(JSON.stringify({
                        id: uuidv4(),
                        type: 'join',
                        payload: { 
                            success: true, 
                            roomId, 
                            userId: newUser.id,
                            message: `Welcome to ${roomId}!` 
                        },
                        timestamp: new Date().toISOString()
                    }));

                    // Send updated user list to room
                    sendUserListToRoom(roomId);
                    break;

                case 'chat':
                    const currentUser = allUsers.find(user => user.socket === socket);
                    if (currentUser) {
                        const chatMessage: Message = {
                            id: uuidv4(),
                            type: 'chat',
                            payload: { 
                                message: parsedMessage.payload.message,
                                username: currentUser.username
                            },
                            timestamp: new Date().toISOString(),
                            userId: currentUser.id,
                            username: currentUser.username
                        };

                        broadcastToRoom(currentUser.room, chatMessage);
                    }
                    break;

                default:
                    console.log('Unknown message type:', parsedMessage.type);
            }

        } catch (err) {
            console.error('Error parsing message:', err);
            socket.send(JSON.stringify({
                id: uuidv4(),
                type: 'error',
                payload: { message: 'Invalid message format' },
                timestamp: new Date().toISOString()
            }));
        }
    });

    socket.on('close', () => {
        const user = allUsers.find(user => user.socket === socket);
        if (user) {
            console.log(`User ${user.username} (${user.id}) disconnected`);
            
            // Remove user from allUsers
            allUsers = allUsers.filter(u => u.id !== user.id);
            
            // Notify room about user leaving
            broadcastToRoom(user.room, {
                id: uuidv4(),
                type: 'leave',
                payload: { 
                    message: `${user.username} disconnected`,
                    username: user.username 
                },
                timestamp: new Date().toISOString(),
                userId: user.id
            });

            // Send updated user list to room
            sendUserListToRoom(user.room);
        }
    });

    socket.on('error', (error) => {
        console.error('WebSocket error:', error);
    });
});

console.log('WebSocket server running on ws://localhost:8080');