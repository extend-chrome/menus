/* eslint-env node */

import typescript from 'rollup-plugin-typescript'
import { bundleImports } from 'rollup-plugin-bundle-imports'

const { main, module, dependencies } = require('./package.json')

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: module,
        format: 'esm',
        sourcemap: true,
      },
      {
        file: main,
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      bundleImports({
        useVirtualModule: true,
      }),
      typescript(),
    ],
    external: (id) => id.split('/')[0] in dependencies,
  },
]
