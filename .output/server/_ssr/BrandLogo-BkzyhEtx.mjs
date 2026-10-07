import "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
function BrandLogo({ className = "", compact = false, size = "md" }) {
	const containerSizes = {
		sm: "px-3 py-1.5",
		md: "px-4 py-2 sm:px-5 sm:py-2.5",
		lg: "px-6 py-3 sm:px-7 sm:py-3.5"
	}[size];
	const textSizes = {
		sm: "text-xs sm:text-sm tracking-[0.14em]",
		md: "text-sm sm:text-base md:text-lg tracking-[0.16em]",
		lg: "text-lg sm:text-xl md:text-2xl tracking-[0.18em]"
	}[size];
	const circleSizes = {
		sm: "h-5 w-5 text-[10px] border-[1.5px]",
		md: "h-6 w-6 sm:h-7 sm:w-7 text-xs border-[2px]",
		lg: "h-7 w-7 sm:h-8 sm:w-8 text-sm border-[2.5px]"
	}[size];
	const subtextSizes = {
		sm: "text-[7px] tracking-[0.22em] mt-0.5",
		md: "text-[8px] sm:text-[9px] tracking-[0.26em] mt-1",
		lg: "text-[10px] sm:text-[11px] tracking-[0.3em] mt-1.5"
	}[size];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `inline-flex flex-col items-center justify-center rounded-2xl bg-[#10251f] shadow-md border border-white/15 transition duration-200 select-none ${containerSizes} ${className}`,
		style: { boxShadow: "0 4px 20px -2px rgba(16, 37, 31, 0.45)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-center gap-2 sm:gap-2.5 leading-none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `font-black text-white uppercase ${textSizes}`,
					children: "POKE"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `flex shrink-0 items-center justify-center rounded-full border-white font-black text-white ${circleSizes}`,
					children: "N"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `font-black text-white uppercase ${textSizes}`,
					children: "BOWL"
				})
			]
		}), !compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `font-black uppercase text-[#d7ff45] text-center w-full leading-none ${subtextSizes}`,
			children: "SUR MESURE"
		})]
	});
}
//#endregion
export { BrandLogo as t };
