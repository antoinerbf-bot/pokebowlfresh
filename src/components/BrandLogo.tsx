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
  const containerSizes = {
    sm: "px-3 py-1.5",
    md: "px-4 py-2 sm:px-5 sm:py-2.5",
    lg: "px-6 py-3 sm:px-7 sm:py-3.5",
  }[size];

  const textSizes = {
    sm: "text-xs sm:text-sm tracking-[0.14em]",
    md: "text-sm sm:text-base md:text-lg tracking-[0.16em]",
    lg: "text-lg sm:text-xl md:text-2xl tracking-[0.18em]",
  }[size];

  const circleSizes = {
    sm: "h-5 w-5 text-[10px] border-[1.5px]",
    md: "h-6 w-6 sm:h-7 sm:w-7 text-xs border-[2px]",
    lg: "h-7 w-7 sm:h-8 sm:w-8 text-sm border-[2.5px]",
  }[size];

  const subtextSizes = {
    sm: "text-[7px] tracking-[0.22em] mt-0.5",
    md: "text-[8px] sm:text-[9px] tracking-[0.26em] mt-1",
    lg: "text-[10px] sm:text-[11px] tracking-[0.3em] mt-1.5",
  }[size];

  return (
    <div
      className={`inline-flex flex-col items-center justify-center rounded-2xl bg-[#10251f] shadow-md border border-white/15 transition duration-200 select-none ${containerSizes} ${className}`}
      style={{
        boxShadow: "0 4px 20px -2px rgba(16, 37, 31, 0.45)",
      }}
    >
      <div className="flex items-center justify-center gap-2 sm:gap-2.5 leading-none">
        <span className={`font-black text-white uppercase ${textSizes}`}>
          POKE
        </span>

        <span
          className={`flex shrink-0 items-center justify-center rounded-full border-white font-black text-white ${circleSizes}`}
        >
          N
        </span>

        <span className={`font-black text-white uppercase ${textSizes}`}>
          BOWL
        </span>
      </div>

      {!compact && (
        <span
          className={`font-black uppercase text-[#d7ff45] text-center w-full leading-none ${subtextSizes}`}
        >
          SUR MESURE
        </span>
      )}
    </div>
  );
}
