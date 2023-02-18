module.exports = {
    content: ["./resources/**/*.blade.php", "./resources/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/forms"),
    ],
};
