import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main:         resolve(__dirname, 'index.html'),
        train:        resolve(__dirname, 'train.html'),
        connect:      resolve(__dirname, 'connect.html'),
        about:        resolve(__dirname, 'about.html'),
        earlyAccess:  resolve(__dirname, 'early-access.html'),
      }
    }
  }
})
