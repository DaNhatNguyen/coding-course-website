"use client";

import { Home, Route, BookText, Megaphone } from "lucide-react";

const navItems = [
  { icon: <Home className="w-6 h-6" />, label: "Trang chủ", active: true },
  { icon: <Route className="w-6 h-6" />, label: "Lộ trình", active: false },
  { icon: <BookText className="w-6 h-6" />, label: "Bài viết", active: false },
];

export default function Sidebar() {
  return (
    <aside className="sticky top-17 left-0 w-24 h-[calc(100vh-64px)] flex flex-col items-center justify-between py-6 bg-white">
      {/* Menu items */}
      <div className="flex flex-col items-center space-y-6">
        {navItems.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center px-3 py-3 rounded-2xl cursor-pointer transition ${
              item.active ? "bg-gray-100" : "hover:bg-gray-100"
            }`}
          >
            <div className="text-black">{item.icon}</div>
            <span className="mt-1 text-sm font-medium text-gray-800">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom button */}
      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer">
        <Megaphone className="w-5 h-5 text-gray-700" />
      </div>
    </aside>
  );
}