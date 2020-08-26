function display(){
var pets = salon.pets;
const dogImg="https://i.ebayimg.com/images/g/mfYAAOSwYpVcXx6s/s-l400.png";
const catImg="https://cdn.pixabay.com/photo/2020/05/11/15/38/tom-5158824_960_720.png";
const duckImg="https://www.pinclipart.com/picdir/middle/44-443515_mels-voice-for-daffy-holds-the-world-record.png";

const petSection = document.getElementById('pets');
var text="";
var icon;






for(var i=0;i<pets.length;i++){

    if(pets[i].type==="Dog"){
        icon=dogImg;
    }else if(pets[i].type==="Cat"){
        icon=catImg;
    }else if(pets[i].type==="Duck"){
        icon=duckImg;
    }else{
        icon=noTypeImg;
    }    

    console.log(icon);



    console.log(pets[i]);
    text+=`
        <div class="pet">
            <h2>Name: ${pets[i].name}</h2>
            <img class="icon" src="${icon}">
            <p>Age: ${pets[i].age}</p>
            <p>Type: ${pets[i].type}</p>
            <p>Breed: ${pets[i].breed}</p>
            <p>Gender: ${pets[i].gender}</p>
            <p>Service: ${pets[i].service}</p>
            <p>Service Cost: ${pets[i].serviceCost}</p>
            <p>Owner's name: ${pets[i].ownersName}</p>
            <p>Contact phone: ${pets[i].contactPhone}</p> 
            
        </div>

    `;
}

petSection.innerHTML=text;
}
display();



