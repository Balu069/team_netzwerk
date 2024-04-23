document.addEventListener('DOMContentLoaded', (event) => {
   
    const image = document.getElementById('image');
    const button = document.getElementById('button');
    let currentImage = 1;

    // Event-Listener für den Button, um das Bild zu wechseln
    button.addEventListener('click', () => {
    
        currentImage++;
        // Zurücksetzen auf 1, wenn der Wert größer als 3 ist
        if (currentImage > 3) {
            currentImage = 1;
        }
        // Aktualisieren des Bildpfades
        image.src = 'img_bild' + currentImage + '.png';
    });

   
    image.addEventListener('mouseover', () => {
        image.src = 'img_hover.png';
    });

    
    image.addEventListener('mouseout', () => {
        image.src = 'img_bild' + currentImage + '.png';
    });


    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key.toLowerCase() === 'q') { // Um sicherzugehen, dass die Tastenüberprüfung immer korrekt funktioniert, egal ob großß- oder Kleinschreibung
            document.body.style.backgroundColor = document.body.style.backgroundColor === 'hotpink' ? 'white' : 'hotpink';
        }
    });
});
