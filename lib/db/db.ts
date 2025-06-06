import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const connectionString = process.env.DATABASE_URL!;

if (!connectionString) {
  throw new Error('DATABASE_URL is not set in .env.local');
}

// Disable prefetch as it is not supported for "Feature" projects
export const db = drizzle(postgres(connectionString, { ssl: 'require', prepare: false }), { schema }); 