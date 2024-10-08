/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white01: "#fff",
        black: "#000",
        greyil07: "#f0f0f0",
        black05: "#404040",
        lightgray: "#ccc",
        grey01: "#44494d",
        darkslategray: "#333",
        greenf01: "#006339",
        bc: "#0066bc",
        grey04: "#d1d1d1",
        "color-stroke-checkbox": "#7a87ab",
        grey03: "#8f9294",
        grey02: "#73777a",
        bluegrayil08: "#e0e8eb",
        placeholder: "#8a8a8a",
        black03: "#262626",
        silver: "#c4c4c4",
        gray: "rgba(0, 0, 0, 0.15)",
        greenf02: "#00884f",
        steelblue: "#3c8dbc",
        saddlebrown: "#5c2b00",
        gold: "#ede836",
        whitesmoke: {
          "100": "#f5f5f5",
          "200": "rgba(240, 240, 240, 0.7)",
        },
        grey05: "#e9e9e9",
        greyil08: "#fafafa",
        "gray-5": "#e0e0e0",
        dimgray: "#4c4c4c",
        greenf03: "#00ab76",
        d4e9e6: "#d4e9e6",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        "roboto-condensed": "'Roboto Condensed'",
        "body-116": "Inter",
        sarabun: "Sarabun",
        "sayso-chic": "'Sayso Chic'",
      },
      borderRadius: {
        xl: "20px",
        "8xs": "5px",
        "10xs": "3px",
        "12xs": "1px",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      smi: "13px",
      mini: "15px",
      "3xl": "22px",
      "5xl": "24px",
      lgi: "19px",
      "lg-5": "18.5px",
      "base-1": "15.1px",
      xs: "12px",
      sm: "14px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq650: {
        raw: "screen and (max-width: 650px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
