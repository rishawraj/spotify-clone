/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "2xs": "0.6875rem", // Equivalent to 11px
        xs: "0.75rem", // Equivalent to 12px
        sm: "0.875rem", // Equivalent to 14px
        base: "1rem", // Equivalent to 16px (default base font-size)
        lg: "1.125rem", // Equivalent to 18px
        xl: "1.25rem", // Equivalent to 20px
        "2xl": "1.5rem", // Equivalent to 24px
        "3xl": "1.875rem", // Equivalent to 30px
        "4xl": "2.25rem", // Equivalent to 36px
        "5xl": "3rem", // Equivalent to 48px
      },
    },
  },
  plugins: [],
};
