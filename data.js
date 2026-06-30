const cards = [
    { name: "Card 1 - 500LKR", pin: "1234-5678-9012" },
    { name: "Card 2 - 1000LKR", pin: "9876-5432-1098" }
];

function renderCards() {
    const list = document.getElementById('card-list');
    cards.forEach((card, index) => {
        const btn = document.createElement('button');
        btn.className = "google-btn";
        btn.innerText = card.name;
        btn.onclick = () => selectCard(index);
        list.appendChild(btn);
    });
}

function selectCard(index) {
    const refId = prompt("ඔබ මුදල් ගෙවූ Ref ID එක ඇතුළත් කරන්න:");
    
    if (refId) {
        // Firebase එකෙන් Ref ID එක චෙක් කරනවා
        const dbRef = firebase.database().ref('unlock_codes/' + refId);
        
        dbRef.get().then((snapshot) => {
            if (snapshot.exists() && snapshot.val().status === 'unused') {
                document.getElementById('card-list').classList.add('hidden');
                document.getElementById('card-display').classList.remove('hidden');
                document.getElementById('generatedCode').innerText = cards[index].pin;
                
                // පාවිච්චි කළා කියලා මාර්ක් කරනවා
                dbRef.update({ status: 'used' });
                alert("සාර්ථකයි! කාඩ් එක Unlock වුණා.");
            } else {
                alert("වැරදි Ref ID එකක් හෝ දැනටමත් පාවිච්චි කරලා!");
            }
        });
    }
}
