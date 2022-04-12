import dbConnect from '../../lib/dbConnect';
import User from '../../models/User';

const loginHandler = async (request, response) => {
  const { name, password } = request.body;

  if (!(name && password)) {
    return response
      .status(404)
      .json({ code: 404, message: 'Name and password required' });
  }

  await dbConnect();
  console.log('Connected to DB');

  const foundUser = await User.findOne({ name });

  response.status(200).json(foundUser);
};

export default loginHandler;
