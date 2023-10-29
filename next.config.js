/** @type {import('next').NextConfig} */
const nextConfig = {
  images : {
    formats : ['image/webp', 'image/avif'],
    remotePatterns : [
      {
        protocol:'https',
        hostname:'images.tokopedia.net',
        port:'',
      }
    ]
  }
}

module.exports = nextConfig
