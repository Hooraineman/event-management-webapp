const events = [

{
name:"AI Workshop",
date:"2026-06-10",
description:"Learn Artificial Intelligence."
},

{
name:"Sports Gala",
date:"2026-06-15",
description:"Annual university sports event."
},

{
name:"Career Fair",
date:"2024-05-01",
description:"Meet top recruiters."
}

];

const eventContainer =
document.getElementById("eventContainer");

const form =
document.getElementById("eventForm");

const searchInput =
document.getElementById("searchInput");

const warning =
document.getElementById("warning");

function displayEvents(filteredEvents = events){

eventContainer.innerHTML = "";

filteredEvents.sort((a,b)=>
new Date(a.date)-new Date(b.date)
);

filteredEvents.forEach((event,index)=>{

const today = new Date();

const eventDate =
new Date(event.date);

const card =
document.createElement("div");

card.classList.add("event-card");

if(eventDate < today){
card.classList.add("past");
}
else{
card.classList.add("upcoming");
}

card.innerHTML = `
<h3>${event.name}</h3>

<p>
<strong>Date:</strong>
${event.date}
</p>

<p>${event.description}</p>

<button
class="delete-btn"
onclick="deleteEvent(${index})"
>
Delete
</button>
`;

eventContainer.appendChild(card);

});

}

function deleteEvent(index){

events.splice(index,1);

displayEvents();

}

form.addEventListener("submit",(e)=>{

e.preventDefault();

const name =
document.getElementById("eventName").value;

const date =
document.getElementById("eventDate").value;

const description =
document.getElementById("eventDescription").value;

if(
!name ||
!date ||
!description
){

warning.textContent =
"Please fill all fields.";

return;
}

warning.textContent="";

events.push({

name,
date,
description

});

form.reset();

displayEvents();

});

searchInput.addEventListener("keyup",()=>{

const value =
searchInput.value.toLowerCase();

const filtered =
events.filter(event=>

event.name
.toLowerCase()
.includes(value)

||

event.date
.includes(value)

);

displayEvents(filtered);

});

displayEvents();