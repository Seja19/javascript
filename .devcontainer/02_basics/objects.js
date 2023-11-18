const mySym=Symbol("key1")
//-------------------------------------------------------------------------------------------------------------------------------------------
//OBJECT LITERALS
const JSuser={
    name:"Sejal",
    age:19,
    email:"sejalisobsessed@gmail.com",
    [mySym]:"mykey1",  // syntax of using a Symbol
    address:"pune",
    isLoggedIn:false,
    lastLogInDays:["Monday","Saturday"]
}
//-------------------------------------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------------------------------
//how to retrieve values from an object
console.log(JSuser.age);//1st way
console.log(JSuser["email"]);//2nd way

console.log(JSuser[mySym]);

// changing the values
JSuser.email="Sejalisnotobsessed@gmail.com"
console.log(JSuser["email"]);
// how to lock/ freeze the values

//Object.freeze(JSuser)
JSuser.email="Sejalisnotobsessedddddd@gmail.com" // this change will not work

console.log(JSuser["email"]);
console.log(JSuser);

JSuser.greeting=function(){
    console.log(`hey,${ this.name}`);
}
console.log(JSuser.greeting());
//------------------------------------------------------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------------------------------------------------------
// creating object using constructure(Singleton)
// we can create an object using these two methods
const instaUser1=new Object() // 1st method
instaUser1.name="seja"
instaUser1.id="987"
instaUser1.isLoggedIn=true
console.log(instaUser1);


const instaUser={}   // 2nd method
instaUser.name="jaya"
instaUser.id="123"
instaUser.isLoggedIn=false
console.log(instaUser);

const regularUser={
    email:"some@gmail.com",
    fullName:{              // nesting of objects
        userfullname:{
            firstName:"sejal",
            lastName:"singh"
        }
    }
}
console.log(regularUser.fullName.userfullname.lastName)


// merging two or more objects
const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d", 5:"d"}
// 1st method=Object.assign()
const final=Object.assign({}, obj1,obj2) // Object.assign() is used to merged two or  more objects into a new one .Object.assogn(target,source), where {}=target, obj1,obj2=source.
console.log(final);

// 2nd method=by using SPREAD method. spread is the most common and easy, latest method
const final1={...obj1,...obj2}
console.log(final1);


//----------------------------------------------------------------------------------------------------------------------------------------
// database se values kaise aati h? ans:array of objects k form me
const user=[
    {
        id:"1",
        name:"a"
    },
    {
        id:"2",
        name:"b"
    },
    {
        id:"3",
        name:"c"
    }
]
console.log(user[1].name);
//-------------------------------------------------------------------------------------------------------------------------------------

console.log(instaUser);
console.log(Object.keys(instaUser));// datatype of this is array
console.log(Object.values(instaUser));//datatype=array
console.log(Object.entries(instaUser));
console.log(instaUser.hasOwnProperty('isLogged'))

//--------------------------------------------------------------------------------------------------------------------------------------

const course={
    courseName:"JS",
    coursePrice:"999",
    courseInstructor:"sejal",
    courseDuration:" three months"
}
console.log(course.courseInstructor);
// we can also print this in a different way
const {courseName}=course
console.log(courseName);
const {courseInstructor:instructor}=course
console.log(instructor);

