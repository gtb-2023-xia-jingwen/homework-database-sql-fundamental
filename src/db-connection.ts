import {createConnection, Connection, ConnectionConfig} from 'promise-mysql';
import * as Bluebird from 'bluebird';

// 请注意，下方数据库连接信息为敏感信息，真实项目中决不允许提交到代码仓库
function getConfiguration(): ConnectionConfig {
  return {
    host: 'localhost',
    user: 'root',
    password: 'p@ssword',
    database: 'sql-practice',
    port: 13307,
  };
}

export default function createMysqlConnection(): Bluebird<Connection> {
  return createConnection(getConfiguration());
}
