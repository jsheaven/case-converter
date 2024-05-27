import { buildForNode } from '@jsheaven/easybuild'

await buildForNode({
  entryPoint: './src/index.ts',
  outfile: './dist/index.js',
  debug: process.argv.indexOf('--dev') > -1,
  outputFormats: ['esm', 'cjs'],
  esBuildOptions: {
    logLevel: 'error',
  },
})
