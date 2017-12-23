const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  let html = fs.readFileSync('./index.html')
  res.end(html)
})

app.listen(8888, () => {
  console.log('listen: 8888')
})
