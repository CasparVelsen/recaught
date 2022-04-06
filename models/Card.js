import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  water: { type: String },
  date: { type: String },
  target: { type: String },
});

export default mongoose.model('Card', schema);
