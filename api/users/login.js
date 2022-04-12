import dbConnect from '../../lib/dbConnect';
import User from '../../models/User';
import bcrypt from 'bcrypt';

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

  if (!foundUser) {
    return response.status(401).json({ code: 401, message: 'Unauthorized' });
  }

  const isPasswordMatch = await bcrypt.compare(password, foundUser.password);

  if (!isPasswordMatch) {
    return response.status(401).json({ code: 401, message: 'Unauthorized' });
  }

  response.status(200).json('toller-token');
};

export default loginHandler;
