// Exam State Management
let currentQuestion = 0;
let userAnswers = Array(questions.length).fill(null);
let timerInterval;
let timeRemaining = 3 * 60 * 60; // 3 hours in seconds
let examSubmitted = false;

// Initialize exam
document.addEventListener('DOMContentLoaded', () => {
    loadQuestion(0);
    startTimer();
    updateProgress();

    document.getElementById('prevBtn').addEventListener('click', () => navigateQuestion(-1));
    document.getElementById('nextBtn').addEventListener('click', () => navigateQuestion(1));
    document.getElementById('submitBtn').addEventListener('click', submitExam);
    document.getElementById('reviewBtn').addEventListener('click', reviewAnswers);
    document.getElementById('restartBtn').addEventListener('click', restartExam);
});

// Load question into the UI
function loadQuestion(index) {
    const container = document.getElementById('examContainer');
    const question = questions[index];

    const questionHTML = `
        <div class="question-container active" data-question="${index}">
            <div class="question-number">Question ${index + 1} of ${questions.length}</div>
            <div class="question-text">${question.question}</div>
            ${question.image ? `<img src="${question.image}" alt="Question ${index + 1} diagram" class="question-image">` : ''}
            <div class="options">
                ${question.options.map((option, optIndex) => `
                    <div class="option ${userAnswers[index] === optIndex ? 'selected' : ''}" data-option="${optIndex}">
                        <input type="radio"
                               id="q${index}_opt${optIndex}"
                               name="question${index}"
                               value="${optIndex}"
                               ${userAnswers[index] === optIndex ? 'checked' : ''}>
                        <label for="q${index}_opt${optIndex}">${String.fromCharCode(97 + optIndex)}) ${option}</label>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    container.innerHTML = questionHTML;

    // Add event listeners to options
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', function() {
            const optionIndex = parseInt(this.dataset.option);
            selectAnswer(index, optionIndex);
        });
    });

    updateNavigation();
}

// Select an answer
function selectAnswer(questionIndex, optionIndex) {
    userAnswers[questionIndex] = optionIndex;

    // Update UI
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    document.querySelector(`[data-option="${optionIndex}"]`).classList.add('selected');
    document.getElementById(`q${questionIndex}_opt${optionIndex}`).checked = true;

    updateProgress();
}

// Navigate between questions
function navigateQuestion(direction) {
    currentQuestion += direction;
    loadQuestion(currentQuestion);
    updateProgress();
    window.scrollTo(0, 0);
}

// Update navigation buttons
function updateNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');

    prevBtn.disabled = currentQuestion === 0;

    if (currentQuestion === questions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    }
}

// Update progress bar
function updateProgress() {
    const answered = userAnswers.filter(a => a !== null).length;
    const percentage = (currentQuestion / questions.length) * 100;

    document.getElementById('progressBar').style.width = percentage + '%';
    document.getElementById('progressText').textContent =
        `Question ${currentQuestion + 1} of ${questions.length} (${answered} answered)`;
}

// Timer functionality
function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert('Time is up! The exam will now be submitted.');
            submitExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    const display = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('timer').textContent = `Time Remaining: ${display}`;

    // Change color when time is running low
    if (timeRemaining < 600) { // Less than 10 minutes
        document.getElementById('timer').style.color = '#f56565';
    }
}

// Submit exam
function submitExam() {
    const unanswered = userAnswers.filter(a => a === null).length;

    if (unanswered > 0) {
        const confirm = window.confirm(`You have ${unanswered} unanswered questions. Do you want to submit anyway?`);
        if (!confirm) return;
    }

    clearInterval(timerInterval);
    examSubmitted = true;

    // Calculate score
    let correct = 0;
    questions.forEach((q, index) => {
        if (userAnswers[index] === q.correct) {
            correct++;
        }
    });

    const percentage = ((correct / questions.length) * 100).toFixed(1);

    // Show results
    const resultsHTML = `
        <div class="score">${percentage}%</div>
        <div class="score-details">
            <p><strong>Correct:</strong> ${correct} out of ${questions.length}</p>
            <p><strong>Incorrect:</strong> ${questions.length - correct - unanswered}</p>
            <p><strong>Unanswered:</strong> ${unanswered}</p>
        </div>
    `;

    document.getElementById('resultsContent').innerHTML = resultsHTML;
    document.getElementById('resultsModal').classList.add('show');
}

// Review answers
function reviewAnswers() {
    document.getElementById('resultsModal').classList.remove('show');
    currentQuestion = 0;
    loadQuestionReview(0);
}

// Load question in review mode
function loadQuestionReview(index) {
    const container = document.getElementById('examContainer');
    const question = questions[index];
    const userAnswer = userAnswers[index];
    const correctAnswer = question.correct;

    const questionHTML = `
        <div class="question-container active" data-question="${index}">
            <div class="question-number">Question ${index + 1} of ${questions.length}</div>
            <div class="question-text">${question.question}</div>
            ${question.image ? `<img src="${question.image}" alt="Question ${index + 1} diagram" class="question-image">` : ''}
            <div class="options">
                ${question.options.map((option, optIndex) => {
                    let classes = 'option review-mode';
                    if (optIndex === correctAnswer) classes += ' correct';
                    if (optIndex === userAnswer && userAnswer !== correctAnswer) classes += ' incorrect';

                    return `
                        <div class="${classes}">
                            <input type="radio"
                                   id="q${index}_opt${optIndex}"
                                   name="question${index}"
                                   value="${optIndex}"
                                   ${userAnswer === optIndex ? 'checked' : ''}
                                   disabled>
                            <label for="q${index}_opt${optIndex}">${String.fromCharCode(97 + optIndex)}) ${option}</label>
                        </div>
                    `;
                }).join('')}
            </div>
            ${userAnswer === correctAnswer ?
                '<p style="color: #2f855a; margin-top: 20px; font-weight: bold;">✓ Your answer is correct!</p>' :
                userAnswer !== null ?
                '<p style="color: #c53030; margin-top: 20px; font-weight: bold;">✗ Your answer is incorrect</p>' :
                '<p style="color: #d69e2e; margin-top: 20px; font-weight: bold;">⚠ You did not answer this question</p>'
            }
        </div>
    `;

    container.innerHTML = questionHTML;

    // Update navigation for review mode
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === questions.length - 1;
    submitBtn.style.display = 'none';
    nextBtn.style.display = 'block';

    prevBtn.onclick = () => loadQuestionReview(index - 1);
    nextBtn.onclick = () => loadQuestionReview(index + 1);

    currentQuestion = index;
    updateProgress();
    window.scrollTo(0, 0);
}

// Restart exam
function restartExam() {
    if (confirm('Are you sure you want to restart the exam? All progress will be lost.')) {
        currentQuestion = 0;
        userAnswers = Array(questions.length).fill(null);
        timeRemaining = 3 * 60 * 60;
        examSubmitted = false;

        document.getElementById('resultsModal').classList.remove('show');
        loadQuestion(0);
        startTimer();
        updateProgress();
    }
}
