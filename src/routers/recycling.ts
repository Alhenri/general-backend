import { Router } from 'express';
import recycle_model from '../database/models/recycle';

const route = Router();

const set_location = route.post('/set_location', async (req, res) => {
  const { body } = req;
  await recycle_model.create(body);
});

const get_locations = route.get('/get_locations', async (req, res) => {
  const markers = await recycle_model.find({});
  return res.json(markers);
});

export default [set_location, get_locations];
