/**
 * PageController
 *
 * @description :: Server-side logic for managing pages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  about: function (req,res) {
    res.send("Hello, from action 'about'");
  },

  index: function (req, res) {
    res.send("This is index page");
  }

};

