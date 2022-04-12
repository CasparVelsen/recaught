import jwt from 'jsonwebtoken';

const { JWT_SECRET } = process.env;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET not set');
}

const profileHandler = (request, response) => {
  const { method } = request;

  if (method !== 'GET') {
    return response
      .status(405)
      .json({ code: 405, message: 'Method not allowed' });
  }

  const authorizationHeader = request.headers.authorization;

  if (!authorizationHeader) {
    return response.status(401).json({ code: 401, message: 'Unauthorized' });
  }

  const token = authorizationHeader.replace('Bearer', '').trim();

  const claims = jwt.verify(token, JWT_SECRET);

  response.status(200).json({ claims });
};

export default profileHandler;
