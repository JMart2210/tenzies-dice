# tenzies-dice
**Live Version here**: https://jmart2210.github.io/tenzies-dice/

**Tech Used**: HTML, CSS, JavaScript, nanoid, Confetti, React & Vite

A fun dice game built with React. I managed gameplay and the state of several items using the useState and useEffect React hooks. I also imported the libraries "nanoid" to generate unique keys, and "confetti-react" to incorporate a fun visual when the user wins the game.

The scoreboard at the bottom displays the number of rolls for the current round, as well as the users all time "high-score". The high-score is stored in local storage. If the user's current round has already exceeded the high-score, there is some conditional formatting to subtly indicate they cannot improve the high score this round. Also, upon winning if the round results in a new high score, the confetti keeps dropping until a new game is started. Otherwise, the confetti drops for just a second. 

**To deploy to github pages**: npm run deploy 

<img src="./public/ten-dice-example.gif" />
