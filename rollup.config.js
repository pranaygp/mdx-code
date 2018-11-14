import babel from "rollup-plugin-babel";
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: "index.js",
  dest: "main.js",
  format: "cjs",
  sourceMap: "inline",
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    resolve(),
    commonjs()
  ],
  external: ["react", "prop-types"]
};
