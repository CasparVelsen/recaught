import dbConnect from '../../lib/dbConnect.js';
import Card from '../../models/Card.js';

async function handler(req, res) {
  await dbConnect();
  console.log('Connected to DB');

  if (req.method === 'GET') {
    const cards = await Card.find();
    res.json(cards);
    return;
  }

  if (req.method === 'POST') {
    const result = await Card.create(req.body);
    res.json(result);
    return;
  }
}

export default handler;
