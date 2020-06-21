import { createConnection, Connection } from 'promise-mysql'
import * as Bluebird from 'bluebird'

export default function createMysqlConnection(): Bluebird<Connection> {
  return createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'test',
    database: 'classicmodels'
  });
}