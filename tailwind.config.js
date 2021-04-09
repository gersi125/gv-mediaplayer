module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'meetup-blue': '#00455D',
        'meetup-purple': '1F24CC',
        'gray-750': '#3f495a',
        'gray-850': '#222733',
        'gray-900-spotify': '#121212',
        'gray-800-spotify': '#181818',
        'gray-700-spotify': '#282828'
      },
      fontSize: {
        xxs: '0.25rem',
      },
      spacing: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      width: {
        '1/8': '12.5%'
      }
    }
  },
  variants: {
    extend: {
      textColor: ['responsive', 'hover', 'focus', 'group-hover']
    },
  },
  plugins: [],
}
