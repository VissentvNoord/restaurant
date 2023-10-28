let currentPage = "";

export default function loadTab(page){
    const content = document.getElementById('content');
    content.innerHTML = "";
    switch(page){
        case "header":
            header();
            break;
        case "home":
            homePage();
            currentPage = "home";
            break;
        case "menu":
            menuPage();
            currentPage = "menu";
            break;
        case "contact":
            contactPage();
            currentPage = "contact";
            break;
    }
}

function header(){
    const content = document.getElementById('content');

    const container = document.createElement('div');
    container.id = 'header';
    document.body.insertBefore(container, content);

    for(let i = 0; i < 3; i++){
        const newButton = document.createElement('button');

        if(i == 0){
            newButton.innerHTML = "Home";
            newButton.id = "home";
        }else if(i == 1){
            newButton.innerHTML = "Menu";
            newButton.id = "menu";
        }else{
            newButton.innerHTML = "Contact";
            newButton.id = "contact";
        }

        container.appendChild(newButton);
    }
}

function homePage(){
    const content = document.getElementById('content');

    const container = document.createElement('div');
    container.classList.add('main');
    content.appendChild(container);

    const headText = document.createElement("h1");
    headText.classList.add('title');
    headText.innerHTML = "My Restaurant";
    container.appendChild(headText);


    console.log("Generated home page");
}

function menuPage(){
    const content = document.getElementById('content');

    const container = document.createElement('div');
    content.appendChild(container);

    const menuItem1 = document.createElement('h2');
    menuItem1.innerHTML = "Kapot lekkere soep!";
    container.appendChild(menuItem1);
}

function contactPage(){
    const content = document.getElementById('content');
}