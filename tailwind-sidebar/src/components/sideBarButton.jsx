export default function SidebarButton({ icon, label, active }) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer 
      ${active ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"}`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}
