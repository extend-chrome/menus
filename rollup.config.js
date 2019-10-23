/* eslint-env node */

import typescript from 'rollup-plugin-typescript'
import { bundleImports } from 'rollup-plugin-bundle-imports'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'lib/index-esm.js',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: 'lib/index-cjs.js',
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
    external: [
      '@bumble/chrome-rxjs',
      'rxjs',
      'rxjs/operators',
      '@bumble/messages',
    ],
  },
]
