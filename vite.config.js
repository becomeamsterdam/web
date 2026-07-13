import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main:         resolve(__dirname, 'index.html'),
        train:        resolve(__dirname, 'train.html'),
        connect:      resolve(__dirname, 'connect.html'),
        business:     resolve(__dirname, 'business.html'),
        become:       resolve(__dirname, 'become.html'),
        aboutUs:      resolve(__dirname, 'about-us.html'),
        contact:      resolve(__dirname, 'contact.html'),
        sportClinics: resolve(__dirname, 'sport-clinics.html'),
        networkEvents: resolve(__dirname, 'network-events.html'),
        groupTraining: resolve(__dirname, 'group-training.html'),
        duoTraining:  resolve(__dirname, 'duo-training.html'),
        earlyAccess:  resolve(__dirname, 'early-access.html'),
        support:      resolve(__dirname, 'support.html'),
        privacy:      resolve(__dirname, 'privacy.html'),
        terms:        resolve(__dirname, 'terms.html'),
      }
    }
  }
})
