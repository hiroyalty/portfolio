'use client'
import React from "react";

export default function ScreenSizeDetector() {
  return (
    <div
      className="fixed left-0 z-10 bottom-16 "
      // make this div on the top of everything
      style={{ zIndex: 1000 }}
    >
      <div className="flex items-center justify-center w-8 h-6 p-1 text-xs font-bold text-black bg-yellow-300 rounded-r-md">
        <span className="hidden 4xl:block 3xl:block 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden">4XL</span>
        <span className="hidden 3xl:hidden 2xl:block xl:hidden lg:hidden md:hidden sm:hidden">3XL</span>
        <span className="hidden 2xl:hidden xl:block lg:hidden md:hidden sm:hidden">2XL</span>
        <span className="hidden xl:hidden lg:block md:hidden sm:hidden">XL</span>
        <span className="hidden xl:hidden lg:hidden md:block sm:hidden">Lg</span>
        <span className="hidden xl:hidden lg:hidden md:hidden sm:block ">md</span>
        <span className="block xl:hidden lg:hidden md:hidden sm:hidden">sm</span>
      </div>
    </div>
  );
}
