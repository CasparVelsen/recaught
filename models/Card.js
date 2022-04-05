import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  water: mongoose.SchemaTypes.String,
  date: mongoose.SchemaTypes.String,
  target: mongoose.SchemaTypes.String,
});

export default mongoose.model('Card', schema);
