import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401); 
  }

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) {
        console.log(token)
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

export default authenticateToken;
