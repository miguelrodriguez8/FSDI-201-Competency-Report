console.log("Executed");

// object literal for the salon
const salon={
    name:"The Fashion Pet",
    phone:"222-222-2222",
    address:{
        city:"San Diego, CA",
        ave:"C Street",
        number:"801"
    },
    pets:[]
}

console.log(salon);

let {name,phone,address:{city,ave,number}}= salon;
console.log(ave);

//document.getElementById('info').innerHTML="<p>"+name+"<b>"+city+"</b> </p>";

document.getElementById('info').innerHTML=` 
    <p class="footer-info"> <b>${name} </b><br>
        ${number} ${ave}, ${city}
        <br> ${phone}<br>
        <p id="footer-text">Copyright reserved &copy; 2020 Miguel Rodriguez</p>
        </p>       
        `;  //template string

//object constructor for the pets
var c=1;
class Pet{
    constructor(name,age,type,breed,gender,color,service,serviceCost,ownersName,contactPhone){
        this.name=name;
        this.age=age;
        this.type=type;
        this.breed=breed;
        this.gender=gender;
        this.color=color;
        this.service=service;
        this.serviceCost=serviceCost;
        this.ownersName=ownersName;
        this.contactPhone=contactPhone;
        this.id=c;
        c++;


    }
}

const scooby=new Pet("Scooby",50,"Dog","Dane","Male","Brown","Full Service",50,"Shaggy","555-556-6677");
console.log(scooby);
const scrapy=new Pet("Scrapy",35,"Dog","Dane","Male","Brown","Nails cut",20,"Tommy","555-556-6677");
console.log(scrapy);
const Lazie=new Pet("Lazie",20,"Dog","Pitbull","female","White","Full Service",50,"Dude","555-556-7788");
console.log(Lazie)
const Markie=new Pet("Markie",23,"Cat","siamese","Male","Gray","Haircut",20,"Billy","223-556-6677");
console.log(Markie)



//add pets to the array

salon.pets.push(scooby);
salon.pets.push(scrapy);
salon.pets.push(Lazie);
salon.pets.push(Markie);

//console.log(salon.pets.length); // display the number of elements in the array 

// get the inputs save unn vars usinf id
var txtname=document.getElementById("petName");
var txtage=document.getElementById("petAge");
var txttype=document.getElementById("petType");
var txtbreed=document.getElementById("petBreed");
var txtgender=document.getElementById("petGender");
var txtcolor=document.getElementById("petColor");
var txtservice=document.getElementById("petService");
var txtserviceCost=document.getElementById("serviceCost");
var txtowner=document.getElementById("ownersName");
var txtcontactPhone=document.getElementById("contactPhone");

//register function


function register(){
var thePet = new Pet(txtname.value,txtage.value,txttype.value,txtbreed.value,txtgender.value,txtcolor.value,txtservice.value,txtserviceCost.value,txtowner.value,txtcontactPhone.value);
    //push the pet into the array
salon.pets.push(thePet);
console.log(salon.pets);
    //clear the input
    clear();
    //display(); //directory.js
    displayTable(thePet);
}

function clear(){
    txtname.value="";
    txtage.value="";
    txttype.value="";
    txtbreed.value="";
    txtgender.value="";
    txtcolor.value="";
    txtservice.value="";
    txtserviceCost.value="";
    txtowner.value="";
    txtcontactPhone.value="";
}

function displayTable(aPet){
    var tbody=document.getElementById('rowPet');
    var row=`<tr id="${aPet.id}">
                <td>${aPet.name} </td>
                <td>${aPet.age} </td>
                <td>${aPet.type} </td>
                <td>${aPet.gender} </td>
                <td>${aPet.breed} </td>
                <td>${aPet.color} </td>
                <td>${aPet.service} </td>
                <td>${aPet.serviceCost} </td>
                <td>${aPet.ownersName} </td>
                <td>${aPet.contactPhone} </td>
                <td><button class="btn btn-danger" onclick="deletePet(${aPet.id})"> <i class="fas fa-trash-alt"></i> Delete </button> </td></tr>
            `;
    tbody.innerHTML+=row;        
}

displayTable(scooby);
displayTable(scrapy);
displayTable(Lazie);
displayTable(Markie);

function deletePet(petID){
    //select the element to delete
    var tr=$('#'+petID);
    var indexDelete;  //IMPORTANT! you have to know the position (Everything with array is by positions)
    //travel the array (SEARCH FUNCTION)
    for(var i=0; i<salon.pets.length;i++){
        var selected=salon.pets[i];
        if(selected.id===petID){
            indexDelete=i;
        }
    }  
    //delete the pet from the array
        salon.pets.splice(indexDelete,1);
    //delete the pet from the HTML
    tr.remove();
}

function searchPet(){
    var ss=$('#petSearch').val();  //val() = value in JS
    var searchString = ss.toLowerCase();
    // console.log(searchString);

    for(var i=0; i<salon.pets.length;i++){
        var selected=salon.pets[i];
        if(selected.name.toLowerCase()===searchString){
            //console.log(selected)
            $("#"+selected.id).addClass('active');
        }else{

        }
    }   
   
    for(var i=0; i<salon.pets.length;i++){
        var selected=salon.pets[i];
        if(selected.name.toLowerCase() && selected.type.toLowerCase() && selected.service.toLowerCase()===searchString){
            // console.log(selected)
            $("#"+selected.id).addClass('green-bg');
        }else{
            // alert("Invalid entry. Please try again.");
        }
    }
}     
   //HOMEWORK
       
            


function init(){
    // displayTable(scooby);
    // displayTable(scrapy);

    $('#btr-register').click(register);
    $('#contactPhone').keypress(function(e){
        console.log(e.key);
        if(e.key==="Enter"){
            console.log("Add the pet");
            register();
        }
    });
}

// window.onload=init;
$(document).ready(()=>init());










// add the Search by: type, service



