import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  species: { type: String },
  time: { type: String },
  length: { type: Number },
  weight: { type: Number },
  bait: { type: String },
  location: { type: String },
  notes: { type: String },
  _id: { type: Number },
  author: { type: String },
});

export default mongoose.model('Catch', schema);
