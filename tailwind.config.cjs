/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans KR"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#2563EB',
          secondary: '#64748B',
          success: '#22C55E',
          border: '#E5E7EB',
          surface: '#FFFFFF',
          canvas: '#F8FAFC',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.06)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
