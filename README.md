# -mtm6302-final-LEGA0296

<!-- first function -->

#F1: Create a character Provide an HTML form that asks for a name, HP maximum, and the six core statistics of Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma. After completing the form, the user clicks the “Create Character” button, which saves the user’s form input as a character object and displays it on a panel of the screen. On the character panel, the six core statistics are labelled and displayed in a column, and numerical modifiers are displayed in parentheses beside each statistic. The character name can be any non-empty string, the HP maximum must be a positive integer, and each of the six core statistics must be an integer between 0 and 30. If the user input does not meet these requirements, do not save the character or populate the character sheet – instead, display a message that prompts the user to enter an input that meets the requirements (e.g. “Name cannot be blank!”). Once the user has successfully created a character, clear all form inputs. Afterwards, clicking the “Create Character” button again with cleared inputs should throw the input error message; doing so again with the form correctly filled out should overwrite the existing character.

<!-- second funtion -->

#F2: Edit character’s stats Beside each of the six core statistics, there is a button with an up arrow and a button with a down arrow. Each time the user clicks an up arrow, increment the relevant statistic by 1. Each time the user clicks a down arrow, decrement the relevant statistic by 1. The saved character object is updated each time. If the changed statistic would result in a change to its modifier (see table in the next section), the displayed modifier should be updated as well. If the user attempts to increment a statistic above 30 or decrement a statistic below 0, do not change the statistic or update the character – instead, display a message that tells the user of this limitation (e.g. “statistics must be between 0 and 30!”).

<!-- third function -->

#F3: Track character’s current HP On the character panel, the character’s HP maximum is displayed to the right of a slash, and the character’s current HP is an HTML number input displayed to the left of the same slash, like a fraction. The saved character object also has a separate attribute for the current HP. The current HP’s default value is set to be equal to the HP maximum, but it can be changed by user input into the number field. Each time the user makes a change to the input field, update the saved character. The current HP value may be increased above the HP maximum, but it may not be decreased below 0. If the user attempts to change the current HP to a number below 0, it instead becomes 0.

<!-- fourth function -->

F4: Roll dice The dice roller panel appears below the character panel. There is a button for each of the following options: d4, d6, d8, d10, d12, d20. When the user clicks one of these buttons, a random number is generated and displayed as a result message at the bottom of the panel. For example, if the user clicks the d4 button, a random number between 1 and 4 will be generated; if the user clicks the d20 button, a random number between 1 and 20 will be generated.

<!-- fifth function -->

#F5: Roll dice with character character stat modifiers In the dice roller panel, there is a list of the six core statistics, each with a radio button next to it (so that only one may be selected at a time). By default, none of the radio buttons are selected. The user may select one of the statistics radio buttons before clicking one of the dice buttons. If so, the modifier associated with the selected statistic will be added to the random number result.

<!-- final -->

Afterwards, the radio button is deselected. Information the app needs and remembers Between sessions, the app will remember the most recent state of the most recently created character, including name, current and maximum HP, and the values of the six core statistics. It will not remember any dice rolls.

<!-- Figma -->

## https://www.figma.com/design/qUDZ82xF56FtlGUPDFShYT/Interactive-DnD-stats?node-id=0-1&p=f&t=RkDlogq3B20OcvFM-0
