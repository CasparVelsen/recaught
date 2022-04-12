const profileHandler = (request, response) => {
  const { method } = request;

  if (method !== 'GET') {
    return response
      .status(405)
      .json({ code: 405, message: 'Method not allowed' });
  }

  const authorizationHeader = request.headers.authorization;

  response.status(200).json({ authorizationHeader });
};

export default profileHandler;
