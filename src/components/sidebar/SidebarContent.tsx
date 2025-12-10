import { Home, Settings, User } from "lucide-react";
import { NavLink } from "react-router-dom";

interface Props {
  close?: () => void;
}

export default function SidebarContent({ close }: Props) {
  return (
    <div className="space-y-4">
      {/* Title */}
      <div className="flex items-center justify-between px-2">
        <h1 className="text-xl font-semibold">SR Management</h1>
      </div>

      <div className="border-t my-4" />

      {/* Menu */}
      <MenuItem to="/" icon={<Home size={18} />} label="Dashboard" onClick={close} />
      <MenuItem to="/users" icon={<User size={18} />} label="Users" onClick={close} />
      <MenuItem to="/settings" icon={<Settings size={18} />} label="Settings" onClick={close} />
    </div>
  );
}

function MenuItem({
  to,
  icon,
  label,
  onClick,
}: {
  to: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}) {
  return (
    <NavLink
  to={to}
    onClick={onClick}
      className="flex items-center w-full px-4 py-2 text-gray-700 rounded-lg 
      hover:bg-gray-100 transition"
    >
      <span className="mr-3">{icon}</span>
      <span>{label}</span>
    </NavLink>
  );
}
