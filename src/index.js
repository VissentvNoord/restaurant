import loadTab from "./scripts/page";
import './styles/mainpage.css';
import './styles/header.css';

loadTab("header");
loadTab("home");

const homeButton = document.getElementById('home');
homeButton.addEventListener('click' , onHomeClick);

const menuButton = document.getElementById('menu');
menuButton.addEventListener('click' , onMenuClick);

const contactButton = document.getElementById('contact');
contactButton.addEventListener('click' , onContactClick);

function onHomeClick(){
    loadTab('home');
}

function onMenuClick(){
    loadTab('menu');
}

function onContactClick(){
    loadTab('contact');
}