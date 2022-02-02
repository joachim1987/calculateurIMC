//  calculateur imc virtuel

function calculerIMC(poids, taille) {
  let result = poids / taille ** 2
  return result
}
let poids = prompt('Entrez votre poids (en kg) :')
let taille = prompt('Entrez votre taille (en m) :')

alert('Votre IMC est de ' + calculerIMC(poids, taille))
