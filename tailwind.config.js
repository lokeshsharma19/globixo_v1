export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        btnColor: "#891df5",
        footerColor: "#12002e",
        bgColor: "#f0ecff",
      },
      borderWidth: {
        0.5: "1px",
      },
      width: {
        "3.5/12": "65%",
      },
      height: {
        120: "29rem",
        121: "30rem",
        110: "27rem",
      },
      borderRadius: {
        "4xl": "10rem",
      },
      gridTemplateColumns: {
        layout: "minmax(1000px, 1fr) 250px",
      },
    },
  },
  plugins: [],
};
