import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

const config = {
  input: 'src/tiny-slider.js',
  output: [{
    file: 'dist/tiny-slider.js',
    format: 'cjs',
  },
  {
    file: 'dist/tiny-slider.umd.js',
    format: 'umd',
    name: 'TinySlider'
  }],
  plugins: [
    commonjs({ defaultIsModuleExports: false }),
    babel({ babelHelpers: 'bundled' })
  ],
};

export default config;
