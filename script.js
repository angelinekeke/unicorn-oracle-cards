const cardsData = [
    { id: 1, title: "光芒独角兽", keyword: "自信闪耀", reading: "你内心的光辉正在绽放，相信自己的力量，让你的光芒照亮前路。" },
    { id: 2, title: "梦幻独角兽", keyword: "追梦无畏", reading: "现在是追逐梦想的时刻，不要害怕去想象和创造，魔法就在相信中。" },
    { id: 3, title: "疗愈独角兽", keyword: "心灵修复", reading: "是时候好好照顾自己了，允许自己治愈过往的伤痛，重新开始。" },
    { id: 4, title: "勇气独角兽", keyword: "突破恐惧", reading: "面对你的恐惧，勇气就在你的心中，每一步都值得被庆祝。" },
    { id: 5, title: "智慧独角兽", keyword: "内在指引", reading: "相信你的直觉，你已经拥有解答问题的智慧，静心倾听内在之声。" },
    { id: 6, title: "爱心独角兽", keyword: "爱与连接", reading: "打开你的心扉，无条件的爱���等待着你分享和接收。" },
    { id: 7, title: "变革独角兽", keyword: "蜕变新生", reading: "变化即将来临，拥抱新的可能性，你正在经历美好的蜕变。" },
    { id: 8, title: "丰盛独角兽", keyword: "富足降临", reading: "你值得拥有丰盛，相信自己的价值，吸引更多美好进入生活。" },
    { id: 9, title: "创意独角兽", keyword: "灵感迸发", reading: "你的创意力量正在苏醒，表达你真实的自我，创造属于你的魔法。" },
    { id: 10, title: "保护独角兽", keyword: "安全庇护", reading: "你被守护着，放下担忧，相信一切都会被妥善照顾。" },
    { id: 11, title: "喜悦独角兽", keyword: "欢乐时刻", reading: "寻找生活中的美好，允许自己开心和放松，享受当下的快乐。" },
    { id: 12, title: "平衡独角兽", keyword: "和谐之道", reading: "寻求生活的平衡，工作与休息、给予与接收都需要和谐。" },
    { id: 13, title: "魔法独角兽", keyword: "奇迹显现", reading: "相信奇迹，不可能的事也可能发生，你拥有创造魔法的力量。" },
    { id: 14, title: "冒险独角兽", keyword: "探索未知", reading: "是时候冒险了，超越舒适圈，去发现新的可能和自我。" },
    { id: 15, title: "纯真独角兽", keyword: "返璞归真", reading: "回到你最纯真的状态，释放内心的孩童般的喜悦和好奇心。" },
    { id: 16, title: "力量独角兽", keyword: "内在强大", reading: "你比想象的更强大，相信自己的能力，你能做到一切想做的事。" },
    { id: 17, title: "连接独角兽", keyword: "灵性觉醒", reading: "你与宇宙的连接正在加强，相信更高的力量正引导着你。" },
    { id: 18, title: "宽恕独角兽", keyword: "释放过去", reading: "是时候原谅了，放下怨恨，宽恕自己和他人，迎接新的开始。" },
    { id: 19, title: "希望独角兽", keyword: "光明前景", reading: "即使现在很困难，希望就在眼前，更美好的日子正在等你。" },
    { id: 20, title: "感恩独角兽", keyword: "感谢祝福", reading: "感谢生活中的一切，无论大小，感恩能吸引更多美好进入。" },
    { id: 21, title: "成长独角兽", keyword: "进化之路", reading: "你正在成长和进化，每次的挑战都是学习的机会。" },
    { id: 22, title: "神奇独角兽", keyword: "超越极限", reading: "超越你认为的限制，你的潜力远超想象，去创造不可思议的事。" },
    { id: 23, title: "命运独角兽", keyword: "顺势而为", reading: "相信命运的安排，顺应自然流动，最好的事物会在对的时刻出现。" },
    { id: 24, title: "永恒独角兽", keyword: "无限可能", reading: "你是永恒的光，过去、现在、未来都充满无限可能。" }
];

let currentCard = null;
let isFlipped = false;

const oracleCard = document.getElementById('oracleCard');
const drawBtn = document.getElementById('drawBtn');
const resetBtn = document.getElementById('resetBtn');
const showAllBtn = document.getElementById('showAllBtn');
const cardNumber = document.getElementById('cardNumber');
const cardTitle = document.getElementById('cardTitle');
const cardKeyword = document.getElementById('cardKeyword');
const cardReading = document.getElementById('cardReading');
const allCardsSection = document.getElementById('allCardsSection');
const cardsGrid = document.getElementById('cardsGrid');

// 抽卡功能
drawBtn.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * cardsData.length);
    currentCard = cardsData[randomIndex];
    displayCard();
});

// 显示卡片
function displayCard() {
    cardNumber.textContent = `#${currentCard.id}`;
    cardTitle.textContent = currentCard.title;
    cardKeyword.textContent = currentCard.keyword;
    cardReading.textContent = currentCard.reading;
    
    if (!oracleCard.classList.contains('flipped')) {
        oracleCard.classList.add('flipped');
        isFlipped = true;
    }
}

// 重置功能
resetBtn.addEventListener('click', function() {
    oracleCard.classList.remove('flipped');
    isFlipped = false;
    currentCard = null;
});

// 点击卡片翻转
oracleCard.addEventListener('click', function() {
    if (currentCard) {
        oracleCard.classList.toggle('flipped');
        isFlipped = !isFlipped;
    }
});

// 显示所有卡牌
showAllBtn.addEventListener('click', function() {
    renderAllCards();
    allCardsSection.style.display = 'block';
});

// 渲染所有卡牌
function renderAllCards() {
    cardsGrid.innerHTML = '';
    cardsData.forEach(card => {
        const cardEl = document.createElement('div');
        cardEl.className = 'small-card';
        cardEl.innerHTML = `
            <h3>${card.title}</h3>
            <p class="small-keyword"><strong>关键词：</strong>${card.keyword}</p>
            <p>${card.reading}</p>
        `;
        cardsGrid.appendChild(cardEl);
    });
}