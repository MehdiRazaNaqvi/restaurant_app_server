const { message, errorHandler } = require("../helper");
const { verifyAccessToken } = require("../helper/jwt_helper");
const { notFound } = message;

const useRouter = (app) => {

  //calling routes
  app.use("/auth", require("./auth"));
  app.use("/items", require("./items"));
  // app.use("/user", require("./user"));
  // app.use("/merchant", require("./merchant"));
  // app.use("/packageType", require("./subCategory"));
  // app.use("/package", require("./mainCategory"));
  // app.use("/subCategory", require("./subCategory"));
  // app.use("/mainCategory", require("./mainCategory"));
  // app.use("/workout", verifyAccessToken, require("./workout"));
  // app.use("/trainer", require("./trainer"));
  app.use("/media", require("./media"));
  // app.use("/campaign", require("./campaign"));
  // app.use("/favorite", require("./favorite"));
  // app.use("/fcm", require("./fcm"));
  // app.use("/openAi", require("./openAi"));
  //handle unknown routes
  app.use((req, res) => errorHandler(notFound, res));



};
module.exports = useRouter;
