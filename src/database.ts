// src/database.ts
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'seu_usuario',
  password: 'sua_senha',
  database: 'seu_banco_de_dados',
});
