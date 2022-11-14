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



// Greetings output

function show(){
    let inp = document.getElementById('tim1').value;
    localStorage.setItem('input', `${inp}`);
    const time =new TimeRanges()
    if(time >= 12 ){
        document.getElementById(greet2).innerHTML = "working"
    }
    }

function getuser() {
    let out = localStorage.getItem('input');
    document.getElementById("greet").innerHTML = `Hello ${out} Welcome to Taskmaster` 
    }