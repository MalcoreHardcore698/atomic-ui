const path = require('path')

const componentsDir = path.resolve(__dirname, '../components')
const iconsDir = path.resolve(__dirname, '../assets/images/icons')

module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    ...(process.env.NODE_ENV === 'production' ? ['@storybook/addon-storysource'] : [])
  ],
  webpackFinal: async (baseConfig) => {
    const { module = {} } = baseConfig

    const config = {
      ...baseConfig,
      performance: {
        ...(baseConfig.performance || {}),
        hints: false
      },
      module: {
        ...module,
        rules: [...(module.rules || [])]
      }
    }

    config.module.rules.push({
      test: /\.(js|jsx)$/,
      include: [componentsDir],
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [require.resolve('babel-preset-react-app')]
          }
        }
      ]
    })

    config.resolve.extensions.push('.js', '.jsx')

    const svgRule = config.module.rules.find((rule) => 'test.svg'.match(rule.test))
    svgRule.exclude = [componentsDir, iconsDir]

    config.module.rules.push({
        test: /\.svg$/i,
        include: [componentsDir, iconsDir],
        use: ['@svgr/webpack']
    })

    return config
  }
}
