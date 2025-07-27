const gallery = document.querySelector(".gallery");
const charpentes = document.getElementById("charpentes");
const villas = document.getElementById("villas");
const extension = document.getElementById("extension");

baseUrl = "realisations.json";

const getRealisation = async () => {
    const request = await fetch(baseUrl);
    realisation = await request.json();
    console.log(realisation);
    renderRealisation();

}


function renderRealisation() {
    realisation.innerHTML = "";
    realisation
    .sort((a, b) => {
        if(sortMethod == "charpentes") {
            return a. 
        }
    })
    .map((r) => {
        const card = `
         <img src=${r.url} alt="Réalisation 1" />
        
        
        
        `;
        gallery.innerHTML += card;
    })
}


getRealisation();