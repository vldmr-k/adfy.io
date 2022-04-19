const rollup = require('rollup');
const json = require('@rollup/plugin-json');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const svelte = require('rollup-plugin-svelte');
const { loader } = require('./plugin/rollup/loader.js')
const terser = require("rollup-plugin-terser");


/**
 *
 * @param {*} input
 * @param {*} compoentns
 * @param {*} callback
 */
function builder(id, compoentns) {

  const input = (id + '.svelte');

  return rollup
    .rollup({
      input: [input],
      plugins: [
        loader(compoentns),
        svelte({
          emitCss: false,
          compilerOptions: {
            dev: false,
          },
        }),
        resolve.default({
          browser: true,
          dedupe: ['svelte'],
          modulesOnly: true
        }),
        commonjs(),
        terser.terser({
          output: {
            comments: false
          }
        })
      ]
    })
    .then(bundle =>
      bundle.generate({
        format: 'iife',
        name: id,
      })
    )
}


module.exports = {builder}


