const express = require("express");
const app = express();
const PORT = 4000;
const cors = require("cors");

const userRouter = require("./routers/users");
const listRouter = require("./routers/lists");

const { loggingMiddleware } = require("./middlewares");

// Middlewares
app.use(cors());
app.use(express.json());
app.use(loggingMiddleware); // setting middlewares at
// APP LEVEL
// Router level
// Route level
// app.use(failRandomly);

// Routers
app.use("/users", userRouter);
app.use("/lists", listRouter);

app.listen(PORT, () => console.log("server running!"));
