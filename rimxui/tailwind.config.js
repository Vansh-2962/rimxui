/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    // Generate all color utilities for the specific scales to ensure they're available
    // even if not directly found in the content
    {
      pattern:
        /^bg-(primary|neutral|success|error|warning|info|accent)-(50|100|200|300|400|500|600|700|800|900)$/,
    },
    {
      pattern:
        /^text-(primary|neutral|success|error|warning|info|accent)-(50|100|200|300|400|500|600|700|800|900)$/,
    },
    {
      pattern:
        /^border-(primary|neutral|success|error|warning|info|accent)-(50|100|200|300|400|500|600|700|800|900)$/,
    },
    // Add arbitrary value patterns for width and height
    { pattern: /^w-\[.*\]$/ },
    { pattern: /^h-\[.*\]$/ },
    // Add arbitrary value patterns for spacing
    { pattern: /^p-\[.*\]$/ },
    { pattern: /^px-\[.*\]$/ },
    { pattern: /^py-\[.*\]$/ },
    { pattern: /^pt-\[.*\]$/ },
    { pattern: /^pr-\[.*\]$/ },
    { pattern: /^pb-\[.*\]$/ },
    { pattern: /^pl-\[.*\]$/ },
    { pattern: /^m-\[.*\]$/ },
    { pattern: /^mx-\[.*\]$/ },
    { pattern: /^my-\[.*\]$/ },
    { pattern: /^mt-\[.*\]$/ },
    { pattern: /^mr-\[.*\]$/ },
    { pattern: /^mb-\[.*\]$/ },
    { pattern: /^ml-\[.*\]$/ },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        h1: ["4rem", { lineHeight: "1.2", fontWeight: "600" }],
        h2: ["3.5rem", { lineHeight: "1.2", fontWeight: "600" }],
        h3: ["3rem", { lineHeight: "1.2", fontWeight: "600" }],
        h4: ["2.5rem", { lineHeight: "1.2", fontWeight: "600" }],
        h5: ["2rem", { lineHeight: "1.2", fontWeight: "600" }],
        h6: ["1.5rem", { lineHeight: "1.2", fontWeight: "600" }],

        "body-lg": ["1.125rem", { lineHeight: "1.5" }],
        "body-lg-medium": [
          "1.125rem",
          { lineHeight: "1.5", fontWeight: "500" },
        ],
        "body-lg-semibold": [
          "1.125rem",
          { lineHeight: "1.5", fontWeight: "600" },
        ],
        "body-lg-bold": ["1.125rem", { lineHeight: "1.5", fontWeight: "700" }],

        "body-md": ["1rem", { lineHeight: "1.5" }],
        "body-md-medium": ["1rem", { lineHeight: "1.5", fontWeight: "500" }],
        "body-md-semibold": ["1rem", { lineHeight: "1.5", fontWeight: "600" }],
        "body-md-bold": ["1rem", { lineHeight: "1.5", fontWeight: "700" }],

        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        "body-sm-medium": [
          "0.875rem",
          { lineHeight: "1.5", fontWeight: "500" },
        ],

        "body-xs": ["0.75rem", { lineHeight: "1.5" }],
        "body-xs-medium": ["0.75rem", { lineHeight: "1.5", fontWeight: "500" }],
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      colors: {
        primary: {
          50: "#EEF2FF",
          100: "#D9E1FF",
          200: "#B3C5FF",
          300: "#8DA9FF",
          400: "#668DFF",
          500: "#3758F9",
          600: "#2C46C7",
          700: "#213495",
          800: "#162363",
          900: "#0B1131",
        },

        success: {
          50: "#ECFDF3",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#13C296",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
        },

        warning: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },

        error: {
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
        },

        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },

        accent: {
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95",
        },

        info: {
          50: "#ECFEFF",
          100: "#CFFAFE",
          200: "#A5F3FC",
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#06B6D4",
          600: "#0891B2",
          700: "#0E7490",
          800: "#155E75",
          900: "#164E63",
        },

        pink: {
          50: "#FDF2F8",
          100: "#FCE7F3",
          200: "#FBCFE8",
          300: "#F9A8D4",
          400: "#F472B6",
          500: "#EC4899",
          600: "#DB2777",
          700: "#BE185D",
          800: "#9D174D",
          900: "#831843",
        },

        orange: {
          50: "#FFF7ED",
          100: "#FFEDD5",
          200: "#FED7AA",
          300: "#FDBA74",
          400: "#FB923C",
          500: "#F97316",
          600: "#EA580C",
          700: "#C2410C",
          800: "#9A3412",
          900: "#7C2D12",
        },

        teal: {
          50: "#F0FDFA",
          100: "#CCFBF1",
          200: "#99F6E4",
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0D9488",
          700: "#0F766E",
          800: "#115E59",
          900: "#134E4A",
        },
      },

      spacing: {
        px: "1px",
        0: "0",
        0.5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
      },

      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },

      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
        none: "none",
        "shadow-1":
          "0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
        "shadow-2":
          "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "shadow-3":
          "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "shadow-4":
          "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "shadow-5": "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
        "shadow-6": "0px 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
