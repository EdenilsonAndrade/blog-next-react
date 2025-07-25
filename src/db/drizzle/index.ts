import { drizzle } from 'drizzle-orm/better-sqlite3';
import { postsTable } from './schemas';
import Database from 'better-sqlite3';
import { resolve } from 'path';

const sqliteDatabasePath = resolve(process.cwd(), 'db.sqlite3');
const sqliteDatabase = new Database(sqliteDatabasePath);

export const drizzleDb = drizzle(sqliteDatabase, {
  schema: {
    posts: postsTable,
  },
  logger: true,
});

//comando para gerar as migrations: npx drizzle-kit generate
//comando para rodar as migrations: npx drizzle-kit migrate
