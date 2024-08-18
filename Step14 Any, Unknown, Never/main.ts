//type any -> value save nhi hoti

let xyz : any = 1;
xyz = "Sheikh";
xyz = true;
xyz.toUpperCase();
console.log(xyz);

//type unknown ->checks strictly 

let abc : unknown = 1;
abc = "Maheen";
abc = true;

//abc.toUpperCase();  //give error because their are different types and uppe case only apply to string values

// so we can use if-else statement
if(typeof abc === "string"){
  console.log(abc.toUpperCase());
    
}

//type never
//example 1
let color:string= "blue"
 switch (color) {
    case "Green":
        console.log("Green!!!");
        break;
    case "Pink":
        console.log("Pink!!!");
        break;
 
    default:
        Error(color)
        break;
};

//example 2
function fail(): never {
    throw new Error("Something failed");
}
fail();