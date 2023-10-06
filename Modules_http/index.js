const http=require('http');
const port=8000;
const hostname='127.0.0.1';
const app=http.createServer((req,res)=>{
    res.writeHead(200,{'content_type': 'text/plain'});
    res.write("<h2>This is my new server</h2>");
    res.end()
})
app.listen(port,hostname,()=>{
    console.log(`My server is  ${hostname}:${port}`);
})