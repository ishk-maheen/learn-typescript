//explicit casting

//Casting with as
let x: unknown = 'hello';
console.log((x as string).length); //Output:5

//Casting with <>()
let y: any = 'typescript';
console.log((<string>y).length); //Output:10

//Casting with Type Assertion
let z: any = 'javascript';
console.log((z as string).length); //Output:10

//Type Assertion with Function
function getLength(input: string | number): number {
    return (input as string).length || (input as number).toString().length;
}
console.log(getLength(28)); //Output: 2

//Type Assertion with Array
let arr: any[] = ['ali', 'bilal', 'salman'];
console.log((arr as string[]).map(x => x.toUpperCase())); //Output: ['ALI', 'BILAL', 'SALMAN']

//casting 
let m : unknown = "Hello";
console.log((m as string).length);
//console.log((m as string).toUpperCase);

let n : unknown = 42;
console.log((n as string).length); //undefine because number mai lenght nhi hoti
