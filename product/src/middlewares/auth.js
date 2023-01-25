import jwt from 'jsonwebtoken';

 function tokenValidation(req, res, next)  {
    const authHeader = req.headers.authorization;

    if (!authHeader) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(authHeader, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });
};

export default tokenValidation;