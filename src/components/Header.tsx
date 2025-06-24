"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      {/* Logo và slogan */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-xl">
          F8
        </div>
        <span className="text-black font-semibold text-sm md:text-base">
          Học Lập Trình Để Đi Làm
        </span>
      </div>

      {/* Ô tìm kiếm */}
      <div className="flex-1 px-6 hidden md:block">
        <div className="relative max-w-xl mx-auto">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Tìm kiếm khóa học, bài viết, video, ..."
            className="w-full py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
      </div>

      {/* Nút đăng ký / đăng nhập */}
      <div className="flex items-center space-x-4">
        <Link href="/register" className="text-sm font-medium text-black hover:text-orange-500">
          Đăng ký
        </Link>
        <Link
          href="/login"
          className="px-4 py-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-full text-sm font-medium hover:opacity-90 transition"
        >
          Đăng nhập
        </Link>
      </div>
    </header>
  );
}