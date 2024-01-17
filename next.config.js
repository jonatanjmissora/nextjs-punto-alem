/** @type {import('next').NextConfig} */
const nextConfig = {

  //  Habilitar si quieres hacer un deploy manual que no sea en Vercel
  output: 'export',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
