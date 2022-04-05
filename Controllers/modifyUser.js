const bcryptjs = require("bcryptjs");
const { response } = require("express");
const { request } = require("express");
const User = require("../Models/User");

const modifyUser = async (req=request, res=response) => {
    try{
        const {id} = req.params
        const {_id, password, google, ...rest} = req.body;
        if(password){
            const salt = bcryptjs.genSaltSync();
            rest.password = bcryptjs.hashSync(password, salt)
        }
        console.log(rest)
        const user = await User.findByIdAndUpdate(id, rest, {new:true});
        
        res.json(user)
    }
    catch (e){
        res.json(e)
    }
}

module.exports = modifyUser