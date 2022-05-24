module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6419E6",

          secondary: "#D926A9",

          accent: "#c4fff9",

          neutral: "#191D24",

          info: "#3ABFF8",
          "base-100": "#ffffff",
          success: "#36D399",

          warning: "#ffba08",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
