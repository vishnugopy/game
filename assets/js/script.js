// var grid="";
// var tableau=[];
// var arrayOfImages = [
//   "assets/images/8.jpg",
//     "assets/images/6.jpg",
//    "assets/images/7.jpg",
//    "assets/images/5.jpg",
//    "assets/images/4.jpg",
//    "assets/images/3.jpg",
//    "assets/images/2.jpg",
//    "assets/images/1.jpg",
//    "assets/images/9.jpg",
//    "assets/images/10.jpg",
//    "assets/images/guts.png",
//    "assets/images/panda.jpg",
//
// ];
//
//
// /* T'as besoin d'un tableau où chaque image est repetée 2 fois */
// /*  ON PUSH DEUX FOIS LES IMAGES DU TABLEAU arrayOfImages DANS LE TABLEAU "TABLEAU"*/
// for (var i =0; i<arrayOfImages.length; i++){
//   tableau.push(arrayOfImages[i]);
//   tableau.push(arrayOfImages[i]);
// };
// /* DEUXIÈEMETECHNIQUE:
// var tab= arrayOfImages.concat(arraOfImages);
// console.log(tab); */
// /*  FONCTION QUI PERMET DE MELANGER LES VALEURS COMPRISES DANS LE TABLEAU*/
// function Rand_Tableau(tab){
//  var i;
//  var Num;
//  var Nbr = tab.length;
//  var Tab = tab;
//  //-- Lance la boucle
//  while( Nbr> 0){
//    //-- Recup nombre aleatoire
//    Num = Math.floor(Math.random() * Nbr);
//    //-- 1 de moins a traiter
//    Nbr--;
//    //-- Stock element tire
//    szTmp = Tab[Num];
//    //-- Decalage des valeurs du tableau
//    for( i= Num; i < Nbr; i++)
//      Tab[i] = Tab[i+1]
//    //-- Stock l'element tire en fin
//    Tab[ Nbr] = szTmp;
//  }
//  //-- On peut remettre dans l'ordre du tirage
//  Tab.reverse();
//  //-- Retourne resultat
//  return( Tab);
// }
//
// /*  ET MAINTENANT ON APPELLE LA FONCTION QU'ON VIENT DE CRÉER*/
// Rand_Tableau(tableau);
//
//
// /*  ON AJOUTE DES BALISES IMG À CHAQUE IMAGE ET ON MET TOUT CE CODE DANS LA VARIABLE GRID*/
// for (var i=0; i<tableau.length; i++){
//   grid += "<figure><img src='"+tableau[i]+"'/></figure>";
//       console.log(grid);
// }
//
// /* ON AJOUTE LA VARIABLE GRID DANS LE HTML */
// $("#cards").append(grid);
//
// // $('figure').click( function(){
// //
// //  $(this).find("img").hide()
// //  });
//
//
// /* Et maintenant essaie de les mélanger dans un ordre aléatoire */
//
//

var grid="";
var tableau=[];
var arrayOfImages = [
  "assets/images/8.jpg",
    "assets/images/6.jpg",
   "assets/images/7.jpg",
   "assets/images/5.jpg",
   "assets/images/4.jpg",
   "assets/images/3.jpg",
   "assets/images/2.jpg",
   "assets/images/1.jpg",
   "assets/images/9.jpg",
   "assets/images/10.jpg",
   "assets/images/guts.png",
   "assets/images/panda.jpg",

];


/* T'as besoin d'un tableau où chaque image est repetée 2 fois */
/*  ON PUSH DEUX FOIS LES IMAGES DU TABLEAU arrayOfImages DANS LE TABLEAU "TABLEAU"*/
for (var i =0; i<arrayOfImages.length; i++){
  tableau.push(arrayOfImages[i]);
  tableau.push(arrayOfImages[i]);
};
/* DEUXIÈEMETECHNIQUE:
var tab= arrayOfImages.concat(arraOfImages);
console.log(tab); */
/*  FONCTION QUI PERMET DE MELANGER LES VALEURS COMPRISES DANS LE TABLEAU*/
  function Rand_Tableau(tab){
   var i;
   var Num;
   var Nbr = tab.length;
   var Tab = tab;
   //-- Lance la boucle
   while( Nbr> 0){
     //-- Recup nombre aleatoire
     Num = Math.floor(Math.random() * Nbr);
     //-- 1 de moins a traiter
     Nbr--;
     //-- Stock element tire
     restit = Tab[Num];
     //-- Decalage des valeurs du tableau
     for( i= Num; i < Nbr; i++){
       Tab[i] = Tab[i+1]
     }
     //-- Stock l'element tire en fin
     Tab[ Nbr] = restit;
   }
   //-- On peut remettre dans l'ordre du tirage
   Tab.reverse();
   //-- Retourne resultat
   return( Tab);
  }

/*  ET MAINTENANT ON APPELLE LA FONCTION QU'ON VIENT DE CRÉER*/
Rand_Tableau(tableau);


/*  ON AJOUTE DES BALISES IMG À CHAQUE IMAGE ET ON MET TOUT CE CODE DANS LA VARIABLE GRID*/
for (var i=0; i<tableau.length; i++){
  grid += "<figure><img src='"+tableau[i]+"'/></figure>";
      console.log(grid);
}

/* ON AJOUTE LA VARIABLE GRID DANS LE HTML */
$("#cards").append(grid);

/* Et maintenant essaie de les mélanger dans un ordre aléatoire */
var imgUrl1 ="";
var imgUrl2 ="";
$("figure").click(function() {
  var nbshow = $(".show").length;
  console.log(nbshow);
  if (nbshow<2) {
    $(this).addClass("show");
    if(nbshow ===0) {
      imgUrl1 = $(this).find("img").attr("src");
    } else if (nbshow ===1) {
      imgUrl2 = $(this).find("img").attr("src");
    };
    if (nbshow===1) {
      console.log("boucle 2 cartes tournées")
      if (imgUrl1 === imgUrl2) {
        setTimeout(function() {
        $(".show").addClass("invisible");
            $(".show").removeClass("show");
          }, 500);
      } else {
        setTimeout(function() {
          $(".show").removeClass("show");
        }, 500);
      }
    }
  }
});
