module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        "desk": "1440px",
      },
      backgroundColor:{
        "strongCyan":          "hsl(172, 67%, 45%)",
        "veryDarkCyan":        "hsl(183, 100%, 15%)",
        "oneDarkGrayishCyan":  "hsl(186, 14%, 43%)",
        "twoDarkGrayishCyan":  "hsl(184, 14%, 56%)",
        "oneLightGrayishCyan": "hsl(185, 41%, 84%)",
        "twoLightGrayishCyan": "hsl(189, 41%, 97%)",
      },
      textColor:{
        "strongCyan":          "hsl(172, 67%, 45%)",
        "veryDarkCyan":        "hsl(183, 100%, 15%)",
        "oneDarkGrayishCyan":  "hsl(186, 14%, 43%)",
        "twoDarkGrayishCyan":  "hsl(184, 14%, 56%)",
        "oneLightGrayishCyan": "hsl(185, 41%, 84%)",
        "twoLightGrayishCyan": "hsl(189, 41%, 97%)",
        "treeLightGrayishCyan": "hsl(189, 41%, 97%)",
      },
      fontSize:{
        "12px":"12px",
        "18px":"20px",
        "24px":"24px",
        "34px":"34px",
        "36px":"36px",
      },
      fontFamily:{
        "spaceMono": ["Space Mono", "sans-serif"]
      },
      width:{
        "922px": "922px",
        "415px": "415px",
        "381px": "381px",
        "314px": "314px",
        "148px": "148px",
        "119px": "119px",
        "114px": "114px",
        "87%": "87%",
        "86%": "86%",
        "95%": "95%",
      },
      height:{
        "483px": "483px",
        "419px": "419px",
        "50px": "50px",
      },
      padding:{
        "146px":"146px",
        "136px":"136px",
        "64px":"64px",
        "45px":"45px",
        "46px":"46px",
        "38px":"38px",
        "34px":"34px",
        "31px":"31px",
        "24px":"24px",
        "23px":"23px",
        "20px":"20px",
        "16px": "16px",
        "10px":"10px",
        "12px":"12px",
        "7px":"7px",
      },
      outline: {
        "strongCyan":"2px solid hsl(172, 67%, 45%)",
        "red": '2px solid #ff0000',
      },
      spacing: {
        '22rem': '22rem',
       },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
