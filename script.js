

let btn=document.querySelector(".gamesBtn");
let list=document.querySelector(".list");
let li=document.querySelector(".li");
let cover=document.querySelector(".cover");

// let body=document.querySelector("body");






btn.onclick=()=>{
        list.classList.toggle("active");
       
}



function openPopup(details) {
        document.getElementById('popup-content').innerText = details;
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('popup').style.display = 'block';
      }
    
      function closePopup() {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('popup').style.display = 'none';
      }




