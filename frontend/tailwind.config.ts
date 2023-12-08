/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        'mine': 'rgb(255, 244, 227)',
        'chilizNav': "#5f9ea0",
        'chilizColor': 'rgb(247, 108, 108)',
      },

      fontFamily: {
        chiliz: ['Comic Sans MS', 'cursive'],
      },
    },
    
  },
  plugins: [],
}
