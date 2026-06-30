const cards = [
    { name: "500 LKR Card" },
    { name: "1000 LKR Card" }
];

function renderCards() {
    const list = document.getElementById('card-list');
    cards.forEach((card, index) => {
        const div = document.createElement('div');
        div.className = "card-box";
        div.innerHTML = `<strong>${card.name}</strong>`;
        div.onclick = () => selectCard(index);
        list.appendChild(div);
    });
}

function selectCard(index) {
    const custName = prompt("Enter your name:");
    if (!custName) return;

    document.body.innerHTML = `<div class="glass"><h2>Generating your code...</h2></div>`;

    emailjs.send("service_ky2ympa", "template_5sac14q", {
        name: custName,
        card_name: cards[index].name
    }, "HahSYzYSEJF5oRsnt").then(() => {
        document.body.innerHTML = `
            <div class="glass">
                <h2>Success!</h2>
                <p>Request sent to owner.</p>
                <h3 style="color:yellow;">Please contact the owner for the payment to receive your code.</h3>
                <p>WhatsApp: <strong>0772915479</strong></p>
                <button class="btn" onclick="location.reload()">Back</button>
            </div>`;
    }).catch(() => {
        alert("Error sending request!");
        location.reload();
    });
}
