const express = require("express");

const Router = express.Router();
const sqlDbConnect = require("./dbconnect");

Router.get("/", (req, res) => {
    const userData = [{ name: "john", email: "john@yahoo.com", age: 34, },
    { name: 'moon', email: "moon@gamil.com", age: 44 }
    ];
    res.send(userData);
});

Router.get("/api/users", (req, res) => {
    sqlDbConnect.query("select * from users_list", (err, rows) => {
        if (!err) {
            res.send(rows);
        }
        else {
            console.log(err);
        }
    })
})

Router.get("/api/country", (err, res) => {
    sqlDbConnect.query(`select * from tbl_country`, (err, rows) => {
        if (!err) {
            return res.send(rows);
        }
        else {
            return console.log(err);
        }
    });
});

Router.get("/api/state/:id", (req, res) => {
    sqlDbConnect.query("select * from tbl_state where countryid='" + req.params.id + "'", (err, rows) => {
        if (!err) {
            return res.send(rows);
        }
        else {
            console.log(err);
        }
    })
});
Router.post("/api/formadd", (req,res)=>{
    const username = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const address = req.body.address;
    const status = req.body.status;

    var sql = `INSERT INTO formtwo (username, email,phone,address,status) VALUES ("${username}","${email}","${phone}","${address}","${status}")`;
    console.log(sql);

    sqlDbConnect.query(sql,(err,result)=>{
        if(!err){
            res.status(200).json("successfull");
        }
        else{
            console.log(err);
        }
    });
});

Router.post("/api/adduser", (req, res) => {
    // console.log("reerrrrr");
    // return false
    const name = req.body.name;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const phonenum = req.body.phonenum;
    const gender = req.body.gender;
    const countryid = req.body.countryid;
    const stateid = req.body.stateid;
    const address1 = req.body.address1;
    const address2 = req.body.address2;
    const accept = req.body.accept;
    const status = 1;

    var sql = `INSERT INTO user_registration (name, username, email, password, phonenum, gender, countryid, stateid, address1, address2, accept, status) VALUES
    ("${name}","${username}","${email}","${password}","${phonenum}","${gender}","${countryid}","${stateid}","${address1}","${address2}","${accept}","${status}")`;
    console.log(sql);
    // return false
    sqlDbConnect.query(sql, (err, result) => {
        if (!err) {
            res.status(200).json("successful");
            // console.log("errrr");
        }

        else {
            console.log(err);

        }
    })

});
Router.get("/api/registeruserdata",(req,res)=>{
    var sql = `SELECT ur.name,ur.username,ur.email,ur.phonenum,ur.gender,ur.gender,ur.status, ur.address1 as Address,c.name as countryname,s.state_name from user_registration as ur
    join tbl_country as c on c.id = ur.countryid
    join tbl_state as s on s.state_id = ur.stateid
    where status = 1 `
   
    sqlDbConnect.query(sql, (err,rows)=>{
        if(!err){
            res.send(rows);
        }
        else
        {
            console.log(err);
        }
    });
});


module.exports = Router