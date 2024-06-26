import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import markdownRawPlugin from 'vite-raw-plugin'



export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.SOME_KEY': JSON.stringify(env.SOME_KEY)
    },
    plugins: [react(),
      markdownRawPlugin({
        fileRegex: /\.md$/
      })
    ],
    base: "/CAT-SODIUM/"
  }
})