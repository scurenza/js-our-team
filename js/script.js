/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto. */

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede. Se non vi sentite particolarmente creativi, potete prendere uno spunto dallo screenshot allegato.


// Dati
const firstRow = document.getElementById("firstRow");
const secondRow = document.getElementById("secondRow");


// Array
const teamArray = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        pic: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        pic: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        pic: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        pic: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Scott Estrada",
        pic: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        pic: "barbara-ramos-graphic-designer.jpg"
    }
];

for (let i = 0; i < 3; i++) {
    const thisMember = teamArray[i];
    firstRow.innerHTML += `
    <div class="card">
        <div class="card-img">
            <img src="img/${thisMember.pic}" alt="" />
        </div>
        <div class="card-text">
            <h3>Name: ${thisMember.name}</h3>
            <h4>Role: ${thisMember.role}</h4>
        </div>
  </div>
    `
}

for (let i = 3; i < teamArray.length; i++) {
    const thisMember = teamArray[i];
    secondRow.innerHTML += `
    <div class="card">
        <div class="card-img">
            <img src="img/${thisMember.pic}" alt="" />
        </div>
        <div class="card-text">
            <h3>Name: ${thisMember.name}</h3>
            <h4>Role: ${thisMember.role}</h4>
        </div>
    </div>
    `
}