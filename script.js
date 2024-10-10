// List of additional artworks to add dynamically
const newArtworks = [
    { title: 'The Scream', artist: 'Edvard Munch', img: 'https://via.placeholder.com/200' },
    { title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', img: 'https://via.placeholder.com/200' },
    { title: 'The Birth of Venus', artist: 'Sandro Botticelli', img: 'https://via.placeholder.com/200' },
    { title: 'The Night Watch', artist: 'Rembrandt van Rijn', img: 'https://via.placeholder.com/200' },
    { title: 'The Kiss', artist: 'Gustav Klimt', img: 'https://via.placeholder.com/200' },
    { title: 'American Gothic', artist: 'Grant Wood', img: 'https://via.placeholder.com/200' },
    { title: 'Las Meninas', artist: 'Diego Velázquez', img: 'https://via.placeholder.com/200' },
    { title: 'The Last Supper', artist: 'Leonardo da Vinci', img: 'https://via.placeholder.com/200' },
    { title: 'Water Lilies', artist: 'Claude Monet', img: 'https://via.placeholder.com/200' },
    { title: 'Starry Night Over the Rhône', artist: 'Vincent van Gogh', img: 'https://via.placeholder.com/200' }
];
// Add your JavaScript code here.
// Later, move this to an external JavaScript file for better organization.



let viewCount=0; //view counter
function updateCount() //update count
{
    document.getElementById("counter").innerText = `Artworks Viewed: ${viewCount}`;
    
}

//panel click
function panelClick(event){
    const panel = event.currentTarget; //get currently clicked panel
    if(!panel.classList.contains("viewed"))
    {
        panel.classList.add("viewed");
        panel.style.backgroundColor="red";
        viewCount++;
        updateCount();
    }

}

//event listener time for each panel 
const artPanels = document.querySelectorAll(".art-panel");
artPanels.forEach(panel => 
    {
        panel.addEventListener("click", panelClick);
    }
);

function resetGallery() //reset 
{
    const artPanels = document.querySelectorAll(".art-panel"); //select all panels
    artPanels.forEach(panel=>
        {
            panel.classList.remove("viewed");
            panel.style.backgroundColor = "#eee"; //default color and state.
        }
    );
}
document.getElementById("reset-button").addEventListener("click", resetGallery); //reset button

function addArt()
{
    const randArt = newArtworks[Math.floor(Math.random()*newArtworks.length)];
    const newPanel = document.createElement("div");
    newPanel.classList.add("art-panel");
    const img = document.createElement("img");
    img.src=randArt.img;
    img.alt = `${randArt.title} by ${randArt.artist}`;
    const desc = document.createElement("p");
    desc.innerText = `${randArt.title} by ${randArt.artist}`;

    newPanel.appendChild(img);
    newPanel.appendChild(desc);
    newPanel.addEventListener("click", panelClick);
    document.querySelector(".art-grid").appendChild(newPanel);
}

document.getElementById("add-art-button").addEventListener("click", addArt );
updateCount();