export default {
    theme: {
      animation: {
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        fade: 'fadeOut 5s ease-in-out',
        removeAlert: 'removeAlertOut 2s ease-in-out',
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
        removeAlertOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
        ping: {
          '75%, 100%': {
            transform: 2,
            opacity: 0,
          }
        }
      }),
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }
        
            'md': '768px',
            // => @media (min-width: 768px) { ... }
        
            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }
        
            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
        
            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        }
        ,
        colors: {
          'blue': '#2D82B7',
          'blue-dark': '#07004D',
          'purple': '#7e5bef',
          'pink': '#ff49db',
          'orange': '#ff7849',
          'yellow': '#ffc82c',
          'charcoal': '#2F3E46',
          'dark-slate-gray': '#354F52',
          'hookers-green': '#52796F',
          'dark-sea-green': '#84A98C',
          'ash-gray': '#CAD2C5',
        },
        fontFamily: {
          sans: ['Graphik', 'sans-serif'],
          serif: ['Merriweather', 'serif'],
        },
        extend: {
          spacing: {
            '8xl': '96rem',
            '9xl': '128rem',
          },
          borderRadius: {
            '4xl': '2rem',
          }
        }
      },
}