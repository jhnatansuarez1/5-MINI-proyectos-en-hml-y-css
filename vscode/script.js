function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    
    let greeting = '';
    if (hours < 12) {
        greeting = 'Buenos días';
    } else if (hours < 18) {
        greeting = 'Buenas tardes';
    } else {
        greeting = 'Buenas noches';
    }
    document.getElementById('greeting').textContent = greeting;
}

setInterval(updateClock, 1000);
updateClock();
