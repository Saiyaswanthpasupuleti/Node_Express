const username=(req,res,next)=>{
    const {username}=req.body
    const usernameRegex = /^[A-Z][a-zA-Z0-9_]{4,9}$/;

  if (!usernameRegex.test(username)) {
    res.send("invalid username");
  }
  next()
}

const email=(req,res,next)=>{
    const {email}=req.body
    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailregex.test(email)){
        res.send("Invalid email")
    }
    next()

}

const password=(req,res,next)=>{
    const {password}=req.body
    const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passwordRegex.test(password)) {
    res.send("invalid password");
  }

  next();
}

module.exports={username,password,email}