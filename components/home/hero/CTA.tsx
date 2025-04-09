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
    <div className="flex items-center gap-3 text-xs sm:text-base">
      <button className="border-dark bg-red-cta shadow-red-cta flex cursor-pointer rounded-xl border shadow-[0px_4px_16px]">
        <p className="px-2 py-3">Hire me</p>
        <div className="border-dark border-l px-2 py-3">
          <Plus className="h-6 w-6" />
        </div>
      </button>
      <button
        className="border-light-gray bg-gray relative flex cursor-pointer rounded-xl border"
        onClick={() => {
          navigator.clipboard.writeText("li.bogdan74@gmail.com");
          setShowTooltip(true);
        }}
      >
        <p className="px-2 py-3">Copy Email</p>
        <div className="border-light-gray border-l px-2 py-3">
          <Copy className="h-6 w-6" />
        </div>
        {showTooltip && (
          <span className="border-light-gray bg-gray absolute -bottom-full left-0 rounded-xl border p-2">
            Email copied
          </span>
        )}
      </button>
    </div>
  );
}
