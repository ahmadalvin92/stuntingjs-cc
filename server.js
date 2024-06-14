const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const childRoutes = require("./routes/childRoutes");
const historyRoutes = require("./routes/historyRoutes");

const app = express();
app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/child", childRoutes);
app.use("/history", historyRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
