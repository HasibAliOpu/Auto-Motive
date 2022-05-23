module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6419E6",

          secondary: "#D926A9",

          accent: "#1FB2A6",

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
