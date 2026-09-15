const QUESTIONS = [
    { id: 1, text: "Какой знак запрещает движение?", options: ["Красный круг", "Синий круг", "Треугольник"], correct: 0, topic: "Знаки", difficulty: 1, explanation: "Запрещающие знаки имеют круглую форму с красной каймой.", danger: "Проезд под знак «Движение запрещено» — 500 ₽ (ст. 12.16 ч. 1 КоАП РФ). Знак «Кирпич» (3.1) — также 500 ₽, но при выезде на встречную — 5 000 ₽ или лишение прав 4–6 мес. (ст. 12.15 ч. 4).", realSituation: "Вы подъезжаете к перекрёстку, видите знак 'Кирпич'. Игнорирование = выезд на встречную полосу и лобовое столкновение.", practice: "Найдите на карте города 3 знака 'Движение запрещено' и объясните, почему они там установлены." },
    { id: 2, text: "Максимальная скорость в населённом пункте?", options: ["40 км/ч", "60 км/ч", "80 км/ч"], correct: 1, topic: "Скорость", difficulty: 1, explanation: "По ПДД, в населённых пунктах максимальная скорость — 60 км/ч.", danger: "Превышение на 20–40 км/ч — 500 ₽; на 40–60 км/ч — 1 000–1 500 ₽; на 60–80 км/ч — 2 000–2 500 ₽; свыше 80 км/ч — 5 000 ₽ (ст. 12.9 КоАП РФ). Повторное превышение свыше 40 км/ч — 2 500–5 000 ₽.", realSituation: "Возле школы при 60 км/ч тормозной путь 40 м — ребёнок не успеет отбежать.", practice: "Замерьте свой тормозной путь на площадке при 20 и 40 км/ч — почувствуйте разницу." },
    { id: 3, text: "Что означает сплошная линия разметки?", options: ["Обгон разрешён", "Обгон запрещён", "Остановка запрещена"], correct: 1, topic: "Разметка", difficulty: 2, explanation: "Сплошная линия разметки 1.1 разделяет потоки и запрещает пересечение.", danger: "Пересечение сплошной с выездом на встречную — 5 000 ₽ или лишение прав 4–6 мес. (ст. 12.15 ч. 4). Повторно — лишение на 1 год (или 5 000 ₽ с камеры).", realSituation: "На трассе пересечение сплошной = риск лобового удара на 90 км/ч.", practice: "Составьте маршрут по городу, где часто встречается сплошная линия, и разберите манёвры." },
    { id: 4, text: "Можно ли обгонять на пешеходном переходе?", options: ["Да", "Нет", "Только если нет пешеходов"], correct: 1, topic: "Обгон", difficulty: 2, explanation: "Обгон на пешеходном переходе запрещён ПДД независимо от наличия пешеходов.", danger: "Обгон на «зебре» = выезд на встречную — 5 000 ₽ или лишение прав 4–6 мес. (ст. 12.15 ч. 4). Повторно — лишение на 1 год (с камеры — 5 000 ₽).", realSituation: "Обгоняя фуру на переходе, вы не видите пешехода. Типичная схема ДТП с летальным исходом.", practice: "Проанализируйте 5 видео с регистраторов на тему обгона на переходе." },
    { id: 5, text: "Что должен сделать водитель, если пешеход вступил на переход?", options: ["Проехать быстрее", "Остановиться или уступить", "Сигналить"], correct: 1, topic: "Пешеходы", difficulty: 1, explanation: "Водитель обязан уступить дорогу пешеходу на нерегулируемом переходе.", danger: "Неуступка пешеходу — 1 500–2 500 ₽ (ст. 12.18 КоАП РФ). При наезде — уголовная ответственность по ст. 264 УК РФ.", realSituation: "Зимой в сумерках пешеход в тёмной одежде на переходе. Не остановитесь — наезд неизбежен.", practice: "Понаблюдайте 10 минут у перехода: сколько водителей пропускают пешеходов?" },
    { id: 6, text: "Какой знак 'Уступи дорогу'?", options: ["Перевёрнутый треугольник", "Красный круг", "Синий квадрат"], correct: 0, topic: "Знаки", difficulty: 1, explanation: "Знак 2.4 — белый перевёрнутый треугольник с красной каймой.", danger: "Неуступка дороги транспортному средству с приоритетом — 1 000 ₽ (ст. 12.13 ч. 2 КоАП РФ). При ДТП — вина полностью на нарушителе.", realSituation: "Выезд со второстепенной под знак. Поток на главной 90 км/ч — водителю не остановиться.", practice: "Найдите в своём районе 3 таких знака и разберите, кто имеет преимущество." },
    { id: 7, text: "Максимальная скорость за городом на трассе?", options: ["70 км/ч", "90 км/ч", "110 км/ч"], correct: 1, topic: "Скорость", difficulty: 2, explanation: "На загородных трассах максимум 90 км/ч, если нет знаков 110-130.", danger: "Те же шкалы, что и в городе: превышение на 20–40 км/ч — 500 ₽, на 40–60 — 1 000–1 500 ₽, свыше 80 — 5 000 ₽ (ст. 12.9). На трассах со знаком 110–130 пороги считаются от этих лимитов.", realSituation: "Мокрый асфальт, лось выбегает на дорогу — при 100 км/ч вы не успеете.", practice: "Рассчитайте тормозной путь для 60, 90 и 110 км/ч при разных погодных условиях." },
    { id: 8, text: "Что означает прерывистая линия разметки?", options: ["Обгон запрещён", "Обгон разрешён", "Только поворот"], correct: 1, topic: "Разметка", difficulty: 1, explanation: "Прерывистая линия разрешает обгон, если нет других запретов.", danger: "Сама прерывистая не запрещает манёвр. Но если обгон создал помеху или аварийную ситуацию — 500 ₽ (ст. 12.14 ч. 1). При ДТП — гражданская и уголовная ответственность.", realSituation: "Начали обгон по прерывистой, но встречный автомобиль едет быстрее — 3 секунды до столкновения.", practice: "Пройдите тест на время реакции на онлайн-тренажёрах для водителей." },
    { id: 9, text: "Можно ли обгонять на мосту?", options: ["Да", "Нет", "Если нет разметки"], correct: 1, topic: "Обгон", difficulty: 2, explanation: "На мостах, путепроводах и под ними обгон запрещён ПДД.", danger: "Обгон на мосту = выезд на встречную в запрещённом месте — 5 000 ₽ или лишение прав 4–6 мес. (ст. 12.15 ч. 4). Повторно — лишение на 1 год.", realSituation: "Узкий мост без отбойника — при появлении встречной машины оба упадёте в воду.", practice: "Изучите схему типичных ДТП на мостах вашего региона." },
    { id: 10, text: "Кто должен уступить на нерегулируемом переходе?", options: ["Пешеход", "Водитель", "Тот, кто быстрее"], correct: 1, topic: "Пешеходы", difficulty: 1, explanation: "Водитель обязан пропустить пешеходов на нерегулируемом переходе.", danger: "Неуступка пешеходу — 1 500–2 500 ₽ (ст. 12.18). При наезде — ст. 264 УК РФ: от штрафа до лишения свободы до 3 лет (если погиб один человек), до 7 лет (если погибли двое и более).", realSituation: "Автобус остановился перед переходом, пешеход выходит из-за него — видите его за 2 секунды до наезда.", practice: "Проведите эксперимент: сколько метров нужно, чтобы остановиться при 50 км/ч зимой?" },
    { id: 11, text: "Какой знак 'Главная дорога'?", options: ["Красный треугольник", "Жёлтый ромб", "Синий круг"], correct: 1, topic: "Знаки", difficulty: 2, explanation: "Знак 'Главная дорога' — жёлтый ромб в белой рамке.", danger: "Неуступка на перекрёстке тому, кто на главной — 1 000 ₽ (ст. 12.13 ч. 2). При ДТП — вина на нарушителе, возможен регресс от страховой.", realSituation: "Вы на главной 80 км/ч, водитель на второстепенной не уступил — ваш тормозной путь 60 м.", practice: "Разберите 5 перекрёстков своего города: где главная, где второстепенная?" },
    { id: 12, text: "Скорость во дворе жилой зоны?", options: ["20 км/ч", "40 км/ч", "60 км/ч"], correct: 0, topic: "Скорость", difficulty: 1, explanation: "В жилых зонах и дворах максимальная скорость — 20 км/ч.", danger: "Нарушение правил движения в жилой зоне — 1 500 ₽ (ст. 12.28 КоАП РФ). Превышение скорости сверх того — по шкале ст. 12.9. При наезде на пешехода — уголовная ответственность.", realSituation: "Из арки выкатывается мяч, за ним ребёнок. При 20 км/ч — остановитесь за 6 м, при 30 — за 12 м.", practice: "Пройдите по своему двору и определите опасные места (арки, детские площадки, парковки)." }
];
const TOPICS = ["Знаки", "Скорость", "Разметка", "Обгон", "Пешеходы"];
const TIME_PER_QUESTION = 30;
const PRACTICE_MODE_COUNT = 5;

let currentQuestion = null;
let stats = {};
let answeredIds = [];
let answeredCount = 0;
let waitingForAnswer = false;
let selectedOption = null;
let streak = 0;
let bestStreak = 0;
let timerInterval = null;
let timeLeft = TIME_PER_QUESTION;
let practiceMode = false;
let mistakes = [];

const $ = (id) => document.getElementById(id);

function initStats() {
    stats = {};
    TOPICS.forEach(t => stats[t] = { total: 0, correct: 0 });
}

function findWeakestTopic() {
    let weakest = null;
    let minScore = 1.0;
    for (const [topic, data] of Object.entries(stats)) {
        if (data.total >= 2) {
            const score = data.correct / data.total;
            if (score < minScore) {
                minScore = score;
                weakest = topic;
            }
        }
    }
    return weakest;
}

function getNextQuestion() {
    const pool = practiceMode ? QUESTIONS.filter(q => mistakes.some(m => m.id === q.id)) : QUESTIONS;
    const weakTopic = findWeakestTopic();
    if (weakTopic) {
        const filtered = pool.filter(q => q.topic === weakTopic && !answeredIds.includes(q.id));
        if (filtered.length) return filtered.sort((a,b) => a.difficulty - b.difficulty)[0];
    }
    const remaining = pool.filter(q => !answeredIds.includes(q.id));
    if (remaining.length) return remaining.sort((a,b) => a.difficulty - b.difficulty)[0];
    return null;
}

function updateStatsDisplay() {
    const container = $('topics-stats');
    container.innerHTML = TOPICS.map(topic => {
        const d = stats[topic];
        const percent = d.total === 0 ? 0 : Math.round(d.correct / d.total * 100);
        return `<div class="topic-stat">
            <div class="topic-name">${topic}</div>
            <div class="topic-score ${percent >= 60 ? 'good' : 'bad'}">${percent}% (${d.correct}/${d.total})</div>
        </div>`;
    }).join('');
}

function updateProgress() {
    const total = practiceMode ? mistakes.length : QUESTIONS.length;
    const percent = total === 0 ? 0 : Math.round(answeredCount / total * 100);
    $('progress-bar').style.width = percent + '%';
    $('progress-text').textContent = `Прогресс: ${percent}% (${answeredCount}/${total})`;
}

function updateStreak() {
    const badge = $('streak-badge');
    if (streak >= 2) {
        badge.style.display = 'inline-block';
        badge.textContent = `🔥 ${streak}`;
    } else {
        badge.style.display = 'none';
    }
}

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = TIME_PER_QUESTION;
    $('timer-container').style.display = 'block';
    updateTimerBar();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerBar();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            autoSubmit();
        }
    }, 1000);
}

function updateTimerBar() {
    const bar = $('timer-bar');
    const text = $('timer-text');
    const percent = (timeLeft / TIME_PER_QUESTION) * 100;
    bar.style.width = percent + '%';
    text.textContent = timeLeft + 'с';
    bar.classList.remove('warning', 'danger');
    if (timeLeft <= 5) bar.classList.add('danger');
    else if (timeLeft <= 10) bar.classList.add('warning');
}

function stopTimer() {
    clearInterval(timerInterval);
    $('timer-container').style.display = 'none';
}

function autoSubmit() {
    if (selectedOption === null) selectedOption = -1;
    checkAnswer();
}

function displayQuestion(question) {
    $('question-text').textContent = question.text;
    $('topic-badge').textContent = question.topic;
    $('question-counter').textContent = `Вопрос ${answeredCount + 1}${practiceMode ? ' (работа над ошибками)' : ''}`;
    const optionsDiv = $('options');
    optionsDiv.innerHTML = '';
    question.options.forEach((opt, idx) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.textContent = `${String.fromCharCode(65+idx)}. ${opt}`;
        div.onclick = () => selectOption(idx);
        optionsDiv.appendChild(div);
    });
    $('quiz-area').style.display = 'block';
    $('result-area').style.display = 'none';
    waitingForAnswer = false;
    selectedOption = null;
    startTimer();
}

function selectOption(idx) {
    if (waitingForAnswer) return;
    selectedOption = idx;
    document.querySelectorAll('.option').forEach((opt, i) => {
        opt.classList.toggle('selected', i === idx);
    });
}

function checkAnswer() {
    if (selectedOption === null) {
        alert('Выберите вариант ответа');
        return;
    }
    waitingForAnswer = true;
    stopTimer();
    const isCorrect = selectedOption === currentQuestion.correct;
    const topic = currentQuestion.topic;

    stats[topic].total++;
    if (isCorrect) {
        stats[topic].correct++;
        streak++;
        bestStreak = Math.max(bestStreak, streak);
    } else {
        streak = 0;
        if (!mistakes.some(m => m.id === currentQuestion.id)) mistakes.push(currentQuestion);
    }
    answeredIds.push(currentQuestion.id);
    answeredCount++;
    updateStreak();
    updateProgress();

    $('quiz-area').style.display = 'none';
    const resultArea = $('result-area');
    resultArea.style.display = 'block';
    const percentCorrect = Math.round(stats[topic].correct / stats[topic].total * 100);

    let weakAdvice = '';
    if (stats[topic].total >= 2 && stats[topic].correct / stats[topic].total < 0.6) {
        weakAdvice = `<div style="background:#2a1a3a; padding:12px; border-radius:10px; margin:10px 0;">
            <strong>🤖 Совет ИИ:</strong> У вас сложности с темой "${topic}". Рекомендуем повторить этот раздел ПДД.
        </div>`;
    }

    resultArea.querySelector('.feedback').innerHTML = `
        <div style="margin-bottom:15px;">
            ${isCorrect ? '✅ <strong>Верно!</strong>' : '❌ <strong>Ошибка!</strong>'}
            ${selectedOption === -1 ? '<em>(время истекло)</em>' : ''}
            Правильный ответ: <strong>${currentQuestion.options[currentQuestion.correct]}</strong>
        </div>
        <div style="background:#1a2a4a; padding:12px; border-radius:10px; margin:10px 0;">
            <strong>📖 Теория ПДД:</strong><br>${currentQuestion.explanation}
        </div>
        <div style="background:#2a1a2a; padding:12px; border-radius:10px; margin:10px 0;">
            <strong>⚠️ Мера наказания:</strong><br>${currentQuestion.danger}
        </div>
        <div style="background:#1a3a2a; padding:12px; border-radius:10px; margin:10px 0;">
            <strong>🚦 Реальная ситуация:</strong><br>${currentQuestion.realSituation}
        </div>
        <div style="background:#1a2a3a; padding:12px; border-radius:10px; margin:10px 0;">
            <strong>🎯 Практическое задание:</strong><br>${currentQuestion.practice}
        </div>
        ${weakAdvice}
        <div style="margin-top:10px;">
            📊 Статистика по теме "${topic}": ${stats[topic].correct}/${stats[topic].total} (${percentCorrect}%)
        </div>
    `;
    updateStatsDisplay();
}

function loadNextQuestion() {
    const nextQ = getNextQuestion();
    if (!nextQ) { showFinal(); return; }
    currentQuestion = nextQ;
    displayQuestion(currentQuestion);
}

function showFinal() {
    stopTimer();
    $('quiz-area').style.display = 'none';
    $('result-area').style.display = 'none';

    let totalQ = 0, totalC = 0;
    for (const d of Object.values(stats)) { totalQ += d.total; totalC += d.correct; }
    const totalPercent = totalQ ? Math.round(totalC / totalQ * 100) : 0;

    const weak = [], medium = [], strong = [];
    for (const [topic, d] of Object.entries(stats)) {
        if (d.total >= 2) {
            const p = d.correct / d.total * 100;
            if (p < 60) weak.push(topic);
            else if (p >= 80) strong.push(topic);
            else medium.push(topic);
        }
    }

    let advice = '';
    if (weak.length) {
        advice = `🤖 <strong>ИИ-анализ:</strong><br><br>
            📉 <strong>Слабые темы:</strong> ${weak.join(', ')}<br><br>
            📈 <strong>Общий результат:</strong> ${totalC}/${totalQ} (${totalPercent}%)<br>
            🔥 <strong>Лучшая серия:</strong> ${bestStreak} правильных подряд`;
    } else if (totalQ > 0) {
        advice = `🎉 <strong>Отлично!</strong> Слабых мест не найдено.<br>
            📈 <strong>Результат:</strong> ${totalC}/${totalQ} (${totalPercent}%)<br>
            🔥 <strong>Лучшая серия:</strong> ${bestStreak}`;
    } else {
        advice = 'Вы не ответили ни на один вопрос.';
    }
    if (medium.length) advice += `<br><br>📚 <strong>Подтянуть:</strong> ${medium.join(', ')}`;
    if (strong.length) advice += `<br><br>⭐ <strong>Сильные стороны:</strong> ${strong.join(', ')}`;

    let details = '<hr><strong>📊 Полная статистика:</strong><ul style="margin-top:10px;">';
    for (const [topic, d] of Object.entries(stats)) {
        const p = d.total ? Math.round(d.correct / d.total * 100) : 0;
        const emoji = p >= 80 ? '🟢' : p >= 60 ? '🟡' : '🔴';
        details += `<li>${emoji} <strong>${topic}</strong>: ${p}% (${d.correct}/${d.total})</li>`;
    }
    details += '</ul>';

    if (mistakes.length) {
        details += `<hr><strong>❌ Работа над ошибками (${mistakes.length}):</strong><ul>`;
        mistakes.forEach(m => {
            details += `<li><strong>${m.topic}:</strong> ${m.text}<br><em>→ ${m.options[m.correct]}</em></li>`;
        });
        details += '</ul>';
    }

    if (weak.length) {
        details += `<hr><strong>📖 Что повторить:</strong><ul>
            <li>Регламент ПДД: ${weak.join(', ')}</li>
            <li>Пройти тренировку заново</li>
        </ul>`;
    }

    const finalArea = $('final-area');
    finalArea.style.display = 'block';
    $('final-advice').innerHTML = advice + details;

    const oldPractice = document.getElementById('practice-btn');
    if (oldPractice) oldPractice.remove();
    if (mistakes.length >= 2) {
        const btn = document.createElement('button');
        btn.id = 'practice-btn';
        btn.className = 'btn-export';
        btn.style.marginTop = '10px';
        btn.textContent = `🎯 Работа над ошибками (${Math.min(mistakes.length, PRACTICE_MODE_COUNT)})`;
        btn.onclick = startPracticeMode;
        finalArea.querySelector('.final-buttons').prepend(btn);
    }
}

function startPracticeMode() {
    practiceMode = true;
    answeredIds = [];
    answeredCount = 0;
    const startMistakes = mistakes.slice();
    mistakes = [];
    startMistakes.forEach(m => { if (!mistakes.some(x => x.id === m.id)) mistakes.push(m); });
    $('final-area').style.display = 'none';
    updateProgress();
    loadNextQuestion();
}

function exportResults() {
    const totalQ = Object.values(stats).reduce((s, d) => s + d.total, 0);
    const totalC = Object.values(stats).reduce((s, d) => s + d.correct, 0);
    const report = {
        date: new Date().toISOString(),
        totalQuestions: totalQ,
        totalCorrect: totalC,
        percent: totalQ ? Math.round(totalC / totalQ * 100) : 0,
        bestStreak,
        stats,
        weakTopics: Object.entries(stats).filter(([_, d]) => d.total >= 2 && d.correct / d.total < 0.6).map(([t]) => t),
        mistakes: mistakes.map(m => ({ topic: m.topic, question: m.text, correct: m.options[m.correct] }))
    };
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `pdd_report_${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function restart() {
    practiceMode = false;
    initStats();
    answeredIds = [];
    answeredCount = 0;
    streak = 0;
    bestStreak = 0;
    mistakes = [];
    updateStreak();
    updateProgress();
    $('final-area').style.display = 'none';
    loadNextQuestion();
    updateStatsDisplay();
}

function resetStats() {
    if (confirm('Сбросить всю статистику?')) restart();
}

function toggleTheme() {
    document.body.classList.toggle('light');
    $('theme-toggle').textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
}

function init() {
    initStats();
    loadNextQuestion();
    updateStatsDisplay();
    updateProgress();
    $('submit-btn').onclick = checkAnswer;
    $('next-btn').onclick = loadNextQuestion;
    $('restart-btn').onclick = restart;
    $('reset-stats-btn').onclick = resetStats;
    $('export-btn').onclick = exportResults;
    $('theme-toggle').onclick = toggleTheme;
}

init();