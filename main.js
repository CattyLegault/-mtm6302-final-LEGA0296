// add const for each element
const $imageContainer = document.getElementById("image-display");
const $createButton = document.getElementById("create-character-btn");
const $saveButton = document.getElementById("save-character-btn");
const $hpInput = document.getElementById("hp-input");
const $imageDisplay = document.getElementById("character-image");

// add arrays for the classes
const classes = [
  { name: "Warrior", hitDie: 10 },
  { name: "Wizard", hitDie: 6 },
  { name: "Rogue", hitDie: 8 },
  { name: "Cleric", hitDie: 8 },
  { name: "Paladin", hitDie: 6 },
  { name: "Ranger", hitDie: 8 },
  { name: "Bard", hitDie: 8 },
  { name: "Druid", hitDie: 6 },
  { name: "Monk", hitDie: 10 },
  { name: "Sorcerer", hitDie: 10 },
  { name: "Warlock", hitDie: 12 },
  { name: "Barbarian", hitdie: 12 },
];

const stats = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];

// create event listener
$createButton.addEventListener("click", async () => {
  const characterName = document.getElementById("character-name").value;
  const characterClass = document.getElementById("character-class").value;
  const characterRace = document.getElementById("character-race").value;
  const hp = $hpInput.value;
});
