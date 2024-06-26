const categories = ["idealistic", "disillusioned", "cynical", "hopeful"];
const questions = [
    "I have ambitious aims of making a difference.",
    "My leadership journey has progressed as I anticipated.",
    "I have spent fewer than 4 years in full time service or ministry.",
    "With hard work and determination, I have been able to persevere through the ministry challenges that have come my way."

];
let answers  = []
const categoryProgressBars = {
    "idealistic": document.querySelector('.idealistic'),
    "disillusioned": document.querySelector('.disillusioned'),
    "cynical": document.querySelector('.cynical'),
    "hopeful": document.querySelector('.hopeful'),
};
let currentCategoryIndex = 0;
let currentQuestionIndex = 0;

function updateProgressBars() {
    const categoryIndex = Math.floor(currentQuestionIndex / 5);
    const progressWithinCategory = ((currentQuestionIndex % 5) + 1) / 5 * 100;
    const currentCategory = categories[categoryIndex];

    categoryProgressBars[currentCategory].style.width = `${progressWithinCategory}%`;
}

function loadNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        updateQuestionNumber();
        document.getElementById('questionText').textContent = questions[currentQuestionIndex];
        document.querySelector('.slider').value = 0;
        updateProgressBars();
    }
}

function loadPrevQuestion(){
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        updateQuestionNumber();
        document.getElementById('questionText').textContent = questions[currentQuestionIndex];
        document.querySelector('.slider').value = answers[currentQuestionIndex];
        updateProgressBars();
    }
}

function updateQuestionNumber() {
    const questionNumberElement = document.getElementById('questionNumber');
    const questionNumber = currentQuestionIndex + 1; // Question number starts from 1
    const totalQuestions = questions.length;
    questionNumberElement.textContent = `${questionNumber}/${totalQuestions}`;
}

document.querySelector('.slider').onclick = function() {
    answers.push( document.querySelector('.slider').value)
    setTimeout(loadNextQuestion, 500);
}

document.querySelector('#prevBtn').onclick = loadPrevQuestion;
document.querySelector('#nextBtn').onclick = loadNextQuestion;
updateQuestionNumber();
document.getElementById('questionText').textContent = questions[0];
updateProgressBars();