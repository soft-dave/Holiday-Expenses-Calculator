import express from 'express';
import cors from 'cors'
import expenseSplitter from './expenseSplitter.js';

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors())

app.post('/payouts', expenseSplitter);

app.listen(PORT, () => console.log(`server is running on ${PORT}`));

export default app