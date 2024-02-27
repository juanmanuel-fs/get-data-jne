import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      fontSize:{
        base:       ['16px', '24px'],
        large:      ['40px', '44px'],
        title1:     ['32px', '36px'],
        title2:     ['24px', '28px'],
        title3:     ['18px', '24px'],
        title4:     ['16px', '24px'],
        headline:   ['14px', '20px'],
        body:       ['14px', '20px'],
        callout:    ['13px', '17px'],
        subhead:    ['12px', '15px'],
        footnote:   ['11px', '14px'],
        caption1:   ['10px', '13px'],
        caption2:   ['9px', '12px']
      },
      backdropBlur: {
        30: '30px',
        20: '20px',
        16: '16px',
        12: '12px',
      },
      colors:{
        primary: {
          100:'#FF2D55',
          88: 'rgba(255, 45, 85, 0.88)',
          75: 'rgba(255, 45, 85, 0.75)',
          50: 'rgba(255, 45, 85, 0.5)',
          22: 'rgba(255, 45, 85, 0.2)',
          10: 'rgba(255, 45, 85, 0.10)',
          5:  'rgba(255, 45, 85, 0.05)', 
        },
        black:  {
          100:'#282122',
          88: 'rgba(40, 33, 34, 0.88)',
          75: 'rgba(40, 33, 34, 0.75)',
          50: 'rgba(40, 33, 34, 0.5)',
          22: 'rgba(40, 33, 34, 0.22)',
          10: 'rgba(40, 33, 34, 0.10)',
          5:  'rgba(40, 33, 34, 0.05)', 
        },
        white: {
          100:'#FFFFFF',
          88: 'rgba(255, 255, 255, 0.88)',
          75: 'rgba(255, 255, 255, 0.75)',
          50: 'rgba(255, 255, 255, 0.5)',
          22: 'rgba(255, 255, 255, 0.22)',
          10: 'rgba(255, 255, 255, 0.10)',
          5:  'rgba(255, 255, 255, 0.05)', 
        },
        fill: {
          primary:    '#78788020',
          secondary:  '#78788016',
          tertiary:   '#78788012',
          quaternary: '#78788008',
        },
        gridTemplateColumns: {
          'auto-fill-100': 'repeat(auto-fill, minmax(100px, 1fr))',
          'auto-fit-100': 'repeat(auto-fit, minmax(100px, 1fr))',
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ['group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
export default config
