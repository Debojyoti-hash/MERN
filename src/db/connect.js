const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:3000/Mydb", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log(`Connection succesfull.`);
}).catch((e) => {
    console.log(`No connection`);
}) 