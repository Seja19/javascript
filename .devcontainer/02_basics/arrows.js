const user={
    username:"sejal",
    age:"21",

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username="vishal"
// user.welcomeMessage()
// console.log(this);

// this is refers to an object. is refers to the object if it is used inside an object . alone, or when used outside any object. it is refered to the global object coz this is running in a global scope

// this in a function
function one(){
    let username="seja"
    console.log(this.username); // in a function, this refers to  global object
    // this.username is not allowed in a function. it  only works when used with objects. in a function, this is undefined 
}
one()

// ARROW FUNCTION: used to write shorter function syntax
const arr=()=>{
    console.log('hey');
}
arr()


