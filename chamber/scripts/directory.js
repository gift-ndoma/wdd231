const url = "https://github.com/gift-ndoma/wdd231/blob/main/chamber/data/members.json";
const cards = document.getElementById('cards');

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members)
}

getMembersData();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");
        let website = document.createElement("p");

        fullName.innerHTML = `${prophet.name} ${prophet.lastname}`;

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "300");
        portrait.setAttribute("height", "300");

        card.appendChild(fullName);
        card.appendChild(portrait);

        cards.appendChild(card)
    });
}
