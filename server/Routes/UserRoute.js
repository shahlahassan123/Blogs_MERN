const { Router } = require("express")
const express = require("express")
const router = express.Router()

const {register, login} = require("./../Controllers/UsersControllers") 

router.post( "/register", register)
router.post("/login", login)


module.exports = router