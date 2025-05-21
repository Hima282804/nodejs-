const http = require('http');

const PORT = 3000;

http.createServer((req, res) => {
  res.end("🚀 Hello from AWS EC2 and GitHub Actions!");
}).listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
