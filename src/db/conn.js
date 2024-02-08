const mongoose = require('mongoose');           // mongodb://localhost:27017/studentRegistration
mongoose.connect('mongodb://localhost:27017/studentRegistration' ,{
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndexe: true
}) .then(()=>{
    console.log(`connection successful`);
}) .catch((e)=>{
    console.log(`no connection`);
})
