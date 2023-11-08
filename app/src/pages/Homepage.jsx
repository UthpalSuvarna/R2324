import Fossinfo from "../components/Fossinfo";
import GNUinfo from "../components/GNUinfo";
import Herosection from "../components/Herosection";
import SideNav from "../components/Sidebar";
import Timeline from "../components/Timeline";

export default function Homepage() {
  return (
    <div className="flex">
      <SideNav />
      <div>
        <Herosection />
        <Fossinfo />
        <GNUinfo />
        <Timeline />
      </div>
    </div>
  );
}
