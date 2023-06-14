import { FastifyReply, FastifyRequest } from 'fastify';

export async function createApplicationHandler(
  request: FastifyRequest<{
    Body: any;
  }>,
  replay: FastifyReply
) {}
