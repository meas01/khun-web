import { Home, Settings, User, Users2 } from "lucide-react";
import { NavLink } from "react-router-dom";
import profileImage from "@/react-app/assets/RaksmeySean.jpg";

interface Props {
  close?: () => void;
}

export default function SidebarContent({ close }: Props) {
  return (
    <div className="space-y-4">
      {/* Title */}
      <h1 className="text-xl font-semibold">
        <span
          className="inline-block text-[20px] font-extrabold leading-tight"
          style={{
            backgroundImage: `url(${profileImage})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            padding: "0.25rem 0.5rem",
          }}
        >
          SEAN RAKSMEY
        </span>
      </h1>
      <div className="border-t my-4" />
      {/* Menu */}
      <MenuItem
        to="/"
        icon={<Home size={18} />}
        label="Dashboard"
        onClick={close}
      />
      <MenuItem
        to="/users"
        icon={<User size={18} />}
        label="Users"
        onClick={close}
      />
      <MenuItem
        to="/settings"
        icon={<Settings size={18} />}
        label="Settings"
        onClick={close}
      />
      <MenuItem
        to="/be-my-members"
        icon={<Users2 size={18} />}
        label="Be My Members"
        onClick={close}
      />
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
