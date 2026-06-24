const QUESTIONS = [
    { id: 1, text: "Какой знак запрещает движение?", options: ["Красный круг", "Синий круг", "Треугольник"], correct: 0, topic: "Знаки", explanation: "Запрещающие знаки имеют круглую форму с красной каймой. Знак 'Движение запрещено' — белый круг с красной окантовкой.", danger: "Игнорирование запрещающих знаков — одна из главных причин аварий на перекрёстках.", realSituation: "Представьте: вы подъезжаете к перекрёстку, видите знак 'Кирпич' (въезд запрещён). Если проигнорировать — выезд на встречную полосу и лобовое столкновение." },
    { id: 2, text: "Максимальная скорость в населённом пункте?", options: ["40 км/ч", "60 км/ч", "80 км/ч"], correct: 1, topic: "Скорость", explanation: "По ПДД, в населённых пунктах максимальная скорость — 60 км/ч, если нет других ограничений.", danger: "Превышение скорости в городе увеличивает тормозной путь с 15 до 40 метров! Риск наезда на пешеходов вырастает в 5 раз.", realSituation: "Во дворе или возле школы скорость 60 км/ч смертельно опасна — ребёнок может выбежать внезапно, тормозной путь 40 метров не позволит остановиться." },
    { id: 3, text: "Что означает сплошная линия разметки?", options: ["Обгон разрешён", "Обгон запрещён", "Остановка запрещена"], correct: 1, topic: "Разметка", explanation: "Сплошная линия разметки 1.1 разделяет потоки и запрещает её пересечение.", danger: "Пересечение сплошной линии — выезд на встречную полосу, лишение прав до 6 месяцев или штраф 5000 ₽.", realSituation: "На трассе с оживлённым движением пересечь сплошную = риск лобового удара на скорости 90 км/ч, остановочный путь более 60 метров." },
    { id: 4, text: "Можно ли обгонять на пешеходном переходе?", options: ["Да", "Нет", "Только если нет пешеходов"], correct: 1, topic: "Обгон", explanation: "Обгон на пешеходном переходе запрещён ПДД независимо от наличия пешеходов.", danger: "Обгон на переходе — риск сбить человека, который может появиться из-за обгоняемой машины. Штраф 5000 ₽ или лишение прав на 4-6 месяцев.", realSituation: "Вы обгоняете фуру на переходе. Из-за фуры выходит пешеход — вы не успеваете среагировать. Типичная схема ДТП с летальным исходом." },
    { id: 5, text: "Что должен сделать водитель, если пешеход вступил на переход?", options: ["Проехать быстрее", "Остановиться или уступить", "Сигналить"], correct: 1, topic: "Пешеходы", explanation: "Водитель обязан уступить дорогу пешеходу на нерегулируемом переходе.", danger: "Непредоставление преимущества пешеходу — штраф 1500-2500 рублей. При ДТП — уголовная ответственность.", realSituation: "Зимой в сумерках пешеход в тёмной одежде вступил на переход. Вы обязаны снизить скорость и убедиться, что пропускаете его. Не остановитесь — наезд неизбежен." },
    { id: 6, text: "Какой знак 'Уступи дорогу'?", options: ["Перевёрнутый треугольник", "Красный круг", "Синий квадрат"], correct: 0, topic: "Знаки", explanation: "Знак 2.4 'Уступи дорогу' — белый перевёрнутый треугольник с красной каймой.", danger: "Игнорирование этого знака — частая причина ДТП на второстепенных дорогах. Штраф 800 ₽, при ДТП — вина полностью на вас.", realSituation: "Вы выезжаете со второстепенной дороги под знак 'Уступи дорогу'. Главная дорога — поток машин 90 км/ч. Ваш тормозной путь 40 м, водителю на главной не остановиться." },
    { id: 7, text: "Максимальная скорость за городом на трассе?", options: ["70 км/ч", "90 км/ч", "110 км/ч"], correct: 1, topic: "Скорость", explanation: "На загородных трассах максимум 90 км/ч, если нет знаков, разрешающих 110-130 км/ч.", danger: "На высокой скорости автомобиль теряет устойчивость при резком манёвре. Остановочный путь на 110 км/ч — более 100 метров!", realSituation: "Летняя трасса, мокрый асфальт после дождя. На скорости 100 км/ч тормозной путь 80 м. Лось выбегает на дорогу — вы не успеете." },
    { id: 8, text: "Что означает прерывистая линия разметки?", options: ["Обгон запрещён", "Обгон разрешён", "Только поворот"], correct: 1, topic: "Разметка", explanation: "Прерывистая линия разрешает обгон, если нет других запретов.", danger: "Обгон разрешён, но убедитесь в безопасности манёвра и отсутствии знаков. Тормозной путь встречной машины может быть длиннее.", realSituation: "Вы начали обгон по прерывистой, но встречный автомобиль едет быстрее, чем казалось. У вас остаётся 3 секунды до столкновения — можно не успеть вернуться." },
    { id: 9, text: "Можно ли обгонять на мосту?", options: ["Да", "Нет", "Если нет разметки"], correct: 1, topic: "Обгон", explanation: "На мостах, путепроводах и под ними обгон запрещён ПДД.", danger: "Узкая проезжая часть моста — высокий риск лобового столкновения. Штраф 5000 ₽ или лишение прав.", realSituation: "Мост через реку, узкая полоса, отбойника нет. Обгон на мосту — при появлении встречной машины вы оба упадёте в воду." },
    { id: 10, text: "Кто должен уступить на нерегулируемом переходе?", options: ["Пешеход", "Водитель", "Тот, кто быстрее"], correct: 1, topic: "Пешеходы", explanation: "Водитель обязан пропустить пешеходов на нерегулируемом переходе.", danger: "Будьте внимательны: пешеход может выйти из-за стоящего транспорта. Зимой тормозной путь увеличивается в 2 раза.", realSituation: "Вы едете 50 км/ч, слева автобус остановился перед переходом. Пешеход выходит из-за автобуса — вы видите его за 2 секунды до наезда. Остановиться невозможно." },
    { id: 11, text: "Какой знак 'Главная дорога'?", options: ["Красный треугольник", "Жёлтый ромб", "Синий круг"], correct: 1, topic: "Знаки", explanation: "Знак 'Главная дорога' — жёлтый ромб в белой рамке.", danger: "На главной дороге тоже нужно снижать скорость на перекрёстках. Другой водитель может не уступить.", realSituation: "Вы на главной дороге, скорость 80 км/ч. Водитель на второстепенной не заметил знак и выезжает перед вами. Ваш тормозной путь 60 м — ДТП неизбежно." },
    { id: 12, text: "Скорость во дворе жилой зоны?", options: ["20 км/ч", "40 км/ч", "60 км/ч"], correct: 0, topic: "Скорость", explanation: "В жилых зонах и дворах максимальная скорость — 20 км/ч.", danger: "Во дворе всегда есть риск внезапного появления детей или животных. При 40 км/ч тормозной путь 20 м — ребёнок не успеет отбежать.", realSituation: "Выезжая из арки дома, скорость 30 км/ч. Мяч выкатывается на дорогу, за ним выбегает ребёнок. При 20 км/ч вы остановитесь за 6 м, при 30 — за 12 м, ребёнок погибнет." }
];

const TOPICS = ["Знаки", "Скорость", "Разметка", "Обгон", "Пешеходы"];

let currentQuestion = null;
let stats = {};
let answeredIds = [];
let answeredCount = 0;
let waitingForAnswer = false;
let selectedOption = null;

function findWeakestTopic() {
    let weakestTopic = null;
    let weakestScore = 1.0;
    
    for (const [topic, data] of Object.entries(stats)) {
        if (data.total >= 2) {
            const score = data.correct / data.total;
            if (score < weakestScore) {
                weakestScore = score;
                weakestTopic = topic;
            }
        }
    }
    
    return weakestTopic;
}

function getNextQuestion() {
    const weakestTopic = findWeakestTopic();
    if (weakestTopic) {
        const remaining = QUESTIONS.filter(q => q.topic === weakestTopic && !answeredIds.includes(q.id));
        if (remaining.length > 0) {
            return remaining[0];
        }
    }
    
    const remaining = QUESTIONS.filter(q => !answeredIds.includes(q.id));
    if (remaining.length > 0) {
        return remaining[0];
    }
    
    return null;
}

function updateStatsDisplay() {
    const container = document.getElementById('topics-stats');
    container.innerHTML = '';
    
    for (const topic of TOPICS) {
        const data = stats[topic] || { total: 0, correct: 0 };
        const percent = data.total === 0 ? 0 : (data.correct / data.total * 100);
        
        const div = document.createElement('div');
        div.className = 'topic-stat';
        div.innerHTML = `
            <div class="topic-name">${topic}</div>
            <div class="topic-score ${percent >= 60 ? 'good' : 'bad'}">
                ${Math.round(percent)}% (${data.correct}/${data.total})
            </div>
        `;
        container.appendChild(div);
    }
}

function displayQuestion(question) {
    document.getElementById('question-text').textContent = question.text;
    document.getElementById('topic-badge').textContent = question.topic;
    document.getElementById('question-counter').textContent = `Вопрос ${answeredCount + 1}`;
    
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    question.options.forEach((opt, idx) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.textContent = `${String.fromCharCode(65+idx)}. ${opt}`;
        div.onclick = () => selectOption(idx);
        optionsDiv.appendChild(div);
    });
    
    document.getElementById('quiz-area').style.display = 'block';
    document.getElementById('result-area').style.display = 'none';
    waitingForAnswer = false;
    selectedOption = null;
}

function selectOption(idx) {
    if (waitingForAnswer) return;
    selectedOption = idx;
    document.querySelectorAll('.option').forEach((opt, i) => {
        if (i === idx) opt.classList.add('selected');
        else opt.classList.remove('selected');
    });
}

function checkAnswer() {
    if (selectedOption === null) {
        alert('Выберите вариант ответа');
        return;
    }
    
    waitingForAnswer = true;
    
    const isCorrect = (selectedOption === currentQuestion.correct);
    const topic = currentQuestion.topic;
    
    if (!stats[topic]) {
        stats[topic] = { total: 0, correct: 0 };
    }
    stats[topic].total += 1;
    if (isCorrect) {
        stats[topic].correct += 1;
    }
    answeredIds.push(currentQuestion.id);
    answeredCount++;
    
    document.getElementById('quiz-area').style.display = 'none';
    const resultArea = document.getElementById('result-area');
    resultArea.style.display = 'block';
    
    const percentCorrect = Math.round(stats[topic].correct / stats[topic].total * 100);
    
    let weakAdvice = '';
    if (stats[topic].total >= 2 && (stats[topic].correct / stats[topic].total) < 0.6) {
        weakAdvice = `<div style="background:#2a1a3a; padding:12px; border-radius:10px; margin:10px 0;">
            <strong>🤖 Совет ИИ:</strong> У вас сложности с темой "${topic}". Рекомендуем пересмотреть этот раздел ПДД и пройти дополнительные вопросы по этой теме.
        </div>`;
    }
    
    resultArea.querySelector('.feedback').innerHTML = `
        <div style="margin-bottom:15px;">
            ${isCorrect ? '✅ <strong>Верно!</strong>' : '❌ <strong>Ошибка!</strong>'} 
            Правильный ответ: ${currentQuestion.options[currentQuestion.correct]}
        </div>
        <div style="background:#1a2a4a; padding:12px; border-radius:10px; margin:10px 0;">
            <strong>📖 Теория ПДД:</strong><br>
            ${currentQuestion.explanation}
        </div>
        <div style="background:#2a1a2a; padding:12px; border-radius:10px; margin:10px 0;">
            <strong>⚠️ Безопасность:</strong><br>
            ${currentQuestion.danger} 
        </div>
        <div style="background:#1a3a2a; padding:12px; border-radius:10px; margin:10px 0;">
            <strong>🚦 Реальная ситуация на дороге:</strong><br>
            ${currentQuestion.realSituation}
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
    
    if (!nextQ) {
        showFinal();
        return;
    }
    
    currentQuestion = nextQ;
    displayQuestion(currentQuestion);
}

function showFinal() {
    document.getElementById('quiz-area').style.display = 'none';
    document.getElementById('result-area').style.display = 'none';
    
    let totalQuestions = 0;
    let totalCorrect = 0;
    for (const [topic, data] of Object.entries(stats)) {
        totalQuestions += data.total;
        totalCorrect += data.correct;
    }
    const totalPercent = totalQuestions > 0 ? (totalCorrect / totalQuestions * 100) : 0;
    
    const weakTopics = [];
    const strongTopics = [];
    const mediumTopics = [];
    
    for (const [topic, data] of Object.entries(stats)) {
        if (data.total >= 2) {
            const percent = data.correct / data.total * 100;
            if (percent < 60) {
                weakTopics.push(topic);
            } else if (percent >= 80) {
                strongTopics.push(topic);
            } else {
                mediumTopics.push(topic);
            }
        }
    }
    
    let advice = '';
    
    if (weakTopics.length > 0) {
        advice = `🤖 <strong>ИИ-анализ ваших знаний:</strong><br><br>
                  📉 <strong>Слабые темы (нужно повторить):</strong> ${weakTopics.join(', ')}<br><br>
                  🔄 <strong>Рекомендация ИИ:</strong> Откройте разделы ПДД по этим темам, изучите знаки и разметку, запомните скоростные режимы. Особое внимание уделите реальным ситуациям — они чаще всего встречаются на экзамене и в жизни.<br><br>
                  📈 <strong>Общий результат:</strong> ${totalCorrect}/${totalQuestions} (${Math.round(totalPercent)}%)`;
    } else if (totalQuestions > 0) {
        advice = `🎉 <strong>Отлично! ИИ проанализировал ваши ответы:</strong><br><br>
                  ✅ <strong>Слабых мест не найдено</strong> — вы хорошо знаете все темы ПДД.<br>
                  📈 <strong>Общий результат:</strong> ${totalCorrect}/${totalQuestions} (${Math.round(totalPercent)}%)<br>
                  🚗 <strong>Вы готовы к экзамену в ГИБДД!</strong> Не забывайте повторять материал раз в месяц.`;
    } else {
        advice = `❓ Вы не ответили ни на один вопрос. Начните тренировку!`;
    }
    
    if (mediumTopics.length > 0 && weakTopics.length === 0) {
        advice += `<br><br>📚 <strong>Темы, которые стоит подтянуть:</strong> ${mediumTopics.join(', ')} — повторите их перед экзаменом.`;
    }
    
    if (strongTopics.length > 0) {
        advice += `<br><br>⭐ <strong>Сильные стороны:</strong> ${strongTopics.join(', ')} — вы отлично знаете эти разделы!`;
    }
    
    let details = '<hr><strong>📊 Полная статистика по темам:</strong><ul style="margin-top:10px;">';
    for (const [topic, data] of Object.entries(stats)) {
        const percent = data.total === 0 ? 0 : (data.correct / data.total * 100);
        let emoji = '🔴';
        if (percent >= 80) emoji = '🟢';
        else if (percent >= 60) emoji = '🟡';
        details += `<li>${emoji} <strong>${topic}</strong>: ${Math.round(percent)}% (${data.correct}/${data.total})</li>`;
    }
    details += '</ul>';
    
    if (weakTopics.length > 0) {
        details += `<hr><strong>📖 Что повторить перед экзаменом:</strong><ul>
            <li>Откройте официальный регламент ПДД по темам: ${weakTopics.join(', ')}</li>
            <li>Посмотрите разбор типичных ошибок на YouTube-каналах по ПДД</li>
            <li>Пройдите тренировку заново, чтобы закрепить материал</li>
        </ul>`;
    }
    
    const finalArea = document.getElementById('final-area');
    finalArea.style.display = 'block';
    document.getElementById('final-advice').innerHTML = advice + details;
}

function restart() {
    stats = {};
    answeredIds = [];
    answeredCount = 0;
    
    TOPICS.forEach(topic => {
        stats[topic] = { total: 0, correct: 0 };
    });
    
    document.getElementById('final-area').style.display = 'none';
    loadNextQuestion();
    updateStatsDisplay();
}

function init() {
    TOPICS.forEach(topic => {
        stats[topic] = { total: 0, correct: 0 };
    });
    
    loadNextQuestion();
    updateStatsDisplay();
}

document.getElementById('submit-btn').onclick = checkAnswer;
document.getElementById('next-btn').onclick = loadNextQuestion;
document.getElementById('restart-btn').onclick = restart;

init();