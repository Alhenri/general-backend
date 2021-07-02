import { Router } from 'express';
import PortData from '../database/models/portfólio';

const router = Router();

const about_me = router.get('/about_me', async (req, res) => {
  const { url, statusCode, statusMessage } = req;
  const dbData = await PortData.findById('60df3ad35340e48570652838').exec();

  return res.json(dbData.about_me);
});

const projects = router.get('/projects', async (req, res) => {
  const { url, statusCode, statusMessage } = req;
  const dbData = await PortData.findById('60df3ad35340e48570652838').exec();

  return res.json(dbData.projects);
});

const qualification = router.get('/qualification', async (req, res) => {
  const { url, statusCode, statusMessage } = req;
  const dbData = await PortData.findById('60df3ad35340e48570652838').exec();

  return res.json(dbData.qualification);
});

export default { projects, about_me, qualification };
