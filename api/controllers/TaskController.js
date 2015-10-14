
module.exports = {
  index: function(req, res) {
    res.view('todoList', {
      title: "][ todos"
    });
  }
};


