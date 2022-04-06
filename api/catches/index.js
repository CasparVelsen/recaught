import dbConnect from '../../lib/dbConnect.js';
import Catch from '../../models/Catch.js';

async function handler(request, response) {
  await dbConnect();
  console.log('Connected to DB');

  if (request.method === 'GET') {
    const catches = await Catch.find();
    return response.status(200).json(catches);
  }

  if (request.method === 'POST') {
    const result = await Catch.create(request.body);
    response.json(result);
    return;
  }
}

export default handler;
