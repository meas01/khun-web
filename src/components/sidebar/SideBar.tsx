import { useState } from "react";
import { Button } from "@/components/ui/button";
import SidebarContent from "@/components/sidebar/SidebarContent";
import { Menu } from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">
      {/* Mobile Menu Button */}
      <div className="md:hidden p-2">
        <Button size="icon" variant="outline" onClick={() => setOpen(!open)}>
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-20 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white border-r p-4 z-30 
        transform transition-transform duration-300 md:hidden
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <SidebarContent close={() => setOpen(false)} />
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col h-screen w-64 border-r bg-white p-4">
        <SidebarContent />
      </div>
    </div>
  );
}
