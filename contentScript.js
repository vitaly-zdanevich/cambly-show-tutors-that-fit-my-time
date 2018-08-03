if (location.host === 'www.cambly.com') {
    for (const card of document.getElementsByClassName('tutor-card-mui')) {

        // I tried node.remove() and faced with broken page
        card.style.display = 'none';
    }
}
