const imageContainer = document.getElementById("image-container");
const $createButton = document.getElementById("create-character-btn");
const $saveButton = document.getElementById("save-character-btn");
const $hpInput = document.getElementById("hp-input");

const classes = [
  "Warrior",
  "Wizard",
  "Rogue",
  "Cleric",
  "Paladin",
  "Ranger",
  "Bard",
  "Druid",
  "Monk",
  "Sorcerer",
  "Warlock",
  "Barbarian",
];

$createButton.addEventListener("click", async () => {
  const characterName = document.getElementById("character-name").value;
  const characterClass = document.getElementById("character-class").value;
  const characterRace = document.getElementById("character-race").value;
  const hp = $hpInput.value;
});
