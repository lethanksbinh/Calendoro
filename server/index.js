const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const postRouter = require('./routes/Pomodoro');
app.use('/post', postRouter);

// const PORT = process.env.PORT || 3001;

app.listen(3001, console.log(`Server started on port ${3001}`));