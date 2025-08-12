import { integer, text, boolean, pgTable } from "drizzle-orm/pg-core";

// create bd schema with column names
export const userTable = pgTable("userTable", {
  id: integer("id").primaryKey(),
  email: text("email").notNull().unique(),
  hash_password: boolean("hash_password").notNull(),
});
