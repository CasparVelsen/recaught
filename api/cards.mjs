import dbConnect from '../lib/dbConnect.mjs';
import Card from '../models/Card.mjs';

await dbConnect();
console.log('Connected to DB');

export default function handler(req, res) {
  if (req.method === 'GET') {
    const cards = await Card.find();
    res.json(cards);
    return;
  }
}
