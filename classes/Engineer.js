const Employee = require('./Employee');


class Engineer extends Employee{
constructor(Name,Email,ID,github){
    super(Name,Email,ID);
    this.github=github;
}
getGithub(){
    console.log(this.github)
return this.github
}

getRole(){
    console.log("Engineer")
    return "Engineer"
}

}

module.exports = Engineer