setInterval(() => {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let zero = "0";
    if (hours <= 10) {
        hours = zero.concat(hours);
    } else if (hours >= 12) {
        hours -= 12;
    }
    if (minutes <= 10) {
        minutes = zero.concat(minutes);
    }
    if (seconds <= 10) {
        seconds = zero.concat(seconds);
    }

    time.innerHTML = `${hours}:${minutes}:${seconds}`;
}, 1000);
