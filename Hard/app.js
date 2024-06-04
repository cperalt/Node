const express = require('express');
const app = express();
const data = require("./data.json");


app.get("/", (req, res) => {
    res.send("Welcome to Node Intro GI. Please update URL to localhost3000/employees");
})

app.get("/employees", (req, res) => {
    if (!data) res.status(404).send("Data not found");
    res.send(data);
})

app.get("/employees/:id", (req, res) => {
    const employeeID = data.find(employee => employee.id === parseInt(req.params.id));
    if (!employeeID) res.status(404).send("The employee with the given ID was not found");
    res.send(employeeID);
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
