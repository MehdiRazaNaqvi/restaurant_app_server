const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const config = require("./config");
const connectDB = require("./config/db");
const cors = require("cors");
const useRouter = require("./route");
const morgan = require("morgan");
const cron = require("node-cron");


//express instance
const app = express();

//allowing cors
app.use(cors());

//to access request body we used express.json() middleware. It is available in Express v4.160 onwards.
app.use(express.json());

//to access url-encoded request body we used express.urlencoded()
app.use(bodyParser.urlencoded({ extended: false }));




app.use(express.static(path.join(__dirname + "/admin")));
app.use(express.static(path.join(__dirname + "/public")));





// const __dirname1 = path.resolve();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname1, "/frontend/build")));

//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
//   );
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running..");
//   });
// }




// app.get("/admin", function (request, response) {
// response.sendFile(path.resolve(__dirname + "admin"));
// app.use(express.static(path.join(__dirname + "/admin")));

// });

// app.use(express.static(path.join(__dirname + "/admin")));

// app.use('/admin', express.static(path.join(__dirname, 'admin','build')));
// app.use(express.static(path.join(__dirname, 'client','build')));

//  route for multiple apps



// app.get('*', (request, response) => {

//   response.sendFile(path.join(__dirname, '/public', 'index.html'));

//    });


// app.get("/admin", (req, res) => {
//   res.sendFile(path.join(__dirname + "admin")
//   , function (err) {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// });




// app instance is passing in useRouter
// so that we can call routes moule based
// and pass it to app.use

app.use("/images", express.static("images"));

useRouter(app);

// request logger
app.use(morgan("dev"));





connectDB();

// Below cronjob runs every midnight and set the active campaigns to
// inactive if end_date is lesser than today
// converting the today date in the same format as saved in db
var todayDate = new Date().toISOString().substring(0, 10);




// cron.schedule("0 1 * * *", () => {
//   // cron.schedule('* * * * * *', () => {
//   console.log("Running a task every midnight (1:00 am)");
//   Campaign.findOneAndUpdate(
//     {
//       campaignStatus: "active",
//       end_date: {
//         $lt: todayDate,
//       },
//     },
//     { $set: { campaignStatus: "inactive" } },

//     { returnNewDocument: true },
//     (err, data) => {
//       if (err) {
//         return errorHandler(dbError, res);
//       }
//     }
//   );
// });

app.listen(process.env.PORT || config.PORT, () =>
  console.log("Server is running")
);
