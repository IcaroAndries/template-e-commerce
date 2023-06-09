import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias : {
      '~images' : path.resolve(__dirname, 'src/imgs'),
      '~config' : path.resolve(__dirname, 'src/config')
    }
  },
})
