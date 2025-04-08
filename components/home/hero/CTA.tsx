"use client";

import { useEffect, useState } from "react";

import { Copy, Plus } from "lucide-react";

export default function CTA() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (showTooltip) {
      setTimeout(() => {
        setShowTooltip(false);
      }, 1500);
    }
  }, [showTooltip]);

  return (
    <div className="flex gap-3 items-center ">
      <button className="flex bg-red-cta border border-dark rounded-xl shadow-[0px_4px_16px] shadow-red-cta cursor-pointer">
        <p className="py-3 px-2">Hire me</p>
        <div className="py-3 px-2 border-l border-dark">
          <Plus className="w-6 h-6" />
        </div>
      </button>
      <button
        className="flex bg-gray border border-light-gray rounded-xl cursor-pointer relative"
        onClick={() => {
          navigator.clipboard.writeText("li.bogdan74@gmail.com");
          setShowTooltip(true);
        }}
      >
        <p className="py-3 px-2">Copy Email</p>
        <div className="py-3 px-2 border-l border-light-gray">
          <Copy className="w-6 h-6" />
        </div>
        {showTooltip && (
          <span className="absolute left-0 -bottom-full bg-gray p-2 rounded-xl border border-light-gray">
            Email copied
          </span>
        )}
      </button>
    </div>
  );
}
