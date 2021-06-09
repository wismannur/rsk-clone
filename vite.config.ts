import { UserConfigExport } from 'vite';
import vue from '@vitejs/plugin-vue';
import jsx from '@vitejs/plugin-vue-jsx';
import viteCompression from 'vite-plugin-compression';

export default (): UserConfigExport => {
  return {
    build: {
      assetsInlineLimit: 0,
    },
    plugins: [
      vue(),
      jsx(),
      // gizp
      // viteCompression(),
      // br
      viteCompression({
        ext: '.br',
        algorithm: 'brotliCompress',
        deleteOriginFile: true,
        verbose: true,
      }),
    ],
  };
};