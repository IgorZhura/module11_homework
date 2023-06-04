// модуль 7 задание 1

const person = {
  name: 'Igor',
  lastName: 'Zhuravlev',
  city: 'Moscow'
}
const user = Object.create(person);
user.ownCity = "RnD";
for(let key in user){
  if(user.hasOwnProperty(key)){
    console.log(`${key}: ${user[key]}`)
  }
}

// модуль 7 задание 2

const obj = {
  name: "Igor",
}
const string = 'name';
function func(string, obj){
  if(string in obj){
    console.log(true)
  }else{
    console.log(false)
  }
}
func(string, obj);

//модуль 7 задание 3

function func(obj){
};
console.log(func);
const  obj = pureObj;
const pureObj = {
};
console.log(pureObj);

// модуль 7 задание 4

function Guds(name){
    this.name = name,
    this.location = 'Home'
}
Guds.prototype.getPower = function(power){
  console.log(`Power is ${power} v`)
}
function ElectroGuds(name, purpose){
  this.name = name,
  this.purpose = purpose
}
ElectroGuds.prototype = new Guds()
const lamp = new ElectroGuds('Ikea', 'household')
const lapTop = new ElectroGuds('HP', 'computer')

lamp.getPower(220)
console.log(lamp)
lapTop.getPower(230)
console.log(lapTop)

// модуль 7 задание 5

class Guds {
  constructor(power) {
    this.power = power || 220;
    this.homeLocation = true;
  }
getPower() {
  return `Power is ${this.power} v`
  }
}
class ElectroGuds extends Guds {
  constructor(isLamp, morePower, power) {
    super(power);
    this.isLamp = isLamp;
    this.morePower = isLamp ? morePower : power;
  }
getPower() {
  if (this.isLamp) {
    return `The Power is ${this.morePower} v`
  } else {
    return super.getPower();
  }
}
}
const lamp = new ElectroGuds(true, 230);
console.log(lamp.getPower());
const lapTop = new ElectroGuds(true, 220);
lapTop.getPower();
const pump = new ElectroGuds(false, 380);
pump.getPower();
console.log(lamp instanceof Guds);