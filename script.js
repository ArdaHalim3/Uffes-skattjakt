// Definiera korrekt svar-array
const correctAnswers = [
    "Julklapp", "Alba", "Annika Mellgren", "Baileys", "Tablettask",
    "Fanta", "Tomten", "Lejon", "Julgran", "Ufuk Konkur"
];

// Funktion för att kontrollera svar
function checkAnswers() {
    let score = 0;
    const inputs = document.querySelectorAll(".answer"); // Alla input-fält

    inputs.forEach((input, index) => {
        const userAnswer = input.value.trim().toLowerCase();  // Användarens svar
        const correctAnswer = correctAnswers[index].toLowerCase(); // Korrekt svar

        console.log(`Input ${index + 1}: ${userAnswer} - Korrekt svar: ${correctAnswer}`);

        if (userAnswer === correctAnswer) {
            input.classList.add("correct"); // Lägg till rätt klass
            input.classList.remove("incorrect"); // Ta bort fel klass
            console.log(`Input ${index + 1} är korrekt!`);
            score++;
        } else {
            input.classList.add("incorrect"); // Lägg till fel klass
            input.classList.remove("correct"); // Ta bort rätt klass
            console.log(`Input ${index + 1} är fel!`);
        }
    });

    // Uppdatera resultatet på sidan
    document.getElementById("result").innerText = `Du fick ${score}/10 rätt.`;
}

// Lägg till event-hanterare på knappen för att trigga kontrollen
document.getElementById("checkButton").addEventListener("click", checkAnswers);
