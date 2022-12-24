
// Greetings output

function show(){
    let inp = document.getElementById('tim1').value;
    localStorage.setItem('input', `${inp}`);
    }

function getuser() {
    let out = localStorage.getItem('input');

    let date = new Date();
    let time = date.getHours();

    if(time >= 12 && time <= 16 ){
    document.getElementById("greet").innerHTML = `Good Afternoon <span class="edit">${out}</span> 🌞<br> Welcome to Taskmaster` 
    }
    else if(time >= 17 && time <= 19 ){
    document.getElementById("greet").innerHTML = `Good Evening <span class="edit">${out}</span> <br> Welcome to Taskmaster` 
    }
    else if(time >= 20 && time <= 22){
    document.getElementById("greet").innerHTML = `It's a lovely night <span class="edit">${out}</span> 🌙<br> Welcome to Taskmaster` 
    }
    else if(time >= 00 && time <= 04) {
    document.getElementById("greet").innerHTML = `It's a Scary night <span class="edit">${out}</span> 👻<br> Welcome to Taskmaster` 
    }
    else if(time >= 05 && time <= 11 ){
    document.getElementById("greet").innerHTML = `Good Morning <span class="edit">${out}</span> 😊<br> Welcome to Taskmaster` 
    }
    }


    // hint
    
    function err(){
        document.getElementById('err').innerHTML="This field is required*"
    }

    // Btn disabled

    function show1(){
    val=document.getElementById('tim1').value

        if(val == ""){
            document.getElementById('bt').disabled= true;
            // document.getElementById('bt').style.backgroundColor = "white";
        }
        else{
            document.getElementById('bt').disabled= false;
            document.getElementById('err').innerHTML=""
            // document.getElementById('bt').style.backgroundColor = "orangered";
        }
    }



// mode changing

var icon = document.getElementById('icon');
    Data=  [];

icon.onclick= function(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        icon.src = "/Assets/sun.png"
    }
    else{
        icon.src= "/Assets/moon.png"
    }
}