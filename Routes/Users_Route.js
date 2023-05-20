const express = require("express");
const router = express.Router();
const User = require("../Models/User_Model")


// Save a new user --------------------------------------------------------------->
router.route("/addUser").post( async(req, res) => {
    console.log("Data added")

    // try {
    //     const email = req.body.email
    //     const user = await User.findOne({email:email})

    //     if(user == null) {

    //         const new_User = new User({
    //             ID : 1,
    //             name : req.body.name,
    //             email : req.body.email,
    //         })

    //         const response = await new_User.save()
    //         response != null ?
    //             res.send('1') :res.send('0')
    //     }

    //     else {
    //         res.send('2')
    //     }

    //     console.log(req.body)
    // }

    // catch (error) {
    //     res.send('Error: ' +error)
    // }
})

router.route("/getUser").get( async(req, res) => {
    res.send("0775145320")
})

module.exports = router;