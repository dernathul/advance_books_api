const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const books = require('./routes/books');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use('/api/v1/books', books);
module.exports = app;
books.js
const express = require('express');
const router = express.Router();
/* GET books listing. */
router.get('/', (req, res, next) => {
  res.json({books: [{title: 'The Bible'}]});
});
module.exports = router;
