//axiom is external library
function main(){
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(async (response)=>{
            const json=await response.json();
            console.log("Total posts:",json.length);
            console.log("First Post title:",json[0].title);
            //await response.text()
        });
}
main();

async function main2(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log("Total posts:",data.length);
    console.log("First Post title:",data[0].title);
}
main2();

const axios = require('axios');
async function main3(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log("Total posts:",response.data.length);
    console.log("First Post title:",response.data[0].title);
}
main3();

//POST
async function main4(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST"
    });
    const data = await response.text();
    console.log("Total posts:",data.length);
}
main4();

async function main5(){
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts",{
        username: "yogesh",
        password: "0811",
        },
        {
        headers:{
            Authorization: "Yogesh 123",
        }
        }
    );
    console.log("Total posts:",response.data);
}
main5();