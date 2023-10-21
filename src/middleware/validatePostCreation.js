

const validatePostCreation=(req,res,next)=>{

    const errors = [];
    for (const prop in req.body) {
      if (!req.body[prop]) {
        return res.send({ message: "All fields are required" });
      }
    }

    if(req.body.title.length<6){

        errors.push("Title Should be more than 6 character Long");

    }

    if(req.body.description.length<6){
        errors.push("Description  Should be more than 6 character Long");

    }

    if (errors.length) return res.status(422).send({ message: errors });
    return next();






}

module.exports=validatePostCreation;