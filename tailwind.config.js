/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  	extend: {
  		colors: {
  			gray: {
  				'500': '#ADB5BD',
  				'600': '#868E96',
  				'700': '#495057'
  			},
  			primaryBlue: {
  				'50': '#E9F0FA',
  				'100': '#BCD0F0',
  				'200': '#9BB9E9',
  				'300': '#6E98DF',
  				'400': '#5185D9',
  				'500': '#2666CF',
  				'600': '#235DBC',
  				'700': '#1B4893',
  				'800': '#153872',
  				'900': '#102B57'
  			},
  			darkBlue: {
  				'50': '#e7e9eb',
  				'100': '#b6bac2',
  				'200': '#9299a5',
  				'300': '#616a7c',
  				'400': '#616a7c616a7c',
  				'500': '#13213b',
  				'600': '#111e36',
  				'700': '#0D172A',
  				'800': '#0A1220',
  				'900': '#080E19',
  				DEFAULT: '#0E192C'
  			},
  			red: {
  				'50': '#fcedf0',
  				'100': '#f7c7cf',
  				'200': '#f3acb8',
  				'300': '#f3acb8',
  				'400': '#ea6f84',
  				'500': '#e54b65',
  				'600': '#d0445c',
  				'700': '#a33548',
  				'800': '#7e2938',
  				'900': '#60202a'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		keyframes: {
        slideInRightToLeft: {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        slideOutRight: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
      },
      animation: {
        slideInRightToLeft: 'slideInRightToLeft 0.3s ease-out',
        slideOutRight: 'slideOutRight 0.3s ease-in',
        fadeIn: 'fadeIn 0.3s ease-out',
        fadeOut: 'fadeOut 0.3s ease-out',
        slideUp: 'slideUp 0.3s ease-out',
        slideDown: 'slideDown 0.3s ease-out',
      },
  	}
  },
  // eslint-disable-next-line no-undef, @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
}
