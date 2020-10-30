// TS 知识点
// 定义数组的方式
const arr: Array<number> = [1,3];
const arr2: Array<string> =['22','2323']
const arr3: number[] = [111,444]
const arr4: string[] =['22','33']
const arr5: any[]=['2',4,false]
// 类数组
function args(){
  let args: IArguments = arguments
  console.log(args);
}
// 定义枚举
enum Color { Red,Green}
let c: Color = Color.Red

// 定义对象
interface Obj  {
  name: string;
  age: number;
  address?: string
}
let obj:Obj = {
  name:"sss",
  age:29,
  address:"dddd"
}

// 函数类型
function sum(a:number,b:number):number{
  return a+b
}

// 联合类型
let kk:string | number = 33 