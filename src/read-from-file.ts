import * as fs from 'fs';
import * as path from 'path';

export default function readFromFile(fileName: string): string {
  return fs.readFileSync(path.join(__dirname, `sqls/${fileName}.sql`), {encoding: 'utf8'});
}