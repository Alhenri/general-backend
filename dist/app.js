"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);

var _routers = require('./routers'); var _routers2 = _interopRequireDefault(_routers);

class App {
  

   constructor() {
    this.express = _express2.default.call(void 0, );
    this.middlewares();
    this.database();
    this.routes();
  }

   middlewares() {
    this.express.use(_cors2.default.call(void 0, ));
    this.express.use(_express2.default.json());
  }

   database() {
    // TODO: conexão com banco de dados
  }

   routes() {
    this.express.use(_routers2.default.projects);
  }
}

exports. default = new App().express;
