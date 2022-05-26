const fastify = require('fastify')({ logger: true })
const builder = require('./rollup.svelte');
const port = process.env.PORT || 3000;

fastify.get('/', (request, reply) => {
  return { "result": "ok" };
})

// Declare a route
fastify.post('/api/v1/compile', (request, reply) => {

  const entry = request.body.entry || null;

  if (entry === null) {
    throw new Error("Entry is not set or empty");
  }

  const components = request.body.components || [];

  if (components.length <= 0) {
    throw new Error("No components for compiling");
  }

  builder.builder(entry, components)
    .then(({ output }) => {
      let jscode = output[0] || null;

      if (jscode === null) {
        reply.code(500).header('Content-Type', 'text/json; charset=utf-8').send({
          "id": entry,
          "output": output,
          "msg": "compiler return empty component"
        })
      } else {
        reply
          .code(200)
          .header('Content-Type', 'text/javascript; charset=utf-8').send(jscode.code)
      }

    }).catch((error) => {
      console.log("error", error);
      reply.code(400)
        .header('Content-Type', 'text/json; charset=utf-8')
        .send({
          "id": error.id,
          "name": error.name,
          "start": error.start,
          "end": error.end,
          "frame": error.frame
        })
      console.log("error", Object.keys(error));
    })

})



fastify.listen({ port: port, host: '0.0.0.0', backlog: 511 })
  .then((address) => console.log(`server listening on ${address}`))
  .catch(err => {
    console.log('Error starting server:', err)
    process.exit(1)
  })
