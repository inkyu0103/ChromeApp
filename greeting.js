const greetingContainer = document.querySelector(".greeting");
const nameFormContainer = greetingContainer.querySelector("form");
const nameValue = nameFormContainer.querySelector("input");



const paintName  = (name) =>{
    greetingContainer.removeChild(nameFormContainer);
    greetingContainer.innerText = `Hello , ${name}`;
}

const saveName = (name) =>{
    localStorage.setItem("Name",JSON.stringify(name));
    paintName(name);
}


const handleSubmit = (event) =>{
    event.preventDefault();
    if (nameValue.value !== ""){        
        saveName(nameValue.value);
    }else{
        alert("Please input your name")
    }
}


const loadName = () =>{
    const myName = localStorage.getItem("Name");
    if (myName !== null){
        const parsedName = JSON.parse(myName);
        paintName(parsedName);
    }
}

const greetingEventHandler = () =>{
    loadName();
    nameFormContainer.addEventListener("submit",handleSubmit);
}

greetingEventHandler();
