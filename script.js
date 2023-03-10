var select = document.querySelectorAll('select');
let alarmTime, isAlarmSet,
ringtone = new Audio("twirling-intime-lenovo-k8-note-alarm-tone-41440.mp3");

// ---------for inserting options -------------
console.log(select);
for(let i= 0; i <= 12; i++){
    if(i < 10){
        i = "0"+i;
    }
    let option = "<option value="+i+">"+i+"</option>";
    select[0].firstElementChild.insertAdjacentHTML("beforebegin", option);
}

console.log(select[1]);
for(let i = 0 ; i < 60; i++){
    if(i < 10){
        i = "0"+i;
    }
    let option = "<option value="+i+">"+i+"</option>";
    select[1].firstElementChild.insertAdjacentHTML("beforebegin", option);
}

for(let i=0; i< 60; i++){
    if(i <10){
        i = "0" + i;
    }
    let option = "<option value="+i+">"+i+"</option>"
    select[2].firstElementChild.insertAdjacentHTML("beforebegin", option)
}



// set alarm button functioning

let setalarmbutton = document.getElementById('setalarm-btn');
let alarmcontainer = document.getElementById('alarm-container');



setalarmbutton.addEventListener('click', function(){
    // made a new new elemnt div
    let div = document.createElement('div');
    
    // adding styling to div
    div.style.width = "100%";
    div.style.height = "2em";
    div.style.borderBottom = "1px solid black";
    div.style.borderTop = "1px solid black";
    div.style.display = "flex";
    div.style.justifyContent = "space-between";
    div.style.alignItems = "center";


    // adding id to the divs
    div.id = document.getElementById('hours').value +":" + document.getElementById('minutes').value+":"+document.getElementById("seconds").value+":"+document.getElementById('ampmss').value;

    // creating p for div
    let p = document.createElement('p');
    p.style.marginLeft = "5%";
    p.innerText = document.getElementById('hours').value +":" + document.getElementById('minutes').value+":"+document.getElementById("seconds").value+" "+document.getElementById('ampmss').value;
    p.setAttribute("class", "alarmtime")
     div.appendChild(p);

    // div.appendChild(test)
    alarmcontainer.appendChild(div);

    // adding delete button for divs
    var delbtn = document.createElement('div');
    delbtn.style.width = "25%";
    delbtn.style.height = "70%";
    delbtn.style.border = "1px solid black";
    delbtn.style.borderRadius = "10px";
    delbtn.innerText = "DELETE";
    delbtn.style.marginRight = "5%";
    delbtn.style.cursor = "pointer";
    delbtn.setAttribute("class", div.id);
    
    // delete btn functioning
    delbtn.addEventListener('click', function(){
    console.log(this.getAttribute("class"));
    this.parentElement.remove();
})
    div.appendChild(delbtn);

})




// --------alarm clock working---------------
let hrs = document.getElementById('hr');
let mins = document.getElementById('min');
let secs = document.getElementById('sec');
let ampms = document.getElementById('ampm');


setInterval(function(){
        let date = new Date();
        let hr = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();

        if(hr >= 12){
            hr = eval(hr-12);
            ampms.innerText = "PM";
        }

        if(hr < 10){
            hrs.innerText = "0"+ hr;
            hr = hrs.innerText; 
        }else{
            hrs.innerText = hr;
        }

        if(min < 10){
            mins.innerText = "0"+ min;
            min = mins.innerText; 
        }else{
            mins.innerText = min;
        }
        
        if(sec < 10){
            secs.innerText = "0"+ sec;
            sec = secs.innerText;
        }else{
            secs.innerText = sec;
        }
        
        
        // if the alarm matches the current time then the user is alreted 
        for(let i = 0; i < document.getElementsByClassName("alarmtime").length; i++){
            if(hr+":"+min+":"+sec+" "+ampms.innerText == document.getElementsByClassName("alarmtime")[i].innerText ){
                window.alert(alert(hr+":"+min+":"+sec+" "+ ampms.innerText));
                document.getElementsByClassName("alarmtime")[i].parentElement.remove();
            }
            
        }


    }, 1000);



    // switch for dark mode & bright mode
    var ball = document.getElementById('ball');
    var tf = true;
    ball.addEventListener('click', function(){
        
        if(tf == true){
            ball.style.marginLeft = "30px";
            tf = false;   
            document.body.style.backgroundColor = "black";
            document.getElementById('color').style.borderColor = "white";
            document.getElementById('ball').style.backgroundColor = "white";
            document.body.style.color = "white";
            document.getElementById('container').style.borderColor = "white";
            document.getElementById('clock').style.borderTopColor = "white";
            document.getElementById('clock').style.borderBottomColor = "white";
            document.getElementById('setting-div').style.borderBottomColor = "white";
        }else{
            ball.style.marginLeft = "0px";
            tf = true;
            document.body.style.backgroundColor = "green";
            document.body.style.color = "black";
            document.getElementById('color').style.borderColor = "black";
            document.getElementById('ball').style.backgroundColor = "black";
            document.getElementById('container').style.borderColor = "black";
            document.getElementById('clock').style.borderTopColor = "black";
            document.getElementById('clock').style.borderBottomColor = "black";
            document.getElementById('setting-div').style.borderBottomColor = "black";
        }
        
    })