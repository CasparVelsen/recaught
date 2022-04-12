const loginHandler = (request, response) => {
  const { name, password } = request.body;

  if (!(name && password)) {
    return response
      .status(404)
      .json({ code: 404, message: 'Name and password required' });
  }
};

export default loginHandler;
