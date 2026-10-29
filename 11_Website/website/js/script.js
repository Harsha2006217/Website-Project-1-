/* ============================================================
   JAVASCRIPT VAN MIJN PERSOONLIJKE PROFIELPAGINA
   Project 1 HBO-ICT - Harsha Kanaparthi
   Sprint 1, week 36 (31 augustus t/m 4 september 2026)

   Dit script doet drie kleine dingen:
   1. Het menu op mobiel open- en dichtklappen (hamburgerknop).
   2. Het juiste jaartal in de footer zetten.
   3. Een terug-naar-boven-knop tonen zodra je naar beneden scrolt.

   Belangrijk voor mijn wildcard user story (privacy):
   dit script draait alleen lokaal in de browser van de bezoeker.
   Er wordt niets opgeslagen (geen cookies, geen localStorage)
   en er wordt niets naar een server verstuurd.
   ============================================================ */

/* We wachten tot de hele HTML geladen is. Anders zoekt JavaScript
   naar elementen die er nog niet zijn en krijg je fouten in de
   console. Dit heb ik geleerd via MDN (event: DOMContentLoaded). */
document.addEventListener("DOMContentLoaded", function () {

  /* ---------- 1. HET MOBIELE MENU ---------- */

  /* De knop en het menu opzoeken via hun id uit index.html */
  var menuKnop = document.getElementById("menu-button");
  var menu = document.getElementById("menu");

  /* Alleen als de knop echt bestaat (op breed scherm is hij
     onzichtbaar, maar hij staat wel in de HTML) */
  if (menuKnop && menu) {
    menuKnop.addEventListener("click", function () {
      /* classList.toggle voegt de class "open" toe als hij er nog
         niet is, en haalt hem weg als hij er al is. In de CSS staat
         dat het menu met de class "open" zichtbaar wordt. */
      var isOpen = menu.classList.toggle("open");

      /* aria-expanded vertelt een schermlezer of het menu open of
         dicht is: true = open, false = dicht (WCAG 2.1, W3C). */
      menuKnop.setAttribute("aria-expanded", isOpen);
    });
  }

  /* ---------- 2. HET JAARTAL IN DE FOOTER ---------- */

  /* new Date() geeft de datum van vandaag. getFullYear() pakt daar
     het jaar uit. Zo blijft de footer automatisch goed, ook in
     2027, zonder dat ik de HTML hoef aan te passen. */
  var jaarVak = document.getElementById("jaar");
  if (jaarVak) {
    jaarVak.textContent = new Date().getFullYear();
  }

  /* ---------- 3. DE TERUG-NAAR-BOVEN-KNOP ---------- */

  var topKnop = document.getElementById("top-button");
  if (topKnop) {
    /* Bij elke scrollbeweging kijken hoe ver de bezoeker is.
       window.scrollY is het aantal pixels vanaf de bovenkant. */
    window.addEventListener("scroll", function () {
      if (window.scrollY > 400) {
        /* Pas na 400 pixel scrollen heeft de knop nut */
        topKnop.classList.add("zichtbaar");
      } else {
        topKnop.classList.remove("zichtbaar");
      }
    });

    /* Op de knop klikken: rustig terug naar boven scrollen.
       scrollTo met behavior "smooth" doet dat voor ons. */
    topKnop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
