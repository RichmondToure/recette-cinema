let x=0;
let y=0;
let a=0;
let b=0;
let prixr=0;
for(let age=11; age<=20;age++)
    if(age<16){
        const prix=1500;
        a=a+prix;
        console.log(`la personne a ${age}ans et le prix du bullet est ${prix} FCFA`);
        x++;
    }
    else{
        const prixr=2500;
        b=b+prixr;
        console.log(`la personne a ${age}ans et le prix du billet est ${prixr} FCFA`);
        y++;
    }   

let recetteTotal=0;
recetteTotal=a+b;
console.log(`la recette total est ${recetteTotal}`)
console.log(`on a pour les moins de 16ans les tickets vendus sont au nombre de ${x} et pour les plus de 16ans sont au nombre de ${y}`);
