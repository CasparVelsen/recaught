import dbConnect from '../../lib/dbConnect';
import User from '../../models/User.js';

async function handler(request, response) {
  await dbConnect();
  console.log('Connected to DB');

  if (request.method === 'GET') {
    const users = await User.find();
    return response.status(200).json(users);
  }

  if (request.method === 'POST') {
    const result = await User.create(request.body);
    response.json(result);
    return;
  }
}

export default handler;
