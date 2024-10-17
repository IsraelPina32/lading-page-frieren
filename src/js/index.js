
const characters = document.querySelectorAll(".character")


characters.forEach((character) => {
    character.addEventListener("mouseenter", () => {

        character.classList.toggle(".select")

        const idSelected = character.attributes.id.value
       
        const imagePlayer2 = document.getElementById('character-player-2');
        imagePlayer2.src = `./src/img/${idSelected}_anime_panel.png`

        const namePlayer2 = document.getElementById("name-player-2");
        
        const nameSelected = character.getAttribute('data-name');
        
        
        namePlayer2.innerHTML = nameSelected;
        
    })
})
