const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function () {
    alert('Ya sabia, jeje, este es mi numero: 3334615222 c;')

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
