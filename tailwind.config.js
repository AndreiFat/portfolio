/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
        },
        backgroundImage: {
            'macbook-image': "url('/src/assets/images/homepage_macbook.jpg')",
        }
    },
    daisyui: {
        themes: [
            {
                mytheme: {

                    "primary": "#641ae6",

                    "secondary": "#d926a9",

                    "accent": "#1fb2a6",

                    "neutral": "#2a323c",

                    "base-100": "#1d232a",

                    "info": "#3abff8",

                    "success": "#4ade80",

                    "warning": "#fbbd23",

                    "error": "#f87272",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
}

