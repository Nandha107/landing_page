/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite", // Slow rotation
        "spin-reverse-slow": "spin-reverse 8s linear infinite",
        "spin-slower": "spin 15s linear infinite",
		    "bg-wave": "bg-wave 5s infinite", // Adjust the duration as needed
      },
	  keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
		'bg-wave': {
          '0%, 100%': { backgroundColor: 'rgba(255, 0, 0, 1)' }, // Red
          '50%': { backgroundColor: 'rgba(0, 0, 255, 1)' }, // Blue
        },
      },
	  borderRadius: {
        'custom-tr': '18rem', // or your desired value
        'custom-bl': '8rem', 
        'custom-tl': '18rem',
        'custom-br': '8rem'  // or your desired value

      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "",
    themes: [],
  },
};
