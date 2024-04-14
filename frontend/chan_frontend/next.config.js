/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        config.externals = [...config.externals, 'pino-pretty']
        return config
    },
}

module.exports = nextConfig
