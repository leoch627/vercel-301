module.exports = (req, res) => {
  const target = `https://www.starrail.work${req.url || "/"}`;
  res.writeHead(301, { Location: target });
  return res.end();
};
