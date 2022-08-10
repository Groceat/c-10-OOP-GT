class Employee{
constructor(Name,Email,ID){
this.Email = Email;
this.ID = ID;
this.Name= Name;}

getName(){
    return this.Name
}
getID(){
    return this.ID
}
 getEmail(){
    return this.Email
}

 getRole(){
    return "Employee"
}


}

module.exports = Employee