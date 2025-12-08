// Exam State Management
let currentQuestion = 0;
let userAnswers = Array(questions.length).fill(null);
let flaggedQuestions = Array(questions.length).fill(false);
let timerInterval;
let timeRemaining = 3 * 60 * 60; // 3 hours in seconds
let examSubmitted = false;
let examStartTime = null;

// LocalStorage key (dynamic based on selected exam and section)
const selectedExam = sessionStorage.getItem('selectedExam') || '1';
const selectedSectionData = sessionStorage.getItem('selectedSection');
const selectedSection = selectedSectionData ? JSON.parse(selectedSectionData) : null;
const sectionKey = selectedSection ? `_${selectedSection.id}` : '';
const STORAGE_KEY = `cmt_exam_${selectedExam}${sectionKey}_progress`;

// Initialize exam
document.addEventListener('DOMContentLoaded', () => {
    // Try to load saved progress
    loadSavedProgress();

    loadQuestion(currentQuestion);
    startTimer();
    updateProgress();
    createQuestionNavigator();

    document.getElementById('prevBtn').addEventListener('click', () => navigateQuestion(-1));
    document.getElementById('nextBtn').addEventListener('click', () => navigateQuestion(1));
    document.getElementById('submitBtn').addEventListener('click', submitExam);
    document.getElementById('reviewBtn').addEventListener('click', reviewAnswers);
    document.getElementById('restartBtn').addEventListener('click', restartExam);
    document.getElementById('toggleNavigatorBtn').addEventListener('click', toggleNavigator);

    // Add clear progress button listener
    const clearBtn = document.getElementById('clearProgressBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearProgress);
    }
});

// Save progress to localStorage
function saveProgress() {
    if (examSubmitted) return; // Don't save after submission

    const progress = {
        currentQuestion,
        userAnswers,
        flaggedQuestions,
        timeRemaining,
        examStartTime,
        savedAt: new Date().toISOString()
    };

    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
        console.error('Failed to save progress:', e);
    }
}

// Load saved progress from localStorage
function loadSavedProgress() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (!saved) return;

        const progress = JSON.parse(saved);

        // Ask user if they want to resume
        const savedDate = new Date(progress.savedAt);
        const message = `Found saved exam from ${savedDate.toLocaleString()}.\n\nDo you want to resume where you left off?`;

        if (confirm(message)) {
            currentQuestion = progress.currentQuestion || 0;
            userAnswers = progress.userAnswers || Array(questions.length).fill(null);
            flaggedQuestions = progress.flaggedQuestions || Array(questions.length).fill(false);
            timeRemaining = progress.timeRemaining || (3 * 60 * 60);
            examStartTime = progress.examStartTime;

            // Show resume notification
            showNotification('Exam resumed! Continue from where you left off.', 'success');
        } else {
            // User chose not to resume, clear saved data
            clearProgress();
        }
    } catch (e) {
        console.error('Failed to load progress:', e);
        // If there's an error, clear corrupted data
        localStorage.removeItem(STORAGE_KEY);
    }
}

// Clear saved progress
function clearProgress() {
    if (confirm('Are you sure you want to clear your saved progress and start fresh?')) {
        localStorage.removeItem(STORAGE_KEY);
        showNotification('Progress cleared. Starting fresh!', 'info');
        // Reload page to restart
        location.reload();
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    // Auto-remove after 4 seconds
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Create Question Navigator
function createQuestionNavigator() {
    const navigator = document.getElementById('questionNavigator');
    const grid = document.createElement('div');
    grid.className = 'question-grid';

    for (let i = 0; i < questions.length; i++) {
        const btn = document.createElement('button');
        btn.className = 'question-nav-btn';
        btn.textContent = i + 1;
        btn.dataset.questionIndex = i;
        btn.addEventListener('click', () => jumpToQuestion(i));
        grid.appendChild(btn);
    }

    navigator.appendChild(grid);
    updateQuestionNavigator();
}

// Update Question Navigator status
function updateQuestionNavigator() {
    const buttons = document.querySelectorAll('.question-nav-btn');
    buttons.forEach((btn, index) => {
        btn.className = 'question-nav-btn';

        // Add status classes
        if (index === currentQuestion) {
            btn.classList.add('current');
        }
        if (userAnswers[index] !== null) {
            btn.classList.add('answered');
        }
        if (flaggedQuestions[index]) {
            btn.classList.add('flagged');
        }
    });
}

// Toggle Navigator visibility
function toggleNavigator() {
    const navigator = document.getElementById('questionNavigator');
    navigator.classList.toggle('hidden');
    const btn = document.getElementById('toggleNavigatorBtn');
    btn.textContent = navigator.classList.contains('hidden') ? 'Show Questions' : 'Hide Questions';
}

// Jump to specific question
function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion(currentQuestion);
    updateProgress();
    updateQuestionNavigator();
    saveProgress(); // Auto-save
    window.scrollTo(0, 0);
}

// Toggle flag on current question
function toggleFlag() {
    flaggedQuestions[currentQuestion] = !flaggedQuestions[currentQuestion];
    updateFlagButton();
    updateQuestionNavigator();
    updateProgress();
    saveProgress(); // Auto-save
}

// Update flag button appearance
function updateFlagButton() {
    const flagBtn = document.getElementById('flagBtn');
    if (flaggedQuestions[currentQuestion]) {
        flagBtn.classList.add('flagged');
        flagBtn.innerHTML = '🚩 Unflag';
    } else {
        flagBtn.classList.remove('flagged');
        flagBtn.innerHTML = '🏳️ Flag for Review';
    }
}

// Load question into the UI
function loadQuestion(index) {
    const container = document.getElementById('examContainer');
    const question = questions[index];

    const questionHTML = `
        <div class="question-container active" data-question="${index}">
            <div class="question-header">
                <div class="question-number">Question ${index + 1} of ${questions.length}</div>
                <button id="flagBtn" class="flag-btn" onclick="toggleFlag()">🏳️ Flag for Review</button>
            </div>
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
    updateFlagButton();
    updateQuestionNavigator();
}

// Select an answer
function selectAnswer(questionIndex, optionIndex) {
    userAnswers[questionIndex] = optionIndex;

    // Update UI
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    document.querySelector(`[data-option="${optionIndex}"]`).classList.add('selected');
    document.getElementById(`q${questionIndex}_opt${optionIndex}`).checked = true;

    updateProgress();
    updateQuestionNavigator();
    saveProgress(); // Auto-save
}

// Navigate between questions
function navigateQuestion(direction) {
    currentQuestion += direction;
    loadQuestion(currentQuestion);
    updateProgress();
    saveProgress(); // Auto-save
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
    const flagged = flaggedQuestions.filter(f => f).length;
    const percentage = (currentQuestion / questions.length) * 100;

    document.getElementById('progressBar').style.width = percentage + '%';
    document.getElementById('progressText').textContent =
        `Question ${currentQuestion + 1} of ${questions.length} (${answered} answered, ${flagged} flagged)`;
}

// Timer functionality
function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();

        // Auto-save every 30 seconds
        if (timeRemaining % 30 === 0) {
            saveProgress();
        }

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

    // Clear saved progress since exam is submitted
    localStorage.removeItem(STORAGE_KEY);

    // Calculate score
    let correct = 0;
    let incorrect = 0;
    questions.forEach((q, index) => {
        if (userAnswers[index] === q.correct) {
            correct++;
        } else if (userAnswers[index] !== null) {
            incorrect++;
        }
    });

    const percentage = ((correct / questions.length) * 100).toFixed(1);
    const passingScore = 70;
    const passed = percentage >= passingScore;

    // Show results
    const resultsHTML = `
        <div class="score ${passed ? 'passed' : 'failed'}">${percentage}%</div>
        <div class="pass-status ${passed ? 'passed' : 'failed'}">
            ${passed ? '✅ PASSED' : '❌ FAILED'}
        </div>
        <div class="score-details">
            <p><strong>Correct:</strong> ${correct} out of ${questions.length}</p>
            <p><strong>Incorrect:</strong> ${incorrect}</p>
            <p><strong>Unanswered:</strong> ${unanswered}</p>
            <p><strong>Passing Score:</strong> ${passingScore}%</p>
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
    const isCorrect = userAnswer === correctAnswer;
    const wasAnswered = userAnswer !== null;

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
            <div class="answer-feedback">
                ${isCorrect ?
                    '<p class="feedback correct">✓ Your answer is correct!</p>' :
                    wasAnswered ?
                    '<p class="feedback incorrect">✗ Your answer is incorrect</p>' :
                    '<p class="feedback unanswered">⚠ You did not answer this question</p>'
                }
                ${question.explanation ? `
                    <div class="explanation">
                        <h4>Explanation:</h4>
                        <p>${question.explanation}</p>
                    </div>
                ` : ''}
            </div>
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
    updateQuestionNavigator();
    window.scrollTo(0, 0);
}

// Restart exam
function restartExam() {
    if (confirm('Are you sure you want to restart the exam? All progress will be lost.')) {
        currentQuestion = 0;
        userAnswers = Array(questions.length).fill(null);
        flaggedQuestions = Array(questions.length).fill(false);
        timeRemaining = 3 * 60 * 60;
        examSubmitted = false;

        // Clear saved progress
        localStorage.removeItem(STORAGE_KEY);

        document.getElementById('resultsModal').classList.remove('show');
        loadQuestion(0);
        startTimer();
        updateProgress();
        updateQuestionNavigator();
    }
}
