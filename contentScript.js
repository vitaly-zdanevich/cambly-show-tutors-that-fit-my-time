if (location.host === 'www.cambly.com') {

    const mins = document.querySelector('#student-plan-info h4').innerText.replace(/\D+/, '');

    for (const card of document.getElementsByClassName('tutor-card-mui')) {

        const nodeBusy = card.querySelector('small');

        if (!nodeBusy) continue;

        if (nodeBusy.innerText.replace(/\D+/, '') < mins)
            // I tried node.remove() and faced with broken page
            card.style.display = 'none';
    }

}
