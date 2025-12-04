import React, { useState } from "react";
import { Home, User, Settings, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Mobile Toggle Button */}
      <div className="md:hidden p-2">
        <Button size="icon" variant="outline" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="h-5 w-5" />
        </Button>
        {isOpen && (
          <div className="absolute top-0 left-0 h-screen w-64 bg-white border-r p-4 z-10">
            <SidebarContent />
          </div>
        )}
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col h-screen w-64 border-r bg-white p-4">
        <SidebarContent />
      </div>
    </div>
  );
}

function SidebarContent() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold px-4">Sean Raksmey Management</h1>
      <div className="border-t my-4" />

      <MenuItem icon={<Home size={18} />} label="Dashboard" />
      <MenuItem icon={<User size={18} />} label="Users" />
      <MenuItem icon={<Settings size={18} />} label="Settings" />
    </div>
  );
}

function MenuItem({ icon, label }: { icon: React.ReactElement; label: string }) {
  return (
    <button className="flex items-center w-full px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition">
      <span className="mr-3">{icon}</span>
      <span>{label}</span>
    </button>
  );
}
