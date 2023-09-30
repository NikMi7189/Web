let r = Math.floor(Math.random() * 256)
let g = Math.floor(Math.random() * 256)
let b = Math.floor(Math.random() * 256)
document.querySelector(':root').style.setProperty('--randomcolor', "rgb(" + r + "," + g + "," + b + ")");

function format(value)
{
    if (value < 10)
    {
        value='0'+value;
    }
    return value;
}

function date_time()
{
    let current_datetime = new Date();
    let day = format(current_datetime.getDate());
    let month = format(current_datetime.getMonth()+1);
    let year = current_datetime.getFullYear();
    let hours = format(current_datetime.getHours());
    let minutes = format(current_datetime.getMinutes());
    let seconds = format(current_datetime.getSeconds());

    if(seconds % 10 < 6 && seconds % 10 != 0){
        document.getElementById('nameOrGroup').innerHTML ="Автор: Мисюркеев Н.В.";
    }
    else{
        document.getElementById('nameOrGroup').innerHTML ="Студент Группы Б761-2";
    }

    return day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds;
}

document.getElementById('dateTime').innerHTML = date_time();

setInterval(function () {document.getElementById('dateTime').innerHTML = date_time();}, 1000);

let arr = ["https://www.youtube.com/", "https://vk.com/", "https://www.twitch.tv/"];
let linkIndex = Math.floor(Math.random() * 3)
document.getElementById("randomLink").href = arr[linkIndex]