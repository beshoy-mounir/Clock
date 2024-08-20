let i,
    hours,
    minutes,
    seconds,
    zero,
    dayAndNight,
    c = document.getElementById("outter");

setInterval(() => {
    hours = new Date().getHours();
    minutes = new Date().getMinutes();
    seconds = new Date().getSeconds();
    zero = "0";
    if (hours <= 9) {
        dayAndNight = "Am";
        hours = zero.concat(hours);
    } else if (hours >= 12) {
        dayAndNight = "Bm";
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
    time.innerHTML = `${hours}:${minutes}:${seconds} ${dayAndNight}`;

    // Coloc counter

    i = (seconds / 60) * 100;
    let string = `conic-gradient(#ff9f0a ${i}%, black 0%)`;
    c.style.backgroundImage = string;
    if (i > 100) {
        i = 0;
    }
}, 1000);
