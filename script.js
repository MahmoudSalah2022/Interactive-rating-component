const btns = document.querySelectorAll('#number');
const ratenumber = document.getElementById('ratenumber');

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        ratenumber.innerHTML = btn.innerHTML;
    })
})

function nextcard() {
    let submit = document.querySelector('.submit');
    const fristcont = document.querySelector('.fristcont');
    const secondcard = document.querySelector('.secondcont');
    fristcont.classList.add('hiddensection');
    secondcard.classList.remove('hiddensection');
}
