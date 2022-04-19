const fastify = require('fastify')({ logger: true })
const builder = require('./rollup.svelte');
const port = process.env.PORT || 3000;

fastify.get('/',  (request, reply) => {
  return {"result": "ok"};
})

// Declare a route
fastify.get('/api/v1/compiller',  (request, reply) => {
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



fastify.listen({ port: port, host: '0.0.0.0', backlog: 511 })
  .then((address) => console.log(`server listening on ${address}`))
  .catch(err => {
    console.log('Error starting server:', err)
    process.exit(1)
  })
