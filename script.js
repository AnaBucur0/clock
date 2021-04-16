function currenttime(){
    var date = new Date;
    var timenow = document.getElementById('nowclock')
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (hours<=9){
        hours = "0"+hours
    }
    if (minutes<=9){
        minutes = "0"+minutes
    }
    if (seconds<=9){
        seconds = "0"+seconds
    }
    timenow.innerText = hours + ':' + minutes + ":" + seconds
    setTimeout(currenttime, 1000);
}

function timeUntil(tillWhen, tillYear){
    var currentYear = new Date;
    var newYear = new Date(tillWhen+", " + tillYear + " 00:00:00").getTime();
    var timeTillNewYear = (newYear - currentYear.getTime())/1000
    var seconds = Math.floor(timeTillNewYear%60)
    var minutes = Math.floor(timeTillNewYear/60%60)
    var hours = Math.floor(timeTillNewYear/3600%24)-1
    var days = Math.floor(timeTillNewYear/60/60/24)
    return days+' Days '+hours+' Hours '+minutes+' Minutes '+seconds+' Seconds '
}

function displayTimers(){
    var d = new Date;
    currentYear = d.getFullYear();
    var chrismas = document.getElementById('christmasclock')
    var newyears = document.getElementById('newyearsclock')
    newyears.innerText = timeUntil("Jan 1", currentYear+1);
    chrismas.innerText = timeUntil("Dec 25", currentYear);
    setTimeout(displayTimers, 1000);
}

currenttime()
displayTimers()
