"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _portfolio = require('../data/portfolio'); var _portfolio2 = _interopRequireDefault(_portfolio);

const router = _express.Router.call(void 0, );

const about_me = router.get('/about_me', (req, res) => {
  const { url, statusCode, statusMessage } = req;
  console.log(`url: ${url}`);
  console.log(`status: ${statusCode} - ${statusMessage}`);
  return res.json(_portfolio2.default.about_me);
});

const projects = router.get('/projects', (req, res) => {
  const { url, statusCode, statusMessage } = req;
  console.log(`url: ${url}`);
  console.log(`status: ${statusCode} - ${statusMessage}`);
  return res.json(_portfolio2.default.projects);
});

const qualification = router.get('/qualification', (req, res) => {
  const { url, statusCode, statusMessage } = req;
  console.log(`url: ${url}`);
  console.log(`status: ${statusCode} - ${statusMessage}`);
  return res.json(_portfolio2.default.qualification);
});

exports. default = { projects, about_me, qualification };
