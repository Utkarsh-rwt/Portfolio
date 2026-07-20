ui components
cors
web page parsing -- codechef one 
sending varibales to browser from vite 
sequence for middleware - mycase morgan

this is cors 
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  next();
});
when we make request to api using backend (not using frontend) there is no broswer that stops backend to read the response 

const frontendPath = path.join(__dirname, "../../frontend/dist");