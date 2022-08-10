const Employee = require('./Employee');


class Intern extends Employee{
constructor(Name,Email,ID,college){
    super(Name,Email,ID);
  
    this.college=college;
}
getCollege(){
return this.college
}
getRole(){
    return "Intern"
}
}
module.exports=Intern