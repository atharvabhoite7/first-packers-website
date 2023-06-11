import connectMongo from "../../../database/conn";
import Users from "../../../models/googleAuthSchema";
import {hash} from 'bcryptjs'

export default async function handler(req, res) {
  connectMongo().catch(error => res.json({message:" Connection failed"}))

//   accept POST method only
  if(req.method === "POST"){
        
    if(!req.body) return res.status(404).json({error: "Form data not present"})
    const {username, email, password} = req.body

    // check for existing users
    const checkexisting = await Users.findOne({email});
    if(checkexisting) return res.status(422).json({message: "User Already Exists"})

    // hash password 
    Users.create({username, email, password: await hash(password, 12)}, function (err,data){
        // catch error if any 
        if(err) return res.status(404).json({err});
        // create user
        res.status(201).json({status :true, user: data})
    })

  }else{
    res.status(500).json({message: "Accepting POST method only. Other methods not allowed!"})
  }
}
