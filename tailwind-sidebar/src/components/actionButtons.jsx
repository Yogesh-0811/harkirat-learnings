export default function ActionButtons() {
  return(
    <div className="grid grid-cols-2 gap-4">
      <button className="bg-teal-100 text-teal-700 rounded-xl p-4 shadow-md">
        📅 Schedule a Webinar
      </button>
      <button className="bg-teal-100 text-teal-700 rounded-xl p-4 shadow-md">
        ➕ Join a Webinar
      </button>
      <button className="bg-teal-100 text-teal-700 rounded-xl p-4 shadow-md col-span-2">
        🎬 Open Recordings
      </button>
    </div>
  );
}
