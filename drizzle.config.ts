import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

export default {
  schema: './lib/db/schema.ts',
  out: './drizzle',
  driver: 'd1-http',
  dbCredentials: {
    accountId: process.env.D1_ACCOUNT_ID!,
    databaseId: process.env.D1_DATABASE_ID!,
    token: process.env.D1_TOKEN!,
  },
  verbose: true,
  strict: true,
  dialect: 'sqlite',
} satisfies Config;