const fS=require('fs')
fS.writeFile("FS.js" , "Don't judge me by my quality, okay?" , (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Successfull");
    }
})
fS.writeFile("TS.txt", "File content everywhere",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Add another file");
    }
})
fS.appendFile("FS.js" , "My Life , My Rules", (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("SuccessFull add data with stayed data")
    }
})

// fS.rename("FS.js", "FS.txt", (err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Successfull file renaming");
//     }
// })


fS.readFile("FS.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data);
    }
})



    
    if(fS.existsSync("FS.js")){
        fS.unlinkSync("FS.js");
    }
    else{
        console.log("not exist");
    }
