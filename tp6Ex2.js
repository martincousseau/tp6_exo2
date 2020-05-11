function first (){

    let title = document.title;
    console.log(title);
    

    let p = document.createElement("p");
    
    p.innerText = title;
    document.body.appendChild(p);

}

function second () {

    let line = document.getElementsByTagName("tr");
    console.log("nombre de ligne du tableau : " + line.length);

    let text = ("le nombre de lignes du taleau est : " + line.length);
    let p = document.createElement("p");
    p.innerText = text;
    document.body.appendChild(p);
}

function third() {

    let line = document.getElementsByTagName("th");
    console.log("nombre de colonnes du tableau : " + line.length);

    let text = ("le nombre de colonnes du taleau est : " + line.length);
    let p = document.createElement("p");
    p.innerText = text;
    document.body.appendChild(p);
}

function fourth () {

    let line = document.getElementsByTagName("tr");
    console.log("nombre de ligne du tableau : " + line.length);
    let sem = (line.length-1)/2;

    let p = document.createElement("p");
    
    p.innerText = ("le nombre de semestre est : " + sem);
    document.body.appendChild(p);

}

function fifth(){

    
}

function main() {

    first();
    second();
    third();
    fourth();

}

main();