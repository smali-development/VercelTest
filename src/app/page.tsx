import { Outlet } from "react-router"
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Toaster } from "sonner";


export default function Home() {
  return (
    <div className="h-screen flex bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col max-w-[--breakpoint-2xl] ml-64">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Toaster />
    </div>


  );
}

// https://youtu.be/sE_F02e76dQ?list=PLOl4xN4eJVEP3AAIhueYYd9NYKqBw08vh&t=1877