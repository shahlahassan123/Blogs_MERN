const mongoose = require("mongoose")
const usersModel = require("./../Models/UsersModel");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const UsersModel = require("./../Models/UsersModel");

module.exports.register = async(req,res) =>{
    const {fullname, email, password} = req.body
    try{
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await usersModel.findOne({email})
        if(user){
            res.send({message : "User already exists"}); return;
        }
        const newUser = new UsersModel({
            _id : new mongoose.Types.ObjectId(),
            fullname,
            email,
            password : hashedPassword
        })
        const registereduser = await newUser.save()
        const token = jwt.sign({id :registereduser._id} , process.env.JWT_SECRET)
        res.send({token, userID : registereduser._id})

    }catch(err){
        console.log(err)
    }
   
}

module.exports.login = async(req,res) =>{
    const {email,password} = req.body;
    try{
        let userData = await usersModel.findOne({email: email});
         if(!userData){
             return res.status(401).send('User not found');
         }else{ 
            const isValidPassword = await bcrypt.compare(password, userData.password);
              if (!isValidPassword) {
                return res.status(401).send('Invalid Password')
              } else {
                   const token = jwt.sign({_id : userData._id}, process.env.JWT_SECRET )
                   res.send({token, userID : userData._id})
              }
         }
    }catch(err){
        console.log(err)
    }
}

module.exports.verifyToken = async(req, res, next) =>{
    const authHeader = req.headers.authorization
    if(authHeader) {
        jwt.verify(authHeader,process.env.JWT_SECRET , err=>{
            if(err) return res.sendStatus(403)
            next();
        } )
    }else{
        res.sendStatus(401)
    }


}