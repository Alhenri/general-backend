import { Schema, model } from 'mongoose';

type PortType = {
  about_me: [];
  projects: [];
  qualification: [];
};

const PortFolioSchema = new Schema({
  about_me: Array,
  projects: Array,
  qualification: Array,
});

export default model<PortType>('portfolio', PortFolioSchema);
