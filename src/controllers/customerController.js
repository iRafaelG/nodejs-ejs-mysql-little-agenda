const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM customer;", (err, customers) => {
      if (err) {
        res.json(err);
      }
      console.log(customers);
      res.render("customers", {
        data: customers
      });
    });
  });
};

controller.save = (req, res) => {
  let data = req.body;
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO customer SET ?", [data], (err, customers) => {
        console.log(customers);
        res.redirect('/');
    });
  });
};

controller.edit = (req, res) => {
    let {id} = req.params;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer WHERE id = ?', [id], (err, customer) => {
            res.render('customer_edit', { data: customer[0]});
        })
    })
};

controller.update = (req, res) => {
    let {id} = req.params;
    let customerToUpdate = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE customer SET ? WHERE id = ?', [customerToUpdate, id], (err, row) => {
            res.redirect('/');
        });
    });
};

controller.delete = (req, res) => {
    let {id} = req.params;
    
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM customer WHERE id = ?', [id], (err, row) =>{
            res.redirect('/');
        });
    });
};

module.exports = controller;
