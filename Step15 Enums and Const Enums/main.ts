//simple enum 
enum colors{Red=1, Green=2, Blue=3};
console.log(colors[1]);
console.log(colors["Red"]);

//enums
enum Color {Red, Green, Blue}; //starts with 0
var C: Color = Color.Green;

enum Color1 {Red =1 , Green, Blue};
var colorName: string = Color1[2];

enum Color2 {Red = 1 , Green=2, Blue};
var ColorIndex = Color2["Blue"]; //can assign values to all

console.log(ColorIndex);

//const enums
enum color {Red, Green, Blue}; //starts with 0
var c: color = color.Green;

enum color1 {Red =1 , Green, Blue};
var colorName: string = color1[2];

enum color2 {Red = 1 , Green=2, Blue};
var color_index = color2["Blue"]; //can assign values to all
console.log(color_index);
