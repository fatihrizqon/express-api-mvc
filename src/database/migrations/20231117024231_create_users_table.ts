import { Knex } from "knex";

const tableName = 'users';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable(tableName, function (table) {
      table.increments('id').primary();
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.enum('role', ['admin', 'user']).notNullable().defaultTo('user');
      table.string('firstname').notNullable();
      table.string('lastname').notNullable();
      table.timestamps(true, true);
    });
  }
  
  export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable(tableName);
  }