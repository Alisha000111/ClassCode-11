// type IStudentInformation = {
// name:string,
// age:number,
// cnicNo:number number
// }
// let student1:IStudentInformation = {
//     name: "Alisha",
//     cnicNo: 101010101010,
//     age: 20,
// }
// let student2:IStudentInformation = {
//     name: "Tania",
//     cnicNo: 202020202020,
//     age: 30,
// }
//type IStudent = {
    //name: string,
    //rollNo: number,
//}
//type ITeacher ={
//name: string,
//experience: number,
//}
//let student1: IStudent={
    //name: "Mubeen",
    //rollNo: 1908
//}
//let teacher1: ITeacher ={
    //name: "ubaid",
    //experience: 3
//}
//type interasectedType = IStudent & ITeacher
//let teacher2: interasectedType ={
    //name: "ubaid",
    //ollNo: 12345,
    //experience: 3
//}
//type Icecreamflavours = 'Strawberry' | 'Bubble Gum' | 'Blue beery'
//let Icecream: Icecreamflavours = "Strawberry"
//fresh object
//stale object
//let ball = {
    //diameter: 10,
//}
//let sphere = {
    //diameter: 20,
//}
//let tube ={
    //diameter: 30,
    //lenght: 35,
//}
//ball = sphere
//sphere = ball
//console.log(ball)
//console.log(sphere)
//ball = {
    //diameter:20
    //lenght: 30
//}
 //ball = tube
interface IMy {
    name: string;
    age: number;
    id1?: number;
}
const persons: IMy[] = [];
persons.push({
    age: 20,
    name: 'Alisha',
    id1: 5
});
persons.push({
    age: 30,
    name: 'Tania'
});
