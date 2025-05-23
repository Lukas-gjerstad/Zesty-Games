import express from 'express';
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.send('✨ Node backend is alive!');
});

app.listen(PORT, () => {
  console.log(`💜 Server has been beaten into submission http://localhost:${PORT}`);
});