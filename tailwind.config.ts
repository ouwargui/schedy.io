/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    colors: {
      primary: '#1b1d1d',
      'primary-tint': '#323434',
      'primary-shade': '#161717',
      'text-primary': '#f3f7fe',
      'text-primary-shade': '#dbdee5',
      'text-shade': '#7a7c7f',
      'text-primary-shade-hover': '#afb2b7',
      'text-primary-shade-active': '#838589',
    },
    extend: {
      backgroundImage: {
        schedy: "url('/schedy.png')",
        small_schedy: "url('/small_schedy.png')",
      },
      boxShadow: {
        bright: '0px 0px 10px 5px rgb(122,124,127)',
      },
    },
  },
}
