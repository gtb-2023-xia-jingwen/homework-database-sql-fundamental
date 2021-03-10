import {createConnection, Connection, ConnectionConfig} from 'promise-mysql';
import * as Bluebird from 'bluebird';

function getConfiguration(): ConnectionConfig {
  return {
    host: '${YOUR_DATABASE_HOST}',
    user: '${YOUR_DATABASE_USERNAME}',
    password: '${YOUR_DATABASE_PASSWORD}',
    database: '${YOUR_DATABASE_NAME}',
    port: 13306,
  };
}

export default function createMysqlConnection(): Bluebird<Connection> {
  return createConnection(getConfiguration());
}
