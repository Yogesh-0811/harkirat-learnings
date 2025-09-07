export default function ProfileCard() {
  return (
    <div className="bg-white shadow-md p-4 rounded-xl flex items-center gap-4">
      <img
        src="https://i.pinimg.com/736x/e1/9a/5d/e19a5d60510298abf1d0ee040b71056f.jpg"
        alt="Profile"
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <h3 className="font-semibold">Luffy Patil</h3>
        <p className="text-sm text-gray-500">luffy@gmail.com</p>
        <p className="text-sm text-gray-500">9307777650</p>
        <p className="text-sm text-gray-500">Pune, India</p>
      </div>
    </div>
  );
}
