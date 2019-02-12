const path = require("path");

module.exports = {
    module: {
        rules: [{
            test: /\.(css|scss)$/,
            loaders: ["to-string-loader", "style-loader", "css-loader", "sass-loader"],
            include: path.resolve(__dirname, "../")
        }]
    }
};