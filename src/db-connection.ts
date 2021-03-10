import {createConnection, Connection, ConnectionConfig} from 'promise-mysql';
import * as Bluebird from 'bluebird';

function getConfiguration(): ConnectionConfig {
  return {
    host: '${YOUR_DATABASE_HOST}',
    user: '${YOUR_DATABASE_USERNAME}',
    password: 'p@ssword',
    database: '${YOUR_DATABASE_NAME}',
    port: 13306,
  };
}

export default function createMysqlConnection(): Bluebird<Connection> {
  return createConnection(getConfiguration());
}
