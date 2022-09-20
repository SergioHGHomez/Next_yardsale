// @type {import('next').NextConfig} 

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [  
    'cdn.pocket-lint.com',
    'cdn.shopify.com',
    'cdn.pocket-lint.com',
    'www.photolari.com',
    'upload.wikimedia.org',
    'mightygadget.co.uk',
    'i.blogs.es',
    'www.dwarf-factory.com',
    'i.postimg.cc',

  ],
  }
  // env: {
  //   customKey: 'customValue',
  // },
  // basePath: '/dist',
  // compress: true,
  // async redirects(){
  //   return[
  //     {
  //       source: '/hola',
  //       destination: 'https://gndx.dev',
  //       permanent: true,
  //     }
  //   ]
  // }

}

module.exports = nextConfig
