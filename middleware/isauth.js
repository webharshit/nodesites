module.exports = (req, res, next) => {
  if(req.session.isLoggedIn==true){
  return next();
  }
  else{
    res.redirect('/')
  }
};
