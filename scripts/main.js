// Burger Menu
navigationList = document.getElementById("navigation-list");
burger = document.getElementsByClassName("burger-menu")[0]; // ClassName возвращает коллекцию

burger.onclick = function() {
	navigationList.classList.toggle("nav-active");
	burger.classList.toggle("burger-active");
};


// Spoilers 
const spoilerArrow1 = document.getElementById("spoiler-arrow-1");
const textSpoiler1 = document.getElementById("text-wrapper-1");

const spoilerArrow2 = document.getElementById("spoiler-arrow-2");
const textSpoiler2 = document.getElementById("text-wrapper-2");

const spoilerArrow3 = document.getElementById("spoiler-arrow-3");
const textSpoiler3 = document.getElementById("text-wrapper-3");


spoilerArrow1.onclick = function() {
	spoilerArrow1.classList.toggle("active-arrow");
	textSpoiler1.classList.toggle("active-text");

	spoilerArrow2.classList.remove("active-arrow");
	spoilerArrow3.classList.remove("active-arrow");

	textSpoiler2.classList.remove("active-text");
	textSpoiler3.classList.remove("active-text");
};

spoilerArrow2.onclick = function() {
	spoilerArrow2.classList.toggle("active-arrow");
	textSpoiler2.classList.toggle("active-text");

	spoilerArrow1.classList.remove("active-arrow");
	spoilerArrow3.classList.remove("active-arrow");

	textSpoiler1.classList.remove("active-text");
	textSpoiler3.classList.remove("active-text");
};

spoilerArrow3.onclick = function() {
	spoilerArrow3.classList.toggle("active-arrow");
	textSpoiler3.classList.toggle("active-text");

	spoilerArrow1.classList.remove("active-arrow");
	spoilerArrow2.classList.remove("active-arrow");

	textSpoiler1.classList.remove("active-text");
	textSpoiler2.classList.remove("active-text");
};


// Slider
$(document).ready(function(){
    $(".slider-wrapper").slick();
})