import { fastify } from 'fastify'

const server = fastify();

server.get('/',() => {
    return 'Amo a Julia'
})

server.listen({
    port: 3333
})

