import { createConnection, Connection } from 'promise-mysql'
import * as Bluebird from 'bluebird'

export default function createMysqlConnection(): Bluebird<Connection> {
  return createConnection(getConfiguration());
}

export function getConfiguration () {
  return {
    host: '127.0.0.1',
    user: 'root',
    password: 'test',
    database: 'classicmodel',
    port: 3306
  };
}
