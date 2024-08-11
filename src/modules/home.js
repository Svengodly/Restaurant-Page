import Icon from "../mug.jpg";

export function createHome(parent) {
    const headliner = document.createElement('p');
    headliner.setAttribute("id","headliner");
    headliner.innerText = "Simple. Satiating. Satisfying.";

    const image = document.createElement('img');
    image.setAttribute("src", Icon);

    const spiel = document.createElement('p');
    spiel.innerText = "Why complicate your morning? Get a kickstart to your day with a refreshing cup of coffee, and why not grab a delectable pastry while your at it?";

    parent.appendChild(headliner);
    parent.appendChild(image);
    parent.appendChild(spiel);

    return parent;
}