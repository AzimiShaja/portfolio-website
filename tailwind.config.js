/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#222831",
                secondary: "#31363F",
                tertiary: "#76ABAE",
                fourth: "#EEEEEE",
            },
            fontFamily: {
                sans: ["sans-serif"],
                poppins: ["Poppins", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
                madimi: ["Madimi One", "sans-serif"],
                lobster: ["Lobster", "sans-serif"],
            },
        },
    },
    plugins: [],
};
