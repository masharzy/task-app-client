module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3498db",
          secondary: "#0ea5e9",
          accent: "#ef4444",
          neutral: "#1A172B",
          "base-100": "#111827",
          info: "#67e8f9",
          success: "#15803d",
          warning: "#fbbf24",
          error: "#FA7566",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
