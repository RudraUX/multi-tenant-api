import { FastifyInstance } from 'fastify';

export async function applicationRoutes(app: FastifyInstance) {
  app.post('/', {}, () => {});
  app.get('/', () => {});
}
