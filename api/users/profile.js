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

  response.status(200).json({ token });
};

export default profileHandler;
