// Laden der Seite
window.addEventListener("load", function() {
	// Lade-Animation ausblenden
	document.querySelector(".loader").classList.add("hidden");
	// Navigation ausblenden
	document.querySelector("nav").classList.add("hidden");
	// Titel und Slogan animieren
	document.querySelector("h1").classList.add("animate");
	document.querySelector("p").classList.add("animate");
	// Leitendes Design animieren
	document.querySelector(".lead-design").classList.add("animate");
	// Navigation einblenden
	document.querySelector("nav").classList.remove("hidden");
});

// Scroll-Animation
window.addEventListener("scroll", function() {
	// Über mich
	if (isScrolledIntoView(document.querySelector("#about"))) {
		document.querySelector("#about h2").classList.add("animate");
		document.querySelector("#about p").classList.add("animate");
	}
	// Projekte
	if (isScrolledIntoView(document.querySelector("#projects"))) {
		document.querySelector("#projects h2").classList.add("animate");
		document.querySelectorAll("#projects li").forEach(function(item) {
			item.classList.add("animate");
		});
	}
	// Kontakt
	if (isScrolledIntoView(document.querySelector("#contact"))) {
		document.querySelector("#contact h2").classList.add("animate");
		document.querySelector("form").classList.add("animate");
	}
});

// Kontaktformular
document.querySelector("form").addEventListener("submit", function(event) {
	event.preventDefault();
	// Formular ausblenden und Erfolgsmeldung einblenden
	document.querySelector
(".success").style.display = "block";
document.querySelector("form").style.display = "none";
});

// Hilfsfunktion für Überprüfung, ob Element im Viewport ist
function isScrolledIntoView(element) {
var rect = element.getBoundingClientRect();
var elemTop = rect.top;
var elemBottom = rect.bottom;
  // Nur anzeigen, wenn mindestens 50% des Elements sichtbar ist
var isVisible = elemTop < window.innerHeight / 2 && elemBottom >= 0;
return isVisible;
}
