const button = document.querySelector('#btn');
const par = document.querySelector('#par');

const quotes = [
    "Думайте и говорите обо мне что пожелаете. Где вы видели кошку, которую бы интересовало, что о ней говорят мыши?",
    "Если больной очень хочет жить, врачи бессильны.",
    "Под самым красивым хвостом павлина скрывается самая обычная куриная жопа. Так что меньше пафоса, господа.",
    "Всё приятное в этом мире либо вредно, либо аморально, либо ведет к ожирению.",
    "Жизнь слишком коротка, чтобы тратить ее на диеты, жадных мужчин и плохое настроение.",
    "Всю жизнь я страшно боюсь глупых. Особенно баб. Никогда не знаешь, как с ними разговаривать, не скатываясь на их уровень.",
    "Встречается такая любовь, что лучше ее сразу заменить расстрелом.",
    "Красивые люди тоже срут.",
    "Хрен, положенный на мнение окружающих, обеспечивает спокойную и счастливую жизнь.",
    "Есть люди, в которых живет Бог; есть люди, в которых живет Дьявол; а есть люди, в которых живут только глисты.",
    "Если ты ждешь, что кто-то примет тебя «таким, как ты есть», то ты просто ленивое мудло. Потому что, как правило, «такой, как есть» — зрелище печальное. Меняйся, скотина. Работай над собой. Или сдохни в одиночестве.",
    "Люди сами себе устраивают проблемы — никто не заставляет их выбирать скучные профессии, жениться не на тех людях или покупать неудобные туфли.",
    "Талант — это неуверенность в себе и мучительное недовольство собой и своими недостатками, чего я никогда не встречала у посредственности.",
    "Женщина, чтобы преуспеть в жизни, должна обладать двумя качествами. Она должна быть достаточно умна, чтобы нравиться глупым мужчинам, и достаточно глупа, чтобы нравиться мужчинам умным.",
    "Лучше быть хорошим человеком, «ругающимся матом», чем тихой, воспитанной тварью.",
    "Многие жалуются на свою внешность, и никто — на мозги.",
    "Умный знает как выпутаться из трудного положения, а мудрый в него никогда не попадёт.",
    "Женщины — это не слабый пол, слабый пол — это гнилые доски.",
    "И что только ни делает с человеком природа.",
    "Семья заменяет всё. Поэтому, прежде чем её завести, стоит подумать, что тебе важнее: всё или семья.",
    "Я ведь еще помню порядочных людей… Боже, какая я старая."
    
]

button.addEventListener("click", showQuotes);

function showQuotes() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    par.style.display = "block";
    par.textContent = randomQuote;
}