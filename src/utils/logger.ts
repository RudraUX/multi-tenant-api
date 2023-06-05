import pino from 'pino';

export const logger = pino({
  redact: ['DATABASE_CONNECTON'],
  level: 'debug',
  transport: {
    target: 'pino-pretty',
  },
});
