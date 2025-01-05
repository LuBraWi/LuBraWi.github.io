function showPopup() {
    document.getElementById("popup").style.display = "flex";
}

function checkPassword() {
    const passwordInput = document.getElementById("password");
    const correctPassword = "dein_passwort"; // Ersetze durch dein gewünschtes Passwort

    if (passwordInput.value === correctPassword) {
        document.getElementById("popup").style.display = "none";
        // Hier kannst du weitere Aktionen nach erfolgreicher Eingabe ausführen
    } else {
        alert("Falsches Passwort!");
    }
}

// Zeige das Popup beim Laden der Seite an (optional)
// showPopup();