const Employee = require('./Employee');


class Manager extends Employee{
constructor(Name,Email,ID,Room){
    super(Name,Email,ID);
    this.Room=Room;
}
getRoom(){
return this.Room
}
getRole(){
    return "Manager"
}
}

module.exports = Manager