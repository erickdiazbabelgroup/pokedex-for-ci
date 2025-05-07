import { version } from '../package.json'

export default function handler(req, res) {
  res.status(200).send(version)
}