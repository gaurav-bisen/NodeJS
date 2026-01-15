const fs = require("fs");

//create file and write

//This was a synchronous call
//create file test.txt and put this text there
//and if file exist it will override the content
//return something

//fs.writeFileSync('./test.txt', 'Hey There!');

//asynchronous (doesnt return anything)
//fs.writeFile('./test.txt', 'Hey There Async!', (err)=>{});

//difference bw fs.writeFile() and fs.writeFileAsync()
//which one to use

//read the file

//read the file - synchronously (return result)
//2nd parameter which encoding is used - utf-8(how to decode)
// const result = fs.readFileSync('./contacts.txt', "utf-8");
// console.log(result);

//if we use async read (doesnt return the result / except the callback n which error and result will be returned )

// fs.readFile('./contacts.txt', "utf-8", (err, result)=>{
//     if (err) {
//         console.log("Error", err);
//     }else{
//         console.log(result);
//     }
// })

//by using write it will override the data, but i want to add more data so we append data on file

//append data on file

//synchronous
fs.appendFileSync('./test.txt', `${Date.now()} hey there! \n`);

//fs.copyFileSync("./test.txt", "./copy.txt");

//delete
//fs.unlinkSync("./copy.txt");

console.log(fs.statSync('./test.txt'));

fs.mkdirSync('my-docs');                         

