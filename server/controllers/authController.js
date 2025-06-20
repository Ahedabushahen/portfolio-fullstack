const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (email === 'admin@gmail.com' && password === '123') {
    const token = generateToken('admin123');
    const user = { id: 'admin123', name: 'Admin', email };
    return res.status(200).json({ token, user });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
};
