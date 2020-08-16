const body = document.querySelector("body");
const IMG_NUMBER = 5;
let monthForSeason;
let season;


const paintImg = (imgNum) => {
    const image = new Image();
    image.src = `image/${season}/${imgNum+1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
    
}


const getNumber = () =>{
    const number = Math.floor(Math.random()*IMG_NUMBER);
    console.log(number);
    return number;
}


const setSeason = () =>{
    if (monthForSeason == 12 || monthForSeason == 1 || monthForSeason == 2){
        season = "Winter";
    }else if (monthForSeason ==3 || monthForSeason == 4 || monthForSeason == 5){
        season = "Spring";
    }else if (monthForSeason == 6 || monthForSeason == 7 || monthForSeason == 8 ){
        season = "Summer";
    }else{
        season = "Autumn";
    }
}

const loadMonth = () =>{
    monthForSeason= localStorage.getItem("month");
    setSeason();
}

const backgroundEventHandler =() =>{
    loadMonth();
    const randomNumber = getNumber();
    paintImg(randomNumber);
}

backgroundEventHandler();