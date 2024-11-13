// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'
//
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   assetsInclude: ['**/*.OTF'], /*не дало ефекта*/
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.OTF'], /*не дало ефекта*/
  resolve: {
    alias: {
      '@': '/src', // Приклад аліасу
    },
  },
  json: {
    namedExports: true,
    stringify: false,
  },
});