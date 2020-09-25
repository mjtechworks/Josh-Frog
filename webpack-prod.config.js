const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          syntax: 'postcss-scss',
          plugins: () => [
            require('postcss-import'),
            require('tailwindcss'),
            require('autoprefixer'),
            purgecss({
              content: ['./**/*.html'],
              // Example to let PurgeCss know how to exclude cdk and mat prefixes if your using Angular CDK and Angular Material
              //whitelistPatterns: [/^cdk-|mat-/],
              defaultExtractor: (content) =>
                content.match(/[\w-/:]+(?<!:)/g) || []
            })
          ]
        }
      }
    ]
  }
};
