import { Router } from 'express';
import data from '../data/portfolio';

const router = Router();

const about_me = router.get('/about_me', (req, res) => {
  const { url, statusCode, statusMessage } = req;
  console.log(`url: ${url}`);
  console.log(`status: ${statusCode} - ${statusMessage}`);
  return res.json(data.about_me);
});

const projects = router.get('/projects', (req, res) => {
  const { url, statusCode, statusMessage } = req;
  console.log(`url: ${url}`);
  console.log(`status: ${statusCode} - ${statusMessage}`);
  return res.json(data.projects);
});

const qualification = router.get('/qualification', (req, res) => {
  const { url, statusCode, statusMessage } = req;
  console.log(`url: ${url}`);
  console.log(`status: ${statusCode} - ${statusMessage}`);
  return res.json(data.qualification);
});

export default { projects, about_me, qualification };
