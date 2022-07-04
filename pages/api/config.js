import * as yaml from 'yaml';
import fs from 'graceful-fs';

export default async function handler(req, res) {
  const data = yaml.parse(fs.readFileSync('config.yml', 'utf-8'))
  res.status(200).json(data)
}
