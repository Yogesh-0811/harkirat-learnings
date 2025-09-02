import { atom, selector } from 'recoil';

export const networkAtom = atom({
    key: "netwrokAtom",
    default: 102
});

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
});

export const notificationAtom = atom({
    key: "notificaitonAtom",
    default: 12
});

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
});

export const totalNotificationSelector = selector({
    key:"totalNotificationSelector",
    get: ({get})=>{
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const notificationsAtomCount = get(notificationAtom);
        const messagingAtomCount = get(messagingAtom);
        return networkAtomCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount;
    }
})