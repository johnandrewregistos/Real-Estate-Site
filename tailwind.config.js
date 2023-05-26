/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: '#c7ad39',
      },
      backgroundImage: {
        'mainBg': "url('https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600')",
      },
    },
  },
  plugins: [],
}

