import {
  pgTable,
  uuid,
  varchar,
  numeric,
  timestamp,
} from 'drizzle-orm/pg-core';

export const application = pgTable('applications', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 256 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
