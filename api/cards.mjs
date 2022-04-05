import dbConnect from '../lib/dbConnect.mjs';

const cards = [
  { text: 'first card', water: 'Bille' },
  { text: 'second card', water: 'Großensee' },
  { text: 'third card', water: 'Lelang' },
];

await dbConnect();
console.log('Connected to DB');

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.json(cards);
    return;
  }
}
