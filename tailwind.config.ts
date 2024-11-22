import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        flowbite.content(),
        "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primaryGreen: "#22c55e"
            }
        }
    },
    plugins: [flowbite.plugin(), require("flowbite/plugin")]
} satisfies Config;
