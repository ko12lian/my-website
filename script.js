document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("booking-form").addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let service = document.getElementById("service").value;
        let date = document.getElementById("date").value;
        let time = document.getElementById("time").value;

        let message = `📸 Новая бронь:\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n🛠 Услуга: ${service}\n📅 Дата: ${date}\n⏰ Время: ${time}`;

        let telegramBotToken = "7898205425:AAG1spCeLEpclrNaT2_MDIg4HbsyPC55jSM"; // Замените на ваш токен
        let chatId = "1967567121"; // Замените на ваш ID чата

        fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: chatId, text: message })
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert("✅ Бронирование успешно отправлено!");
                document.getElementById("booking-form").reset();
            } else {
                alert("❌ Ошибка отправки. Попробуйте снова.");
            }
        })
        .catch(error => {
            console.error("Ошибка отправки:", error);
            alert("❌ Ошибка соединения. Проверьте интернет.");
        });
    });
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("contact-name").value;
    let email = document.getElementById("contact-email").value;
    let message = document.getElementById("contact-message").value;

    let telegramMessage = `📩 Новое сообщение:\n\n👤 Имя: ${name}\n📧 Email: ${email}\n💬 Сообщение: ${message}`;

    let telegramBotToken = "7898205425:AAG1spCeLEpclrNaT2_MDIg4HbsyPC55jSM"; // Замени на свой токен бота
    let chatId = "1967567121"; // Замени на свой Telegram ID

    fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: telegramMessage })
    })
    .then(response => response.json())
    .then(data => {
        alert("✅ Сообщение отправлено!");
        document.getElementById("contact-form").reset();
    })
    .catch(error => console.error("Ошибка отправки:", error));
});

document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let service = document.getElementById("service").value;

    let telegramMessage = `📸 Новая заявка на съемку:\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n📅 Дата: ${date}\n⏰ Время: ${time}\n🎯 Услуга: ${service}`;

    let telegramBotToken = "7898205425:AAG1spCeLEpclrNaT2_MDIg4HbsyPC55jSM"; // Заменить на токен бота
    let chatId = "1967567121"; // Заменить на ID чата

    fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: telegramMessage })
    })
    .then(response => response.json())
    .then(data => {
        alert("✅ Заявка отправлена! Ожидайте подтверждения.");
        document.getElementById("booking-form").reset();
    })
    .catch(error => console.error("Ошибка отправки:", error));
});