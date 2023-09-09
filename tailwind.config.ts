import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        yellowdark: '#C47F17',
        yellow: '#DBAC2C',
        yellowlight: '#F1E9C9',
        purpledark: '#4B2995',
        purple: '#8047F8',
        purplelight: '#EBE5F9',
        basetitle: '#272221',
        basesubtitle: '#403937',
        basetext: '#574F4D',
        baselabel: '#8D8686',
        basehover: '#D7D5D5',
        basebutton: '#E6E5E5',
        baseinput: '#EDEDED',
        basecard: '#F3F2F2',
        background: '#FAFAFA',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
export default config
