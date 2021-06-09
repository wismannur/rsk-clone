import { UserConfigExport } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteCompression from 'vite-plugin-compression';

require('dotenv').config();
const envMode = process.env.envMode === 'prod';
console.log('envMode vite ', envMode);

const vcProd = {
  ext: '.br',
  algorithm: 'brotliCompress',
  // deleteOriginFile: true,
  verbose: true,
};
const vc = envMode ? vcProd : {};

export default (): UserConfigExport => {
  return {
    build: {
      assetsInlineLimit: 0,
    },
    plugins: [
      vue(),
      // gizp
      // viteCompression(),
      // br
      viteCompression(vc),
    ],
  };
};