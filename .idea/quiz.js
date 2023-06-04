let quizPos = 1;
let position = 0;

const questions = [
    ['2+2', '3', '4', '5','B'],
    ['3+3', '6', '7', '8','A'],
    ['4+4', '8', '16', '1','A'],
    ['5+26', '21', '31', '22','B'],
    ['153-49', '104', '114', '202','A'],
    ['134*3', '412', '402', '422','B'],
    ['13 050/435', '40', '20', '30','C'],
    ['4 663+33*350', '16 215', '16 213', '16 225','B'],
    ['8+8', '16', '64', '18','A'],
    ['2+2*2', '6', '7', '8','A']
];

// Quiz score
let correct = 0;
let incorrect = 0;

renderQuiz();

// Render quiz
function renderQuiz() {
    console.log('!!!!!!!!!!!!!!!!');
    const qTitle = document.getElementById('qTitle');
    const option1 = document.getElementById('option1');
    const option2 = document.getElementById('option2');
    const option3 = document.getElementById('option3');

    qTitle.innerHTML = questions[position][0];
    option1.innerHTML = questions[position][1];
    option2.innerHTML = questions[position][2];
    option3.innerHTML = questions[position][3];
}

// Check answers
function checkAnswer() {
    // Get group name
    choices = document.getElementsByName('choices');
    // Loop through options to check for selected answer
    for(var i = 0; i < choices.length; i++) {
        // Get the value of selected answer
        if(choices[i].checked) {
            choice = choices[i].value;
        }
    }
    // Check if value = correct answer
    if(choice == questions[position][4]) {
        correct++;
    } else {
        incorrect++;
    }
    position++;
    quizPos++
}

// Sumbit Answer
submitAnswer.addEventListener('click', (e) => {
    if(quizPos >= questions.length) {
        checkAnswer();
        displayResults();
    } else {
        checkAnswer();
        clearQuiz();
        clearCheckbox();
        renderQuiz();
    }
})

// Display results from quiz
function displayResults() {
    container.innerHTML = '<h1 class="board title text-center text-primary" id="result"><br><strong><i>Results ' + correct + '/' + questions.length + '</i></strong></h1>'
}

// Clear quiz
const clearQuiz = () => { option1.innerHTML = ''; option2.innerHTML = ''; option3.innerHTML = ''; }
// Clear checkboxs
const clearCheckbox = () => { check1.checked = false; check2.checked = false; check3.checked = false; }