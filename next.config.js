const withLess = require("@zeit/next-less")
const withSass = require("@zeit/next-sass")
const withPlugins = require("next-compose-plugins")
const withBundleAnalyzer = require("@next/bundle-analyzer")

const isNotProduction = process.env.NODE_ENV !== "production"

const lessConfig = {
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#14639f",
      "@font-size-base": "12px",
      "@disabled-color": "#464a4c",
      "@line-height-base": 1.5,
      "@item-hover-bg": "#cedade",
    },
  },

  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === "function") {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === "function" ? [] : origExternals),
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: "null-loader",
      })
    }

    return config
  },
}

const bundleAnalyzerConfig = {
  enabled: process.env.ANALYZE === "true",
}

const plugins = [[withLess, lessConfig], [withSass], withBundleAnalyzer(bundleAnalyzerConfig)]

const nextConfig = {
  env: {},
  experimental: {
    productionBrowserSourceMaps: isNotProduction,
  },
}

module.exports = withPlugins(plugins, nextConfig)
