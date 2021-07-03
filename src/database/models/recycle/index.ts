import { Schema, model } from 'mongoose';

const MarkersSchema = new Schema({
  name: String,
  image: String,
  lng: Number,
  lat: Number,
  time: String,
});

export default model('recyle_markers', MarkersSchema);