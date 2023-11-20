//FUNCTIONS
/*function addTwoNo(number1,number2){
    const final=number1+number2;
    return final
}
const result=addTwoNo(2,4);
console.log("result:", result);*/

/*function userStatus(username="seja"){
    if(!username){
        console.log("please enter a valid username");
        return
    }
    return `${username} has logged in`
}
console.log(userStatus("sejaluuuuuuuuu"));*/

//adding multiple elements by using rest method(...). (...)--->also known as spread, but when used in function . it is called rest
function addNNumbers(...num1){
    return num1

}
console.log(addNNumbers(200,300,400,500));

// how to add an object in a function
//  const user={
//     username:"meera",
//     age:"21"
 //}
 function printUserDetails(myObject){
    console.log(`username is ${myObject.username} and the age of the user is ${myObject.age}`)
 }
 printUserDetails({
    username:"meera",
    age:"21"
 })