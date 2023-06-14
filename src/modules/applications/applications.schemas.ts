import { z } from 'zod';
import zodToJsonSchema from 'zod-to-json-schema';

const createApplicationBodySchema = z.object({
  name: z.string({ required_error: 'Name is Required' }),
});

export const createApplicationJsonSchema = {
  body: zodToJsonSchema(
    createApplicationBodySchema,
    'createApplicationBodySchema'
  ),
};
