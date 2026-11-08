// pour l'apparition des images
const obs = new IntersectionObserver((e) =>
  e.forEach((x) => x.isIntersecting && x.target.classList.add("active")),
);
document.querySelectorAll(".reveal").forEach((x) => obs.observe(x));

// pour le faq

document
  .querySelectorAll(".question")
  .forEach((q) => (q.onclick = () => q.classList.toggle("passive")));

//   pour le panier

const nombre = document.getElementById("nombre");
const total = document.getElementById("total");
const liste = document.getElementById("liste");
const boutons = document.querySelectorAll(".ajouter");
let panier = [];
boutons.forEach(function (bouton) {
  bouton.addEventListener("click", function () {
    const nom = bouton.dataset.nom;
    const prix = Number(bouton.dataset.prix);
    panier.push({
      nom: nom,
      prix: prix,
    });
    afficherPanier();
  });
});
function afficherPanier() {
  liste.textContent = "";
  let somme = 0;

  panier.forEach(function (produit, index) {
    const article = document.createElement("p");
    article.classList.add("article");
    article.textContent = produit.nom + " - " + produit.prix + "$";

    // pour la creation du bouton supprimer

    const supprimer = document.createElement("button");
    supprimer.textContent = "supprimer";
    supprimer.classList.add("supprimer");
    supprimer.addEventListener("click", function () {
      panier.splice(index, 1);
      afficherPanier();
    });
    article.append(supprimer);
    somme += produit.prix;
    liste.append(article);
  });
  nombre.textContent = panier.length;
  total.textContent = somme;
}
