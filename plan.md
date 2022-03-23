## Add level up side bar

Added ability to change class, though display currently doesn't update. The display DOES update when the Load button in the menu is clicked. I tried to replicate this state change, but no dice so far.

- Create in Selector component [DONE]
- Add equipment and other choices for 1st level
- Add editable features for each level
- Add feats/ability score changes at relevant levels
- Add above for up to 5trh level first
- Continue up to 20th
- Style with a box for each level

### Bugs

- Class name doesn't update in Display:
  Only updates when I access that component itself. How do I get it to update when a separate component does it?
  Useeffect is breaking the display

### Class Features

As a {class.name}, you gain the following class features.

Hit Points
Hit Dice: 1d{class.hitDie} per {class} level
Hit Points at 1st Level: {class.hitDie} + your Constitution Modifier
Hit Points at Higher Levels: 1d{class.hitDie} + your Constitution modifer per {class} level

Proficiences
Armour: {class.armourProf}
Weapons: {class.weaponProf}
Tools: {class.toolsProf}
Saving Throws: {class.savesProf}
Skills: Choose {class.skillsProf.numChoice} from {class.skillsProf.choices}
Equipment
You start with the following equipment, in addition to the equipment granted by your background:

{class.startingEquipment.map}
