const clockContainer = document.querySelector(".clock-container");
const dayContainer = document.querySelector(".day-container");

let month ;

const paintClock =(Year,Month,Day,Hours,Min,Sec) =>{
    if (Month < 10){
        Month = `0${Month}`;
    }
    if(Day < 10){
        Day = `0${Day}`;
    }
    if(Hours < 10){
        Hours = `0${Hours}`;
    }
    if(Min < 10){
        Min = `0${Min}`;
    }
    if(Sec < 10){
        Sec = `0${Sec}`;
    }
    
    dayContainer.innerHTML = `${Year}.${Month}.${Day}`;
    clockContainer.innerHTML = `${Hours} : ${Min} : ${Sec}`

   
}

const loadTime = () => {
    const Now = new Date();
    const Year = Now.getFullYear();
    const Month = Now.getMonth();
    const Day  = Now.getDate();
    const Hours = Now.getHours();
    const Min = Now.getMinutes();
    const Sec =  Now.getSeconds();

    month = Month;
    paintClock(Year,Month,Day,Hours,Min,Sec);
    
}

const saveMonth = () =>{
    localStorage.setItem("month",month);
}



const init = () => {
    setInterval(loadTime,1000);
    setInterval(saveMonth, 1000);    
}

init();