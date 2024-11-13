# Interactive Simon Says Game 🌟
🎮 Project Highlights:
Gameplay: Players match a random color sequence with increasing difficulty at each level.
Scoring: Keeps track of the player’s highest score, motivating users to beat their own record!
UI Design: Flashing button animations and background effects that enhance the user experience.

💻 Code Overview:
The project uses JavaScript for game logic, CSS for styling, and event listeners for user interaction:

javascript
Copy code
function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelup(), 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your Score Was ${level}`;
        reset();
    }
}
This project was a great way to dive deeper into DOM manipulation, event handling, and interactive UI design. I'm proud of the outcome and would love feedback or ideas for improvements!
