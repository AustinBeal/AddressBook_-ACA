console.log('loading main.js file')


function getUser(){
        console.log("sending fetch request");
    let fetchPromise = fetch('https://randomuser.me/api?results=10');
    
    let jsonPromise = fetchPromise.then(function(response){
        console.log("processing the fetch request");
        //console.log('response =', response)
     
     return response.json()
    });

    jsonPromise.then(function(json){
      let users = json.results;

      let jsonR = json.results
      for(let index = 0; index <= 9; index ++){
       //console.log(jsonR[index])
         jsonR[index].blah = index 
     }
      users.forEach(function(user){
        let userCardHtml = generaateContactCars2(user)
        let div = document.createElement("div")
        div.innerHTML = userCardHtml;
        document.getElementById("contactCards").appendChild(div)
      })

     //console.log(jsonR[9].blah)
     console.log("processing the json", json.results)
    });
    
  console.log('after sending fetch request');
};

getUser();

// 


function generaateContactCars2(user){
  
  return `
          <div class="contactCard">
            <img src="${user.picture.thumbnail}">
            <span class="name" onclick="myFunction${user.blah}()">${user.name.first} ${user.name.last}</span>
            <br>
            <div id="hiddenClass${user.blah}">
              <span class="phonenumber"> Phone: ${user.phone}</span>
              <br>
              <span class="email"> Email: ${user.email}</span>
            </div>
          </div>
          `;
}

function myFunction0() {
  var x = document.getElementById("hiddenClass0");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
}
}
function myFunction1() {
  var x = document.getElementById("hiddenClass1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
}
}
function myFunction2() {
  var x = document.getElementById("hiddenClass2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
}
}
function myFunction3() {
  var x = document.getElementById("hiddenClass3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
}
}
function myFunction4() {
  var x = document.getElementById("hiddenClass4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
}
}
function myFunction5() {
  var x = document.getElementById("hiddenClass5");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
}
}
function myFunction6() {
  var x = document.getElementById("hiddenClass6");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
}
}
function myFunction7() {
  var x = document.getElementById("hiddenClass7");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
}
}function myFunction8() {
  var x = document.getElementById("hiddenClass8");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
}
}function myFunction9() {
  var x = document.getElementById("hiddenClass9");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
}
}
//document.getElementById("").classList.toggle("")

//function generateContactCard(user){

  //     let contactCard = document.createElement("div")
  //     contactCard.className = "contactCard"
  
  //     let img = document.createElement("img")
  //     img.src = user.picture.thumbnail;
  
  //     contactCard.appendChild(img);
  
  //     let name = document.createElement("span")
  //     name.className = "name"
  //     name.innerText = user.name.first + " " + user.name.last;
  //     contactCard.appendChild(name)
  
  //     return contactCard;
  
