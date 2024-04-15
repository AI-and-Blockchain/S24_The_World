/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        config.externals = [...config.externals, 'pino-pretty']
        if (!isServer) {
          config.resolve.fallback = {
            fs: false,
          };
        }
        return config
    },
}

module.exports = nextConfig
