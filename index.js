let i,
    c = document.getElementById("outter");

setInterval(() => {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let zero = "0";
    if (hours <= 9) {
        hours = zero.concat(hours);
    } else if (hours >= 12) {
        hours -= 12;
        if (hours <= 9) {
            hours = zero.concat(hours);
        }
    }
    if (minutes <= 9) {
        minutes = zero.concat(minutes);
    }
    if (seconds <= 9) {
        seconds = zero.concat(seconds);
    }
    time.innerHTML = `${hours}:${minutes}:${seconds}`;

    // Coloc counter

    i = (seconds / 60) * 100;
    let string = `conic-gradient(#ff9f0a ${i}%, black 0%)`;
    c.style.backgroundImage = string;
    if (i > 100) {
        i = 0;
    }
}, 1000);
