const button = document.querySelector(".btn");
const playername = document.querySelector(".pname");
const warning = document.querySelector('.warning');


button.addEventListener("click", (e) => {
    e.preventDefault;
    if (!playername.value.trim()) {
        warning.innerHTML = `<p style="color: rgb(185, 0, 0);">Enter a valid name!</p>`;
    }
    else {
        localStorage.setItem('player-name', playername.value)
        window.location.href = 'game.html';
    }

})