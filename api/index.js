module.exports = (req, res) => {
  const host = req.headers.host || "";

  if (host === "starrail.work") {
    const target = `https://www.starrail.work${req.url || "/"}`;
    res.writeHead(301, { Location: target });
    return res.end();
  }

  // 非目标 host 时，给个简单响应，避免函数报错
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end("OK");
};
