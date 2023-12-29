const express = require('express');
const app = express();
const cors= require('cors')
const port = process.eventNames.PORT || 5000
// middleware
app.use(cors())
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('women is sitthing')
})
app.listen(port, ()=>{
    console.log(`women is sitthing on port ${port}`)
})