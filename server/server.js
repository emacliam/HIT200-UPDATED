const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const User = require("./models/user")

dotenv.config();

const app = express();


mongoose.connect(process.env.DATABASE, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        err => {
            if (err) {
                console.log(err);
            } else {
                console.log("connected to mongo db");
            }
        })
    //middlwware
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const productRoutes = require('./routes/products');
const categoryRoutes = require('./routes/category');
const ownerRoutes = require('./routes/owner');
const userRoutes = require('./routes/auth');
const reviewRoutes = require('./routes/review');
const addressRoutes = require('./routes/address');
const paymentRoutes = require('./routes/payment');
const orderRoutes = require('./routes/order');
const searchRoutes = require('./routes/search');
const paynowRoutes = require('./routes/paynow');



app.use("/api", productRoutes);
app.use("/api", categoryRoutes);
app.use("/api", ownerRoutes);

app.use("/api", userRoutes);

app.use("/api", reviewRoutes);

app.use("/api", addressRoutes);
app.use("/api", orderRoutes);
app.use("/api", paymentRoutes);
app.use("/api", searchRoutes);
app.use("/api", paynowRoutes);



app.listen(3006, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("connected on port 3000 ");
    }
})