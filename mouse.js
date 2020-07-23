const parent = document.getElementById("parent");
const child = document.getElementById("child");
const text = document.getElementById("text");
const clear = document.getElementById("clear");

parent.addEventListener("mouseover" ,e => {
	text.innerHTML += `Type:${e.type}, Target:${e.target.id}, Related Target:${e.relatedTarget.id}\n`;
	text.scrollTop = text.scrollHeight;
});


parent.addEventListener("mouseout", e=> {
	text.innerHTML += `Type:${e.type}, Target:${e.target.id}, Related Target:${e.relatedTarget.id}\n`;
	text.scrollTop = text.scrollHeight;
});



parent.addEventListener("mouseenter" , e=> {
	text.innerHTML += `Type:${e.type}, Target:${e.target.id}, Related Target:${e.relatedTarget.id}\n`;
	text.scrollTop = text.scrollHeight;
})

child.addEventListener("mouseenter" , e=> {
	text.innerHTML += `Type:${e.type}, Target:${e.target.id}, Related Target:${e.relatedTarget.id}\n`;
	text.scrollTop = text.scrollHeight;
})

parent.addEventListener("mouseleave" , e => {
	text.innerHTML += `Type:${e.type}, Target:${e.target.id}, Related Target:${e.relatedTarget.id}\n`
	text.scrollTop = text.scrollHeight;
});

child.addEventListener("mouseleave" , e => {
	text.innerHTML += `Type:${e.type}, Target:${e.target.id}, Related Target:${e.relatedTarget.id}\n`
	text.scrollTop = text.scrollHeight;
});




// For Button

clear.addEventListener("click" , () =>{
	text.innerHTML = " ";
	
});