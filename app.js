require('./database/connection');
const user=require('./model/user');
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const {ObjectID}= require('mongodb')
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
const cors=require('cors');
app.use(cors());

app.post('/user_register',function(req,res){
var fullname=req.body.fullname;
var phone=req.body.phone;
var address=req.body.address;
var email=req.body.email;
var password=req.body.password;
var type="normal_user";


var user_data=new user({
    
        fullname:fullname,
        phone:phone,
        address:address,
        email:email,
        password:password,
        type:type
    
})

user.findOne({
    email:email
}).then(function(data){
    if(data==null){
        user_data.save().then(function(data){
        res.end(JSON.stringify('User_Registered'))

        })
    }

    else{
        res.end(JSON.stringify('User_Already_Exit'))
    }
   
}).catch(function(e){
    res.send(e)

})

})

app.post('/login', function(req,res){
    var email= req.body.email;
    var pass=req.body.password;
 //  console.log(req.body);

   
    user.find({
      email:email,
      password:pass
    }).then(function(userdata){
    
        if(userdata){
            console.log(userdata);
            res.send(JSON.stringify(userdata));
        }
     else{
         res.send(JSON.stringify('Invalid_Username_Or_Password'));
     }
    }).catch(function(e){
        res.send(e);
    })
  })
app.listen(90);