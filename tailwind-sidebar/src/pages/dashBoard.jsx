import Sidebar from "../components/sideBar";
import ProfileCard from "../components/profileCard";
import ScheduleCard from "../components/scheduleCard";
import ActionButtons from "../components/actionButtons";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-semibold mb-6">Good morning, Luffy 👋</h1>
        <div className="md:grid grid-cols-3 gap-6">
          <ProfileCard />
          <ScheduleCard />
          <ActionButtons />
        </div>
      </main>
    </div>
  );
}
