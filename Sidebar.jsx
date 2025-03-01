import { Home, Compass, Bell, MessageCircle, User, Menu } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { name: "Home", icon: <Home size={22} /> },
    { name: "Explore", icon: <Compass size={22} /> },
    { name: "Alerts", icon: <Bell size={22} /> },
    { name: "Messages", icon: <MessageCircle size={22} /> },
    { name: "Profile", icon: <User size={22} /> },
  ];

  return (
    <div className={`h-screen ${isCollapsed ? "w-20" : "w-64"} bg-gray-900 text-white p-5 flex flex-col transition-all duration-300`}>
      <button
        className="mb-6 flex items-center justify-center p-2 rounded-lg hover:bg-gray-800"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <Menu size={24} />
      </button>
      <nav className="space-y-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 cursor-pointer transition"
          >
            {item.icon}
            {!isCollapsed && <span>{item.name}</span>}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
