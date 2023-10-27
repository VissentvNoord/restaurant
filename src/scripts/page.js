export default function loadTab(page){
    switch(page){
        case "header":
            header();
            break;
        case "homepage":
            homePage();
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
        }else if(i == 1){
            newButton.innerHTML = "Menu";
        }else{
            newButton.innerHTML = "Contact";
        }

        container.appendChild(newButton);
    }
}

function homePage(){
    const content = document.getElementById('content');

    const titleBox = document.createElement('div');
    titleBox.classList.add('title');
    content.appendChild(titleBox);

    const headText = document.createElement("h1");
    headText.innerHTML = "My Restaurant";
    titleBox.appendChild(headText);
}