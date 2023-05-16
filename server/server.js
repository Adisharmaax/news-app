const express = require("express")

const app= express()


require("./db_connection");

const PORT =  5000;
app.listen(PORT, () => {
    console.log("Server Is Connected to Port " + PORT);
})