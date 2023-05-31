"use strict";

//creo l'array per il team
const team = [
    {   
        'name' : 'Wayne Barnett',
        'role' : 'Founder & CEO',
        'image':'wayne-barnett-founder-ceo.jpg'
    },
    {   
        'name' : 'Angela Caroll',
        'role' : 'Chief Editor',
        'image':'angela-caroll-chief-editor.jpg'
    },
    {   
        'name' : 'Walter Gordon',
        'role' : 'Office Manager',
        'image':'walter-gordon-office-manager.jpg'
    },
    {   
        'name' : 'Angela Lopez',
        'role' : 'Social Media Manager',
        'image':'angela-lopez-social-media-manager.jpg'
    },
    {   
        'name' : 'Scott Estrada',
        'role' : 'Developer',
        'image':'scott-estrada-developer.jpg'
    },
    {   
        'name' : 'Barbara Ramos',
        'role' : 'Graphic Designer',
        'image':'barbara-ramos-graphic-designer.jpg'
    }

];

//Recupero contenitore nel dom
const team_container = document.getElementById('team-container');


//ciclo for per ricavare ogni oggetto di cui è composto
for( let i=0; i<team.length; i++ ){
    
    //person = oggetto dell'array team
    let person = team[i];
    
    //ciclo for-in per visualizzare proprietà e valori delle persone nel team 
    for(let property in person){
        console.log(`Proprietà:${property} / Valore:${person[property]}`);
    }

    let element_person = `<div>
                            <img src="./img/${person.image}">
                            <div> ${person.name} </div>
                            <div> ${person.role} </div> <br>
                        </div>`

    team_container.innerHTML += element_person;

}








