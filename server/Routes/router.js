const express = require("express");
const router = new express.Router();
const conn = require("../conn");

// register user data
router.post("/create", (req, res) => {

    // console.log(req.body);

    const { name, email, htype, mobile} = req.body;

    if (!name || !email || !htype || !mobile ) {
        res.status(422).json("Please fill the all data");
    }

    try {
        conn.query("SELECT * FROM hobby WHERE mobile = ?", mobile, (err, result) => {
            if (result.length) {
                res.status(422).json("This Contact is Already Exist")
            } else {
                conn.query("INSERT INTO hobby SET ?", { name, email, htype, mobile}, (err, result) => {
                    if (err) {
                        console.log("err" + err);
                    } else {
                        res.status(201).json(req.body);
                    }
                })
            }
        })
    } catch (error) {
        res.status(422).json(error);
    }

});

// get userdata

router.get("/gethobby",(req,res)=>{

    conn.query("SELECT * FROM hobby",(err,result)=>{
        if(err){
            res.status(422).json("Data is available");
        }else{
            res.status(201).json(result);
        }
    })
});

// user delete api

router.delete("/deleteuser/:id",(req,res)=>{

    const {id} = req.params;

    conn.query("DELETE FROM hobby WHERE id = ? ",id,(err,result)=>{
        if(err){
            res.status(422).json("error");
        }else{
            res.status(201).json(result);
        }
    })
});



// get single user

router.get("/induser/:id",(req,res)=>{

    const {id} = req.params;

    conn.query("SELECT * FROM hobby WHERE id = ? ",id,(err,result)=>{
        if(err){
            res.status(422).json("error");
        }else{
            res.status(201).json(result);
        }
    })
});


// update hobby api


router.patch("/updateuser/:id",(req,res)=>{

    const {id} = req.params;

    const data = req.body;

    conn.query("UPDATE hobby SET ? WHERE id = ? ",[data,id],(err,result)=>{
        if(err){
            res.status(422).json({message:"error"});
        }else{
            res.status(201).json(result);
        }
    })
});

router.post("/login", async (req, res) => {
    const { name, mobile } = req.body;
    try {
      const oldEmp = await Employee.findOne({ mobile : mobile });
  
      const isPasswordCorrect = await compare(name, oldEmp.name);
  
      if (!isPasswordCorrect) {
        res.status(400).json({ message: "Incorrect credentials" });
      } else {
        if (mobile === oldEmp.mobile) {
          return res.status(200).json(oldEmp);
        } else {
          res.status(400).json({ message: "Incorrect credentials" });
        }
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

module.exports = router;