import type { ReactNode } from "react";

export function SidebarItem({text,icon}:{
    text: string;
    icon: ReactNode;
}){
    return <div className="flex text-gray-700 font-medium py-2 cursor-pointer hover:bg-gray-200 pl-4 rounded max-w-48">
        <div className="pr-2">
            {icon}
        </div>
        <div>
            {text}
        </div>       
    </div>
}