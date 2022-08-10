const Engineer = require('./classes/Engineer');
const Intern = require('./classes/Intern');
const Manager = require('./classes/Manager');

const inquirer = require('inquirer');
var fs = require('fs');

cardsarr=[];


function callbackwrite(response){

    if(response.nextoption[0]==='Finish Team'){
        var stylefile= '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">'
var scriptfile ='<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>'
        const file = fs.createWriteStream('index.html')
        file.write(stylefile);
        file.on('error', (err) => {
            throw err
          });
          
          cardsarr.forEach((teammember) => {
            file.write(teammember+"\n");
          });
          file.write(scriptfile);
          file.end();
      }
      if(response.nextoption[0]==='Add an Engineer'){
        inquirer.prompt([
            {
              type: 'input',
              message: 'What is their name?',
              name: 'manname',
            },
            {
                type: 'input',
                message: 'What is their Employee ID?',
                name: 'manid',
              },
              {
                type: 'input',
                message: 'What is their Email Address?',
                name: 'manemail',
              },
              {
                type: 'input',
                message: 'What is their Github Username?',
                name: 'manoffice',
             
              },
              {
                type: 'checkbox',
                message: 'What would you like to do next?',
                name: 'nextoption',
                choices: ['Add an Engineer', 'Add an Intern', 'Finish Team']
              },
             
             
          ]).then((response) =>{
            
              newEng = new Engineer(response.manname,response.manemail,response.manid,response.manoffice);
          cardsarr.push('<div class="card"> <div class="card-body">Engineer Name :'+ newEng.getName() + ' Engineer ID : '+newEng.getID() + ' Engineer Email Address: <a href="mailto:'+ newEng.getEmail()+'">'+ newEng.getEmail()+'</a>'+ '<a href="https://github.com/' +newEng.getGithub() +'">'+' Github UserName: ' + newEng.getGithub()+'</a> </div></div>')
          callbackwrite(response)});}
      if(response.nextoption[0]==='Add an Intern'){
        inquirer.prompt([
            {
              type: 'input',
              message: 'What is their name?',
              name: 'manname',
            },
            {
                type: 'input',
                message: 'What is their Employee ID?',
                name: 'manid',
              },
              {
                type: 'input',
                message: 'What is their Email Address?',
                name: 'manemail',
              },
              {
                type: 'input',
                message: 'What is their University?',
                name: 'manoffice',
             
              },
              {
                type: 'checkbox',
                message: 'What would you like to do next?',
                name: 'nextoption',
                choices: ['Add an Engineer', 'Add an Intern', 'Finish Team']
              },
             
             
          ]).then((response) =>{
              newint = new Intern(response.manname,response.manemail,response.manid,response.manoffice);
          cardsarr.push('<div class="card"> <div class="card-body"> Intern Name: '+ newint.getName() + ' Intern ID: '+ newint.getID() +' Intern Email Address: <a href="mailto:'+ newint.getEmail()+'">'+ newint.getEmail()+'</a>'+ ' Intern School: '+newint.getCollege()+'</div></div>')
          callbackwrite(response)});}

    
    }

   

inquirer.prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'manname',
    },
    {
        type: 'input',
        message: 'What is your Employee ID?',
        name: 'manid',
      },
      {
        type: 'input',
        message: 'What is your Email Address?',
        name: 'manemail',
      },
      {
        type: 'input',
        message: 'What is your office number?',
        name: 'manoffice',
     
      },
      {
        type: 'checkbox',
        message: 'What would you like to do next?',
        name: 'nextoption',
        choices: ['Add an Engineer', 'Add an Intern', 'Finish Team']
      },
     
     
  ])
  .then((response) =>{
    newMan = new Manager(response.manname,response.manemail,response.manid,response.manoffice);
    cardsarr.push('<div class="card"> <div class="card-body"> Manager Name: '+ newMan.getName() + ' Manager ID: '+newMan.getID() + ' Manager Email Address: <a href="mailto:'+ newMan.getEmail()+'">'+ newMan.getEmail()+'</a>'+' Manager Office Number: '+ newMan.getRoom()+'</div></div>')
  callbackwrite(response)}
  
);
  

  //cardsarr.push('<p> Manager :'+ response.manname + ' Manager ID :'+response.manid + ' Manager Email Address: '+ response.manemail+ ' Manager Office Number :'+response.manoffice+'</p>')

  

  
  
  