const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function () {
    alert('Jeje, mejor te paso el mio: 3334615222, espero tu mensaje c:')

})

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function() {
    const randomX = parseInt(Math.random() * 90);
    const randomY = parseInt(Math.random() * 90);
    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');

    noBtn.style.setProperty('transform', `translate(-${randomX}%), -${randomY}%`);

})

noBtn.addEventListener('click', function () {
    const randomX = parseInt(Math.random() * 90);
    const randomY = parseInt(Math.random() * 90);
    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');

    noBtn.style.setProperty('transform', `translate(-${randomX}%), -${randomY}%`);

})

noBtn.setAttribute('tabindex', '-1');