export function styler(cls) {
  const staticStyles = {
    "red-100": { color: "#fee2e2" },
    "red-500": { color: "#ef4444" },
    "red-900": { color: "#7f1d1d" },
    "orange-100": { color: "#ffedd5" },
    "orange-500": { color: "#f97316" },
    "orange-900": { color: "#7c2d12" },
    "green-100": { color: "#dcfce7" },
    "green-500": { color: "#22c55e" },
    "green-900": { color: "#14532d" },
    "blue-100": { color: "#dbeafe" },
    "blue-500": { color: "#3b82f6" },
    "blue-900": { color: "#1e3a8a" },
    "pink-100": { color: "#fce7f3" },
    "pink-500": { color: "#ec4899" },
    "pink-900": { color: "#831843" },
    "gray-100": { color: "#f3f4f6" },
    "gray-500": { color: "#6b7280" },
    "gray-900": { color: "#111827" },

    "box-border": { "box-sizing": "border-box" },
    "box-content": { "box-sizing": "content-box" },
    inline: { display: "inline" },
    block: { display: "block" },
    "inline-block": { display: "inline-block" },
    hidden: { display: "none" },
    "text-center": { textAlign: "center" },
    "text-left": { textAlign: "left" },
    "text-right": { textAlign: "right" },

    flex: { display: "flex" },
    "inline-flex": { display: "inline-flex" },
    "flex-row": { "flex-direction": "row" },
    "flex-row-reverse": { "flex-direction": "row-reverse" },
    "flex-col": { "flex-direction": "column" },
    "flex-col-reverse": { "flex-direction": "column-reverse" },
    "flex-wrap": { "flex-wrap": "wrap" },
    "flex-nowrap": { "flex-wrap": "nowrap" },
    "flex-wrap-reverse": { "flex-wrap": "wrap-reverse" },

    grid: { display: "grid" },
    "inline-grid": { display: "inline-grid" },

    static: { position: "static" },
    relative: { position: "relative" },
    absolute: { position: "absolute" },
    fixed: { position: "fixed" },
    sticky: { position: "sticky" },

    "justify-start": { "justify-content": "flex-start" },
    "justify-end": { "justify-content": "flex-end" },
    "justify-center": { "justify-content": "center" },
    "justify-between": { "justify-content": "space-between" },
    "justify-around": { "justify-content": "space-around" },
    "justify-evenly": { "justify-content": "space-evenly" },
    "items-start": { "align-items": "flex-start" },
    "items-end": { "align-items": "flex-end" },
    "items-center": { "align-items": "center" },
    "items-baseline": { "align-items": "baseline" },
    "items-stretch": { "align-items": "stretch" },

    "bg-red-100": { backgroundColor: "#fee2e2" },
    "bg-red-500": { backgroundColor: "#ef4444" },
    "bg-red-900": { backgroundColor: "#7f1d1d" },
    "bg-orange-100": { backgroundColor: "#ffedd5" },
    "bg-orange-500": { backgroundColor: "#f97316" },
    "bg-orange-900": { backgroundColor: "#7c2d12" },
    "bg-green-100": { backgroundColor: "#dcfce7" },
    "bg-green-500": { backgroundColor: "#22c55e" },
    "bg-green-900": { backgroundColor: "#14532d" },
    "bg-blue-100": { backgroundColor: "#dbeafe" },
    "bg-blue-500": { backgroundColor: "#3b82f6" },
    "bg-blue-900": { backgroundColor: "#1e3a8a" },
    "bg-pink-100": { backgroundColor: "#fce7f3" },
    "bg-pink-500": { backgroundColor: "#ec4899" },
    "bg-pink-900": { backgroundColor: "#831843" },
    "bg-gray-100": { backgroundColor: "#f3f4f6" },
    "bg-gray-500": { backgroundColor: "#6b7280" },
    "bg-gray-900": { backgroundColor: "#111827" },

    "rounded-xs": { "border-radius": "0.125rem" },
    "rounded-sm": { "border-radius": "0.25rem" },
    "rounded-md": { "border-radius": "0.375rem" },
    "rounded-lg": { "border-radius": "0.5rem" },
    "rounded-xl": { "border-radius": "0.75rem" },
    "rounded-none": { "border-radius": "0" },
    "rounded-full": { "border-radius": "9999px" },

    "border-red-100": { border: "1px solid #fee2e2" },
    "border-red-500": { border: "1px solid #ef4444" },
    "border-red-900": { border: "1px solid #7f1d1d" },
    "border-orange-100": { border: "1px solid #ffedd5" },
    "border-orange-500": { border: "1px solid #f97316" },
    "border-orange-900": { border: "1px solid #7c2d12" },
    "border-green-100": { border: "1px solid #dcfce7" },
    "border-green-500": { border: "1px solid #22c55e" },
    "border-green-900": { border: "1px solid #14532d" },
    "border-blue-100": { border: "1px solid #dbeafe" },
    "border-blue-500": { border: "1px solid #3b82f6" },
    "border-blue-900": { border: "1px solid #1e3a8a" },
    "border-pink-100": { border: "1px solid #fce7f3" },
    "border-pink-500": { border: "1px solid #ec4899" },
    "border-pink-900": { border: "1px solid #831843" },
    "border-gray-100": { border: "1px solid #f3f4f6" },
    "border-gray-500": { border: "1px solid #6b7280" },
    "border-gray-900": { border: "1px solid #111827" },

    "border-solid": { borderStyle: "solid" },
    "border-dashed": { borderStyle: "dashed" },
    "border-dotted": { borderStyle: "dotted" },
    "border-double": { borderStyle: "double" },
    "border-hidden": { borderStyle: "hidden" },
    "border-none": { borderStyle: "none" },

    "shadow-sm": {
      boxShadow:
        "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    },
    "shadow-md": {
      boxShadow:
        "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    },
    "shadow-lg": {
      boxShadow:
        "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    },
    "shadow-xl": {
      boxShadow:
        "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    },
    "shadow-2xl": { boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)" },
    "shadow-none": { boxShadow: "none" },

    "text-shadow-xs": { textShadow: "0px 1px 1px rgb(0 0 0 / 0.2)" },
    "text-shadow-sm": {
      textShadow:
        "0px 1px 0px rgb(0 0 0 / 0.075), 0px 1px 1px rgb(0 0 0 / 0.075), 0px 2px 2px rgb(0 0 0 / 0.075)",
    },
    "text-shadow-md": {
      textShadow:
        "0px 1px 1px rgb(0 0 0 / 0.1), 0px 1px 2px rgb(0 0 0 / 0.1), 0px 2px 4px rgb(0 0 0 / 0.1)",
    },
    "text-shadow-lg": {
      textShadow:
        "0px 1px 2px rgb(0 0 0 / 0.1), 0px 3px 6px rgb(0 0 0 / 0.1), 0px 5px 10px rgb(0 0 0 / 0.1)",
    },
    "text-shadow-none": { textShadow: "none" },

    "cursor-pointer": { cursor: "pointer" },
    "cursor-default": { cursor: "default" },

    button: {
      padding: "8px 16px",
      backgroundColor: "#ff6900",
      color: "white",
      borderRadius: "4px",
      cursor: "pointer",
      border: "none",
      fontSize: "14px",
      fontWeight: "500",
    },

    "opacity-25": { opacity: "0.25" },
    "opacity-50": { opacity: "0.5" },
    "opacity-75": { opacity: "0.75" },
    "opacity-100": { opacity: "1" },

    "scale-90": { transform: "scale(0.9)" },
    "scale-100": { transform: "scale(1)" },
    "scale-110": { transform: "scale(1.1)" },
    "rotate-45": { transform: "rotate(45deg)" },
    "rotate-90": { transform: "rotate(90deg)" },
    "-rotate-45": { transform: "rotate(-45deg)" },

    "z-0": { "z-index": "0" },
    "z-10": { "z-index": "10" },
    "z-20": { "z-index": "20" },
    "z-30": { "z-index": "30" },
    "z-40": { "z-index": "40" },
    "z-50": { "z-index": "50" },

    "font-light": { "font-weight": "300" },
    "font-normal": { "font-weight": "400" },
    "font-medium": { "font-weight": "500" },
    "font-semibold": { "font-weight": "600" },
    "font-bold": { "font-weight": "700" },
    "font-extrabold": { "font-weight": "800" },

    uppercase: { "text-transform": "uppercase" },
    lowercase: { "text-transform": "lowercase" },
    capitalize: { "text-transform": "capitalize" },

    underline: { "text-decoration": "underline" },
    "line-through": { "text-decoration": "line-through" },
    "no-underline": { "text-decoration": "none" },

    "border-0": { "border-width": "0" },
    "border-2": { "border-width": "2px" },
    "border-4": { "border-width": "4px" },
    "border-8": { "border-width": "8px" },

    "outline-none": { outline: "none" },
    "outline-black": { outline: "1px solid black" },
    "outline-white": { outline: "1px solid white" },

    "cursor-not-allowed": { cursor: "not-allowed" },
    "cursor-text": { cursor: "text" },
    "cursor-move": { cursor: "move" },

    "select-none": { "user-select": "none" },
    "select-text": { "user-select": "text" },
    "select-all": { "user-select": "all" },

    "overflow-hidden": { overflow: "hidden" },
    "overflow-visible": { overflow: "visible" },
    "overflow-scroll": { overflow: "scroll" },

    invisible: { visibility: "hidden" },
    visible: { visibility: "visible" },

    "whitespace-normal": { "white-space": "normal" },
    "whitespace-nowrap": { "white-space": "nowrap" },
    "whitespace-pre": { "white-space": "pre" },

    "list-none": { "list-style-type": "none" },
    "list-disc": { "list-style-type": "disc" },
    "list-decimal": { "list-style-type": "decimal" },

    "bg-gradient-to-r": {
      background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
    },
    "bg-gradient-to-b": {
      background: "linear-gradient(to bottom, #10b981, #f59e0b)",
    },
    "bg-gradient-to-br": {
      background: "linear-gradient(to bottom right, #ef4444, #3b82f6)",
    },

    "top-0": { top: "0" },
    "top-4": { top: "16px" },
    "top-8": { top: "32px" },
    "left-0": { left: "0" },
    "left-4": { left: "16px" },
    "left-8": { left: "32px" },
    "right-0": { right: "0" },
    "right-4": { right: "16px" },
    "bottom-0": { bottom: "0" },
    "bottom-4": { bottom: "16px" },

    "w-full": { width: "100%" },
    "h-full": { height: "100%" },
    "min-h-screen": { minHeight: "100vh" },

    "yellow-100": { color: "#fef3c7" },
    "yellow-500": { color: "#eab308" },
    "purple-100": { color: "#f3e8ff" },
    "purple-500": { color: "#a855f7" },
    "indigo-100": { color: "#e0e7ff" },
    "indigo-500": { color: "#6366f1" },
    "cyan-100": { color: "#cffafe" },
    "cyan-500": { color: "#06b6d4" },
    "teal-100": { color: "#ccfbf1" },
    "teal-500": { color: "#14b8a6" },

    "bg-yellow-100": { backgroundColor: "#fef3c7" },
    "bg-yellow-500": { backgroundColor: "#eab308" },
    "bg-purple-100": { backgroundColor: "#f3e8ff" },
    "bg-purple-500": { backgroundColor: "#a855f7" },
    "bg-indigo-100": { backgroundColor: "#e0e7ff" },
    "bg-indigo-500": { backgroundColor: "#6366f1" },
    "bg-cyan-100": { backgroundColor: "#cffafe" },
    "bg-cyan-500": { backgroundColor: "#06b6d4" },
    "bg-teal-100": { backgroundColor: "#ccfbf1" },
    "bg-teal-500": { backgroundColor: "#14b8a6" },
    "bg-white": { backgroundColor: "#ffffff" },
  };

  const dynamicStyles = {
    // Spacing
    p: (val) => ({ padding: 4 * val + "px" }),
    m: (val) => ({ margin: 4 * val + "px" }),
    pt: (val) => ({ "padding-top": 4 * val + "px" }),
    pb: (val) => ({ "padding-bottom": 4 * val + "px" }),
    pl: (val) => ({ "padding-left": 4 * val + "px" }),
    pr: (val) => ({ "padding-right": 4 * val + "px" }),
    mt: (val) => ({ "margin-top": 4 * val + "px" }),
    mb: (val) => ({ "margin-bottom": 4 * val + "px" }),
    ml: (val) => ({ "margin-left": 4 * val + "px" }),
    mr: (val) => ({ "margin-right": 4 * val + "px" }),

    text: (val) => ({ color: val }),
    bg: (val) => ({ backgroundColor: val }),

    fs: (v) => ({ fontSize: v + "px" }),
    rounded: (val) => ({ "border-radius": val + "px" }),
    w: (val) => ({ width: val + "px" }),
    h: (val) => ({ height: val + "px" }),
    gap: (val) => ({ gap: 4 * val + "px" }),
    "grid-cols": (val) => ({
      "grid-template-columns": `repeat(${val}, minmax(0, 1fr))`,
    }),
  };

  let styleObj = null;

  if (staticStyles[cls]) {
    styleObj = staticStyles[cls];
  } else {
    const parts = cls.split("-");
    const key = parts[0];
    const value = parts.slice(1).join("-");

    if (dynamicStyles[key]) {
      styleObj = dynamicStyles[key](value);
    }
  }

  return styleObj;
}
