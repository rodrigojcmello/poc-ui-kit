const path = require("path");

module.exports = {
    stories: ['../components/**/*.stories.tsx'],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.tsx?$/,
            use: [
                require.resolve("ts-loader"),
                {
                    loader: require.resolve("react-docgen-typescript-loader"),
                    options: {
                        // Provide the path to your tsconfig.json so that your stories can
                        // display types from outside each individual story.
                        tsconfigPath: path.resolve(__dirname, "../tsconfig.json"),
                    },
                },
            ],
        });

        config.module.rules.push({
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-modules-typescript-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: false ? '[hash:base64:5]' : '[local]--[hash:base64:5]'
                        }
                    }
                },
                // {
                //     loader: 'postcss-loader',
                //     options: {
                //         plugins: () => prod ? [autoprefixer(), cssnano()] : []
                //     }
                // },
                'sass-loader'
            ],
            include: path.resolve(__dirname, '../'),
        });
        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    },
    // webpackFinal: async config => {
    //     config.module.rules.push({
    //         test: /\.(ts|tsx)$/,
    //         use: [
    //             {
    //                 loader: require.resolve('ts-loader'),
    //             },
    //             // Optional
    //             // {
    //             //     loader: require.resolve('react-docgen-typescript-loader'),
    //             // },
    //         ],
    //     });
    //     config.resolve.extensions.push('.ts', '.tsx');
    //     return config;
    // },
};
