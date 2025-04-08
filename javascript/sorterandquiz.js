const arr = [5, 3, 8, 1, 2, 7, 4, 6];
const quizAnswers = ["Isaac Asimov", "Wolf Hall", "Liu Cixin", "The Dark Forest", "Kazuo Ishiguro"];

function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function getAnswers() {
    quizPersonAnswers = [];
    quizPersonAnswers.push(document.getElementById("question1").value);
    quizPersonAnswers.push(document.getElementById("question2").value);
    quizPersonAnswers.push(document.getElementById("question3").value);
    quizPersonAnswers.push(document.getElementById("question4").value);
    quizPersonAnswers.push(document.getElementById("question5").value);
    const score = checkAnswers(quizAnswers, quizPersonAnswers);
    console.log("Your score is: " + score + "/5");
    const el = document.getElementById("score");
    el.innerHTML = "Your score is: " + score + "/5";
}

function checkAnswers(correct, answers) {
    let score = 0;
    for (let i = 0; i < correct.length; i++) {
        if (correct[i].toLowerCase() === answers[i].toLowerCase()) {
            score++;
        }
    }
    return score;
}
