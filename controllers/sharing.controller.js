const mysql = require("mysql");

const options = {
  hostname: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const connection = mysql.createConnection(options);

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database connected");
  }
});

exports.findASharing = (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM sharing WHERE id_sharing = ?;";

  connection.query(sql, [id], (error, sharings, fields) => {
    if (error) {
      console.log(
        `Error while retrieving the sharing with the id: ${id} | ${error}`
      );
    }

    return res.json({ status: "sucess", response: sharings });
  });
};

exports.findAllSharing = (req, res) => {
  const sql = "SELECT * FROM sharing;";

  connection.query(sql, [], (error, sharings, fields) => {
    if (error) {
      console.log(`Error while retrieving all the sharings: ${error}`);
    }

    return res.json({ status: "sucess", response: sharings });
  });
};

exports.addNewSharing = (req, res) => {
  const { id, label, date, place, time, author, details } = req.body;
  const sql =
    "INSERT INTO sharing(id_sharing, label, date, place, time, details, author) VALUES(?, ?, ?, ?, ?, ?, ?);";

  connection.query(
    sql,
    [id, label, date, place, time, details, author],
    (error, sharings, fields) => {
      if (error) {
        console.log(
          `Error while inserting the sharing with id: ${id} | ${error}`
        );
      }

      return res.json({ status: "sucess", response: sharings });
    }
  );
};
