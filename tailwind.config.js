module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#9400d3', // Dark Violet
        accent: '#ff69b4', // Hot Pink
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '100%': '100%',
      },
      backgroundPosition: {
        'bottom': 'bottom',
        'center': 'center',
        'left': 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        'right': 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        'top': 'top',
      },
      backgroundRepeat: {
        'no-repeat': 'no-repeat',
        'repeat': 'repeat',
        'repeat-x': 'repeat-x',
        'repeat-y': 'repeat-y',
        'round': 'round',
        'space': 'space',
      }
    },
  },
  plugins: [
    'tailwindcss',
    'autoprefixer',
  ],
};
