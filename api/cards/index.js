import dbConnect from '../../lib/dbConnect.js';
import Card from '../../models/Card.js';

export default async function handler(request, response) {
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

  if (request.method === 'DELETE') {
    const { _id } = request.body;
    const result = await Card.findByIdAndDelete(_id);
    response.json(result);
  }
}
