import express from "express";

const app= express()


import "./db_connection";

app.post("/login", async function(req, res){
    const user = await User.findOne({ email: req.body.email });
    if (user)
    //check if password matches
        res.redirect('/');
});

const PORT =  5000;
app.listen(PORT, () => {
    console.log("Server Is Connected to Port " + PORT);
})