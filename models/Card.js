import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  water: { type: String },
  date: { type: String },
  target: { type: String },

  stretch: { type: String },
  watertemp: { type: Number },
  watercolor: { type: String },
  waterlevel: { type: String },

  weather: { type: String },
  temperature: { type: Number },
  airpressure: { type: Number },
  moon: { type: String },
  wind: { type: String },
  windspeed: { type: Number },

  bites: { type: Number },
  lost: { type: Number },
});

export default mongoose.model('Card', schema);
