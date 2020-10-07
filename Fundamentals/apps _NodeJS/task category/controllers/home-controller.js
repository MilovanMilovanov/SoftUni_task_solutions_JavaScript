const Product = require("../models/product");

function getAll() {
  return Product.find({});
}
function addProduct(product) {
  return Product.create(product);
}
function findById(id) {
  return Product.findById(id);
}
function editProduct(id, newProduct) {
  return Product.findByIdAndUpdate(id, newProduct);
}
function deleteProduct(id) {
  return Product.findByIdAndRemove(id);
}

module.exports = {
  getIndex: function (req, res) {
    getAll().lean().then((products) => {
      return res.render('index', { products });
    });
  },
  getCreate: function (req, res) {
    return res.render('create');
  },
  postCreate: function (req, res) {
    let product = req.body;
    addProduct(product).then(() => {
      return res.redirect('/');
    });
  },
  getEdit: function (req, res) {
    let id = req.params.id;
    findById(id).lean().then((product) => {
      return res.render('edit', { product });
    });
  },
  postEdit: function (req, res) {
    let newProduct = req.body;
    let id = req.params.id;
    editProduct(id, newProduct).then(() => {
      return res.redirect('/');
    });
  },
  getDelete: function (req, res) {
    let id = req.params.id;
    return res.render('delete', { id });
  },
  postDelete: function (req, res) {
    let id = req.params.id;
    deleteProduct(id).then(() => {
      return res.redirect('/');
    });
  }
};

