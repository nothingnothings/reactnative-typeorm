import { FastifyInstance } from 'fastify';

import * as authRoutes from './auth.routes';

// this will register all of our routes.
export const register = (fastify: FastifyInstance) => {
  fastify.register((instance, _, done) => {
    authRoutes.configure(instance);

    // add your routes here, all additional routes.

    done();
  });
};
