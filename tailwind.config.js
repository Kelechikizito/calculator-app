import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        theme1: {
          mainBackground: '#3c4654',               
          toggleBackground: '#232C43',             
          screenBackground: '#182034',              
          keyBackground: '#e9e2d9',                 
          keyShadow: '#1E5A64',                   
          keyBackgroundToggle: '#CA5502',           
          keyShadowTwo: '#873800',                  
          keyBackgroundTwo: '#F4F3E6',              
          keyShadowThree: '#A69D91',                
          text: '#444b5a',                          
          textWhite: '#FFFFFF'                    
        }, 
        theme2: {
          mainBackground: '#E5E5E5',               
          toggleBackground: '#D1CCCC',             
          screenBackground: '#F3F3F3',              
          keyBackground: '#377F86',                 
          keyShadow: '#1E5A64',                   
          keyBackgroundToggle: '#CA5502',           
          keyShadowTwo: '#873800',                  
          keyBackgroundTwo: '#F4F3E6',              
          keyShadowThree: '#A69D91',                
          text: '#35352C',                          
          textWhite: '#FFFFFF'                    
        },        
        theme3: {
          mainBackground: '#160628',              
          toggleBackground: '#1A0836',              
          screenBackground: '#1A0836',              
          keyBackground: '#6C34AC',                 
          keyShadow: '#C135C6',                     
          keyBackgroundToggle: '#26D7D9',           
          keyShadowTwo: '#6EF9E3',                  
          keyBackgroundTwo: '#331A45',              
          keyShadowThree: '#85307D',                
          text: '#FFE53D',                          
          textWhite: '#FFFFFF'                      
        }
        },
      },
    },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('theme1', 'body.theme1 &')
      addVariant('theme2', 'body.theme2 &')
      addVariant('theme3', 'body.theme3 &')
    })
  ],
}

