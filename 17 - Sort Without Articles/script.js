const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 
'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 
'An Old Dog'];


function strip (leGroupe) {
return leGroupe.replace(/^(the |an |a )/i, "");
}

const bandsSorted = bands.sort((a, b) => {
if (strip(a) > strip(b)) {
return 1;
} else {
return -1;
}
})

var ul = document.getElementById('bands');

for (let i = 0; i < bandsSorted.length; i++) {
let li = document.createElement('li');
li.appendChild(document.createTextNode(bandsSorted[i]));
ul.appendChild(li);
}