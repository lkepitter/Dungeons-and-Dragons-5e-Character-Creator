# Dungeons and Dragons Character Creator

This app is my own take on a character creator for the Dungeons and Dragons (Fifth Edition) game, in the vein of the official [DNDBeyond](https://www.dndbeyond.com/).

The current version simply displays pre-built characters from given data. In future versions I'll add the core functionality: letting the user actually edit the fields to create their own!

I haven't yet finished the entire display and the maths under the hood. Ideally I'll have one or more components do the calculations for the character stats and the Display will simply show them, but at the moment it's doing the calculations.

## Other planned features:

- Save to and load from local storage (possibly also save/load to online DB storage - hence express and pg dependencies)
- Hamburger menu for character save/load and additional options
- Level up options in the left side menu to allow easy character changes and pre-build (a great feature in a similar app for the Pathfinder game)
- Data fetching from the [D&D 5e API](https://www.dnd5eapi.co/) for easy rules integration
- Plugin custom data for homebrew and third party game content

