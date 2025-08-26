/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@radix-ui/react-separator@1.1.2': '@radix-ui/react-separator',
      '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
      '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
      'lucide-react@0.487.0': 'lucide-react',
    }
    return config
  },
}

module.exports = nextConfig