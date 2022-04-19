const fastify = require('fastify')({ logger: true })
const builder = require('./rollup.svelte');
const port = process.env.PORT || 3000;

fastify.get('/', async (request, reply) => {
  return {"result": "ok"};
})

// Declare a route
fastify.get('/api/v1/compiller', async (request, reply) => {
  let id = 'index';
  let components = {
    "another.svelte": "<h2>another svelte component</h2><style>h2 {color:red}</style>",
    "index.svelte": '<script>import Another from "another.svelte"</script><h1>Hello world!</h1> <Another />'
  }

  let v = builder.builder(id, components).then(({ output }) => {
    let o = output[0] || `window.innerHTML = 'Error compiling banner ${id}`
    reply
      .code(200)
      .header('Content-Type', 'text/javascript; charset=utf-8').send(o.code)
  })
})



const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '127.0.0.1', backlog: 511 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
