import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
    const IS_DEV = command === "serve";

    return {
        base: IS_DEV ? "" : "/build/",
        publicDir: "non_existent_folder",
        build: {
            outDir: "public/build",
            manifest: true,
            rollupOptions: {
                input: ["resources/js/main.tsx", "resources/css/app.css"],
            },
        },
        plugins: [react()],
    };
});
