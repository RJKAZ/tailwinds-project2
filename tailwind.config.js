module.exports = {
  presets: [
    require('./new_styles')
  ],
  corePlugins: {
    container: false,
  },
  purge: {
    enabled: false,
    content: ['./dist/**/*.html'],
    },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    debugScreens: {
      position: ['top', 'left'],
      },
      container: {
        center: true,
        padding: {
        DEFAULT: '0.5rem',
        sm: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl' : '4rem'
        },
        },
        
   
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontWeight: '800',
            },
            h2: {
              fontWeight: '400',
            }

          },

        },
        lg: {
          css: {
            h2: {
              color: 'green',
            },

          },
        },
      },
    },
  },
  variants: {
    backgroundColor: ['dark', 'group-hover', 'focus-within', 'hover', 'focus'],
    extend: {
      width: ['hover'],
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/typography'),
  ],
}
