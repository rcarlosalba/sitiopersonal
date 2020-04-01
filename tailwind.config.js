module.exports = {
  theme: {
    extend: {
      textColor: {
        'first-grey': '#e8e8e8',
        'first-blue': '#5588a3',
        'second-blue': '#145374',
        'third-blue': '#00334e'
      },
      colors:{
        'first-grey': '#e8e8e8',
        'first-blue': '#5588a3',
        'second-blue': '#145374',
        'third-blue': '#00334e'
      }
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    rotate: ['responsive', 'hover', 'focus', 'active', 'group-hover']
  },
  plugins: [],
}
