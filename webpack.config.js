const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

module.exports = {
    // other webpack configurations...

    plugins: [
        // other plugins...
        new GoogleFontsPlugin({
            fonts: [
                { family: "Roboto", variants: ["400", "700"] },
                { family: "Alata", variants: ["400", "700"] },
                // You can add more font families if needed
            ],
            formats: ["woff2"], // or other formats as needed
        }),
    ],
};
