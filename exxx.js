// Quand l'utilisateur défile de 20px vers le bas, montre le bouton
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollTopBtn").style.display = "block";
        document.getElementById("scrollBottomBtn").style.display = "block";
    } else {
        document.getElementById("scrollTopBtn").style.display = "none";
        document.getElementById("scrollBottomBtn").style.display = "none";
    }
}

// Quand l'utilisateur clique sur le bouton, revient en haut du document
function scrollToTop() {
    document.body.scrollTop = 0; // Pour Safari
    document.documentElement.scrollTop = 0; // Pour Chrome, Firefox, IE et Opera
}

// Quand l'utilisateur clique sur le bouton, va en bas du document
function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}
