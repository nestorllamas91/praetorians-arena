const allowlist = new Set([process.env.HOST]);

const corsOptionsDelegate = (req, callback) => {
  const corsOptions = allowlist.has(req.header('Origin')) ? { origin: true } : { origin: false };
  callback(null, corsOptions);
};

export default corsOptionsDelegate;
