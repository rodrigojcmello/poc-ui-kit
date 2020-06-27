const path = require('path');

module.exports = {
  stories: ['../src/components/**/*.stories.tsx'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        require.resolve('ts-loader'),
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
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
              localIdentName: '[local]--[hash:base64:5]',
            },
          },
        },
        'sass-loader',
      ],
      include: path.resolve(__dirname, '../src'),
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
