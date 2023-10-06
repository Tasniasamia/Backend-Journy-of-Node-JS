const http=require('http');

const app=http.createServer((req,res)=>{
    res.end("This is my new server")
})
app.listen(8000,()=>{
    console.log("My port is 8000 ");
})