const cards = [
    { name: "Card 1 - 500LKR", pin: "1234-5678-9012" },
    { name: "Card 2 - 1000LKR", pin: "9876-5432-1098" }
];

function renderCards() {
    const list = document.getElementById('card-list');
    list.innerHTML = "";
    cards.forEach((card, index) => {
        const div = document.createElement('div');
        div.className = "card-item";
        div.innerHTML = `<div>${card.name}</div>`;
        div.onclick = () => selectCard(index);
        list.appendChild(div);
    });
}

function selectCard(index) {
    const refId = prompt("Enter Ref ID:");
    if (!refId) return;

    const dbRef = firebase.database().ref('unlock_codes/' + refId);
    dbRef.get().then((snapshot) => {
        if (snapshot.exists() && snapshot.val().status === 'unused') {
            document.getElementById('card-list').classList.add('hidden');
            document.getElementById('generatedCode').innerText = cards[index].pin;
            document.getElementById('card-display').classList.remove('hidden');
            dbRef.update({ status: 'used' });
            alert("Success!");
        } else {
            alert("Invalid or Used Code!");
        }
    });
}
