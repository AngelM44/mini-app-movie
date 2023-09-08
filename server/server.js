const express = require('express');

const app = express();
app.use(express.json());
const PORT = 3000;
const knex = require("knex")(require("./knexfile.js")[process.env.NODE_ENV || "development"])

app.get('/' (res, req) => {
  knex('movies')
  .select("*")
  .then((data) => {
    res.status(200).json(data)
    console.log(data)
  })
  .catch((err) => {
    res.status(404).json({
      message:
        "data not found"
    })
  })
})

app.listen(PORT, () => {
  console.log(`the server is running on ${PORT}`)
})


// app.get('/pets', function(req, res) {
//   knex('pet')
//     .select('*')
//     .then(data => res.status(200).json(data))
//     .catch(err =>
//       res.status(404).json({
//         message:
//           'The data you are looking for could not be found. Please try again'
//       })
//     );
// });
