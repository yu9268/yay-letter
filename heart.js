let elems = document.querySelectorAll('a[class = "PostActions__a PostActions__a--likes"]');
var i;
for(i = 0; i < elems.length; i++){
    elems[i].click();
}
console.log(i);
