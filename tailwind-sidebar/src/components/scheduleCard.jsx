export default function ScheduleCard() {
  const events = [
    { time: "11:30 AM", status: "Live", title: "UX Webinar" },
    { time: "11:30 AM", status: "Upcoming", title: "My First Webinar" },
    { time: "11:30 AM", status: "Upcoming", title: "Important Webinar" },
    { time: "11:30 AM", status: "Upcoming", title: "Webinar 1" },
  ];

  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-full">
      <h4 className="font-semibold mb-4">Monday, 14 October 2024</h4>
      <div className="space-y-3">
        {events.map((event, i) => (
          <div
            key={i}
            className="flex justify-between items-center border-b pb-2"
          >
            <span className="text-sm font-medium">{event.time}</span>
            <span className="text-sm text-gray-600">{event.title}</span>
            <span
              className={`text-xs px-2 py-1 rounded ${
                event.status === "Live"
                  ? "bg-red-100 text-red-600"
                  : "bg-blue-100 text-blue-600"
              }`}
            >
              {event.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
