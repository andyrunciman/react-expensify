import { setTimeout } from "timers";

const promise = new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        resolve('This is my resolved data');
        resolve('This is my other resolved data');
    },3000)
});



promise.then((data)=>{
    console.log(data);
    // return new Promise((resolve,reject)=>{
    //     setTimeout(()=>resolve(data + "!!!"),2000);
    // });
    return 1000;
}).then(()=>{})