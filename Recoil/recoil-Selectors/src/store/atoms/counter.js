import {atom, selector} from "recoil";

export const counterAtom = atom({
    default:0,
    key: 'counterAtom',
});

export const evenSelector = selector({
    key: "isEvenSelector",
    get: function({get}){
        const currentCount = get(counterAtom);
        const isEven = (currentCount%2==0);
        return isEven;
    }
})