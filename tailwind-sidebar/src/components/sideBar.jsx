// Sidebar.jsx
import { useState } from "react";
import { Menu, Home, Calendar, CreditCard, Users, Settings } from "lucide-react";
import SidebarButton from "./sideBarButton";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="relative top-4 left-4 z-50 md:hidden p-2 bg-white shadow-md rounded"
        onClick={() => setIsOpen(true)}
      >
        <Home size={24} />
        <br />
        <Calendar size={24} />
        <br />
        <CreditCard size={24} />
        <br />
        <Users size={24} />
        <br />
        <Settings size={24} />
      </button>

      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-md p-4 z-40 transform
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0 md:flex md:flex-col`}
      >
        <h2 className="text-xl font-bold mb-6">Webinar.gg</h2>
        <nav className="space-y-4">
          <SidebarButton icon={<Home size={18} />} label="Home" active />
          <SidebarButton icon={<Calendar size={18} />} label="Webinars" />
          <SidebarButton icon={<CreditCard size={18} />} label="Billing" />
          <SidebarButton icon={<Users size={18} />} label="User Management" />
          <SidebarButton icon={<Settings size={18} />} label="Settings" />
        </nav>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
