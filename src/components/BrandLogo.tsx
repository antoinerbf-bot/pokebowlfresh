import React from "react";

export function BrandLogo({
  className = "",
  compact = false,
  size = "md",
}: {
  className?: string;
  compact?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClasses = {
    sm: "px-3 py-1.5 gap-2",
    md: "px-4 py-2 sm:px-5 sm:py-2.5 gap-2.5",
    lg: "px-5 py-3 sm:px-6 sm:py-3.5 gap-3",
  }[size];

  const textClasses = {
    sm: "text-sm sm:text-base",
    md: "text-base sm:text-xl",
    lg: "text-xl sm:text-2xl",
  }[size];

  const circleClasses = {
    sm: "h-6 w-6 text-xs border-[2px]",
    md: "h-7 w-7 sm:h-8 sm:w-8 text-xs sm:text-sm border-[2.5px]",
    lg: "h-8 w-8 sm:h-9 sm:w-9 text-sm sm:text-base border-[2.5px]",
  }[size];

  const subtextClasses = {
    sm: "text-[7px]",
    md: "text-[8px] sm:text-[9px]",
    lg: "text-[9px] sm:text-[10px]",
  }[size];

  return (
    <div
      className={`inline-flex items-center rounded-2xl bg-[#10251f] shadow-md border border-white/15 transition duration-200 select-none ${sizeClasses} ${className}`}
      style={{
        boxShadow: "0 4px 20px -2px rgba(16, 37, 31, 0.45)",
      }}
    >
      <span
        className={`font-black tracking-[0.18em] text-white uppercase ${textClasses}`}
        style={{ letterSpacing: "0.18em" }}
      >
        POKE
      </span>

      <span
        className={`flex shrink-0 items-center justify-center rounded-full border-white font-black text-white ${circleClasses}`}
      >
        N
      </span>

      <div className="flex flex-col items-start leading-none">
        <span
          className={`font-black tracking-[0.18em] text-white uppercase ${textClasses}`}
          style={{ letterSpacing: "0.18em" }}
        >
          BOWL
        </span>
        {!compact && (
          <span
            className={`mt-0.5 font-black uppercase tracking-[0.24em] text-[#d7ff45] ${subtextClasses}`}
            style={{ letterSpacing: "0.24em" }}
          >
            SUR MESURE
          </span>
        )}
      </div>
    </div>
  );
}
