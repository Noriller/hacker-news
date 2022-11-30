/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-ellipse': 'radial-gradient(ellipse, var(--tw-gradient-stops))',
        'gradient-ellipse-t': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
        'gradient-ellipse-tl': 'radial-gradient(ellipse at top left, var(--tw-gradient-stops))',
        'gradient-ellipse-tr': 'radial-gradient(ellipse at top right, var(--tw-gradient-stops))',
        'gradient-ellipse-l': 'radial-gradient(ellipse at left, var(--tw-gradient-stops))',
        'gradient-ellipse-r': 'radial-gradient(ellipse at right, var(--tw-gradient-stops))',
        'gradient-ellipse-b': 'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
        'gradient-ellipse-bl': 'radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))',
        'gradient-ellipse-br': 'radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))',
        'gradient-circle': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'gradient-circle-t': 'radial-gradient(circle at top, var(--tw-gradient-stops))',
        'gradient-circle-tl': 'radial-gradient(circle at top left, var(--tw-gradient-stops))',
        'gradient-circle-tr': 'radial-gradient(circle at top right, var(--tw-gradient-stops))',
        'gradient-circle-l': 'radial-gradient(circle at left, var(--tw-gradient-stops))',
        'gradient-circle-r': 'radial-gradient(circle at right, var(--tw-gradient-stops))',
        'gradient-circle-b': 'radial-gradient(circle at bottom, var(--tw-gradient-stops))',
        'gradient-circle-bl': 'radial-gradient(circle at bottom left, var(--tw-gradient-stops))',
        'gradient-circle-br': 'radial-gradient(circle at bottom right, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};
