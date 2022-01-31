const fs = require('fs');
const path = require('path/posix');
const directory=process.argv[2];
const extention=`.${process.argv[3]}`;
fs.readdir(directory,(err,list)=>{
    if(err) return console.error(err);
    list.forEach(file=>{
        if(path.extname(file)===extention){
            console.log(file)
        }
    })
})