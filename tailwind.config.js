/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],  
  safelist: [
    'text-[#34d399]',
    'border-[#34d399]',
    'bg-[#0f0f0f]',
    'bg-[#111]',
    'bg-[#000]',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
