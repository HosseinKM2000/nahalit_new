/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'green-bt': '#3B8002',
        'white' : '#fff',
        'black' : '#00000',
        'gray-77' : '#777777',
        'gray-88' : '#888888',
        'gray-66' : '#525252',
        'sky-blue' : '#6EC1E4',
        'gray-white' : 'rgb(210, 210, 210)',
        'white-e9' : '#e9e9e9',
        'gray-99' : '#f9f9f9',
        "gray-100"	: 'rgb(243 244 246);',
        'gray-200': 'rgb(229 231 235);',
        'gray-300'	: 'rgb(209 213 219);',
        'gray-400'	: 'rgb(156 163 175);',
        'gray-500'	: 'rgb(107 114 128);',
        'for-border' : '#e9e9e9',
        'light-blue' : '#1da1f2',
        'dark-blue' : '#3b5998',
        'soft-red' : '#b5071a',
        'light-orang' : '#ff5721',
        'pink' : '#e92b5f',
        'light-pink' : '#df6384',
        'transparent' : 'transparent',
        'blue-3' : '#00BCD4',
        'weak-red' : '#ff7d7d',
        'green-15' : '#155410;',
        'green-00' : '#004114',
        'green-02' : '#024B00',
        'green-005' : '#005A07;',
        'green-0E' : '#0E5900',
        'blue-db' : '#dbfcff',
        'green-72' : '#72fd9d',
        'green-57C' :'#57c053',
        'green-1c' : '#1c994c',
        'green-d5' : '#d5ffe2',
        'gray3030' : '#303030',
        'green-137' : '#137300',
        'weak-pink' : '#ffe8e8',
        'gray-5E5E' : '#5e5e5e',
        'green-08A' : '#08A824',
        'gray-4444' : '#444444',
        'gray-bbbb' : '#bbbbbb',
        'gray-b1b1' : '#b1b1b1;',
        'green-teal' : '#159895'
      }
    },

  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
