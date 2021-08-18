const posts = require('./posts');
const repositorios = require('./repositorios');
const contatos = require('./contatos');
const categorias = require('./categorias');

module.exports = (app) => {
  contatos(app);
  repositorios(app);
  posts(app);
  categorias(app);
}
