import dbConnect from '../../lib/dbConnect.js';
import Card from '../../models/Card.js';

async function handler(request, response) {
  await dbConnect();
  console.log('Connected to DB');

  if (request.method === 'GET') {
    const cards = await Card.find();
    return response.status(200).json(cards);
  }

  if (request.method === 'POST') {
    const result = await Card.create(request.body);
    response.json(result);
    return;
  }
}

export default handler;
