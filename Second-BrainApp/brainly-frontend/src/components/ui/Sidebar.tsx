import { BrainlyIcon } from "../../icons/BrainlyIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YouTube";
import { SidebarItem } from "./SidebarItem";

export function Sidebar(){
    return <div className="h-screen bg-white border-gray-300 border-r w-72 fixed left-0 tp-0 pl-4">
        <h1 className=" flex text-2xl font-medium pt-4 items-center">
            <div className="pr-2 text-purple-800">
                <BrainlyIcon/>
            </div>
            Brainly
        </h1>
        <div className="pt-4 pl-8">
            <SidebarItem text="Twitter" icon={<TwitterIcon/>}/>
            <SidebarItem text="YouTube" icon={<YoutubeIcon/>}/>
        </div>
    </div>
}