/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'VR': "url('./assets/vrHeadset.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      spacing: {
        '90vh': '90vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '500': '500px',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
      },
      padding: {
        '40%': '40%',
      }
    },
  },
  plugins: [],
}

