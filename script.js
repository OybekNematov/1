function sendCode() {
    const phoneNumber = document.getElementById('phone-number').value;
    if (phoneNumber) {
        document.getElementById('phone-entry').style.display = 'none';
        document.getElementById('code-entry').style.display = 'block';
        document.getElementById('entered-number').textContent = phoneNumber;
        // Kod yuborish va qayta urinish taymeri
        startRetryCountdown();
    } else {
        alert('Telefon raqamini kiriting');
    }
}

function verifyCode() {
    const code = document.getElementById('verification-code').value;
    if (code) {
        // Kodni tasdiqlash logikasi
        alert('Kod tasdiqlandi');
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('product-section').style.display = 'block';
    } else {
        alert('Kodni kiriting');
    }
}

function startRetryCountdown() {
    let retryTime = 60;
    const retryTimeElement = document.getElementById('retry-time');
    const countdown = setInterval(() => {
        retryTime--;
        retryTimeElement.textContent = retryTime;
        if (retryTime <= 0) {
            clearInterval(countdown);
            // Qayta urinish logikasi
        }
    }, 1000);
}
       