import React, { useEffect, useRef, useState } from 'react';
import { Send, Users, Hash, Wifi, WifiOff } from 'lucide-react';

interface Message {
  id: string;
  type: 'chat' | 'join' | 'leave' | 'user_list' | 'room_list';
  payload: any;
  timestamp: string;
  userId?: string;
  username?: string;
}

interface User {
  id: string;
  username: string;
  joinedAt: string;
}

export default function ChatApp() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentRoom, setCurrentRoom] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [newMessage, setNewMessage] = useState<string>('');
  const [isConnected, setIsConnected] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [availableRooms, setAvailableRooms] = useState<string[]>([]);
  const [isJoined, setIsJoined] = useState(false);
  const [currentUserId, setCurrentUserId] = useState<string>('');
  
  const wsRef = useRef<WebSocket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    connectWebSocket();
    return () => {
      wsRef.current?.close();
    };
  }, []);

  const connectWebSocket = () => {
    wsRef.current = new WebSocket("ws://localhost:8080");

    wsRef.current.onopen = () => {
      setIsConnected(true);
      console.log('Connected to WebSocket server');
    };

    wsRef.current.onmessage = (event) => {
      try {
        const message: Message = JSON.parse(event.data);
        
        switch (message.type) {
          case 'chat':
          case 'join':
          case 'leave':
            setMessages(prev => [...prev, message]);
            break;
          case 'user_list':
            setUsers(message.payload.users);
            break;
          case 'room_list':
            setAvailableRooms(message.payload.rooms);
            break;
        }
        
        if (message.type === 'join' && message.payload.success && message.payload.userId) {
          setCurrentUserId(message.payload.userId);
        }
      } catch (err) {
        console.error('Failed to parse message', err);
      }
    };

    wsRef.current.onclose = () => {
      setIsConnected(false);
      setIsJoined(false);
      console.log('Disconnected from WebSocket server');
      
      setTimeout(connectWebSocket, 3000);
    };

    wsRef.current.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  };

  const joinRoom = () => {
    if (wsRef.current && currentRoom.trim() && username.trim()) {
      const joinMessage = {
        type: 'join',
        payload: {
          roomId: currentRoom.trim(),
          username: username.trim()
        }
      };
      
      wsRef.current.send(JSON.stringify(joinMessage));
      setIsJoined(true);
      setMessages([]); // Clear messages when joining new room
    }
  };

  const sendMessage = () => {
    if (wsRef.current && newMessage.trim() && isJoined) {
      const messageObj = {
        type: 'chat',
        payload: {
          message: newMessage.trim()
        }
      };
      
      wsRef.current.send(JSON.stringify(messageObj));
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (isJoined) {
        sendMessage();
      } else {
        joinRoom();
      }
    }
  };

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const renderMessage = (message: Message) => {
    const isOwnMessage = message.userId === currentUserId;
    
    switch (message.type) {
      case 'chat':
        return (
          <div className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'} mb-4`}>
            <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
              isOwnMessage 
                ? 'bg-blue-600 text-white rounded-br-md' 
                : 'bg-gray-700 text-white rounded-bl-md'
            }`}>
              {!isOwnMessage && (
                <div className="text-xs text-gray-300 mb-1 font-medium">
                  {message.username}
                </div>
              )}
              <div className="break-words">{message.payload.message}</div>
              <div className={`text-xs mt-1 ${
                isOwnMessage ? 'text-blue-200' : 'text-gray-400'
              }`}>
                {formatTime(message.timestamp)}
              </div>
            </div>
          </div>
        );
      case 'join':
      case 'leave':
        return (
          <div className="flex justify-center mb-3">
            <div className="bg-gray-800 px-3 py-1 rounded-full text-xs text-gray-400 border border-gray-600">
              {message.payload.message}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (!isJoined) {
    return (
      <div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Join Chat</h1>
            <p className="text-gray-400">Enter your details to start chatting</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Room
              </label>
              <div className="space-y-2">
                <input
                  type="text"
                  value={currentRoom}
                  onChange={(e) => setCurrentRoom(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter room name or select below"
                />
                
                {availableRooms.length > 0 && (
                  <div className="grid grid-cols-3 gap-2">
                    {availableRooms.map((room) => (
                      <button
                        key={room}
                        onClick={() => setCurrentRoom(room)}
                        className="p-2 text-sm bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded-lg transition-all border border-gray-600"
                      >
                        #{room}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={joinRoom}
              disabled={!isConnected || !username.trim() || !currentRoom.trim()}
              className="w-full p-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Hash size={20} />
              <span>Join Room</span>
            </button>

            <div className="flex items-center justify-center space-x-2 text-sm">
              {isConnected ? (
                <>
                  <Wifi className="text-green-400" size={16} />
                  <span className="text-green-400">Connected</span>
                </>
              ) : (
                <>
                  <WifiOff className="text-red-400" size={16} />
                  <span className="text-red-400">Connecting...</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gray-900 flex">
      <div className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col">
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white flex items-center space-x-2">
            <Hash className="text-blue-400" size={24} />
            <span>{currentRoom}</span>
          </h2>
          <p className="text-sm text-gray-400">@{username}</p>
        </div>

        <div className="flex-1 p-4">
          <div className="flex items-center space-x-2 mb-4">
            <Users size={18} className="text-gray-400" />
            <h3 className="text-sm font-semibold text-gray-300">
              Online ({users.length})
            </h3>
          </div>
          
          <div className="space-y-2">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex items-center space-x-2 p-2 rounded-lg bg-gray-700/50"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-300">{user.username}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center space-x-2 text-xs">
            {isConnected ? (
              <>
                <Wifi className="text-green-400" size={14} />
                <span className="text-green-400">Connected</span>
              </>
            ) : (
              <>
                <WifiOff className="text-red-400" size={14} />
                <span className="text-red-400">Reconnecting...</span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto p-6 bg-gray-850">
          <div className="space-y-2">
            {messages.map((message) => (
              <div key={message.id} className="animate-fade-in">
                {renderMessage(message)}
              </div>
            ))}
          </div>
          <div ref={messagesEndRef} />
        </div>

        <div className="border-t border-gray-700 p-4">
          <div className="flex space-x-4">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder={`Message #${currentRoom}`}
              disabled={!isConnected}
            />
            <button
              onClick={sendMessage}
              disabled={!isConnected || !newMessage.trim()}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg transition-all duration-200 flex items-center space-x-2"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}