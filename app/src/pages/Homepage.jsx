import Fossinfo from "../components/Fossinfo";
import GNUinfo from "../components/GNUinfo";
import Herosection from "../components/Herosection";
import Navbar from "../components/Navbar";
import Timeline from "../components/Timeline";

export default function Homepage () {
    return(
        <>
        <Navbar/>
        <Herosection/>
        <Fossinfo/>
        <GNUinfo/>
        <Timeline/>
        </>
    )
}