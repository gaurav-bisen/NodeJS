// Build a script that reads and writes files

const fs = require("fs");

//reads - asynchronously
fs.readFile('question.txt', 'utf-8', (err,res)=>{
    if(err){
        console.log(err);
    }else{
        console.log(res);
    }
})

//synchronously
const res = fs.readFileSync('question.txt', 'utf-8');
// console.log(res);


//write - asynchronously
// fs.writeFileSync('./question.txt', 'Exercises: Build a script that reads and writes files, manipulates file paths, and retrieves system info.');

//synchronously
// fs.writeFile('./question.txt', 'Updated with sync write!!', (err)=>{});

//append - async
// fs.appendFileSync('./question.txt', `\n append text with async append \n`);

//synch
fs.appendFile('./question.txt', `\n append text with sync append \n`);