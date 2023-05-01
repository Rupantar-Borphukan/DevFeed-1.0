const db = require('../db');

exports.subscribe = async (req, res) => {
    console.log("test1")
    const name= req.body.name;
    const email = req.body.email;
    const organization = req.body.organization;
    const date= new Date().toISOString();
    console.log(date)


    try {
        db.query("SELECT * FROM users WHERE email=? ", [email], (err, result) => {
          if (err) {
            console.log(err)
          }
          if (result.length > 0) {
            res.send({
              result,
               message:"you are already subscribed"
            });
            console.log(result)
           
          }
           else {
            
            db.query("INSERT INTO users (name,email,organization,date,isSubscribed)  VALUES (?, ?, ?,?, TRUE)", [name,email,organization,date], (err, result) => {
              if (err) {
                console.log(err)
              }
              console.log(err)
              res.send({
                result,
                message:"you are added"
             });
             console.log(result)
            
              
              
            });
          }
       
        })
    

      } catch (error) {
        console.log(error);
        
      }


  
};
