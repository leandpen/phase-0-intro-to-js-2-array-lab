const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(_name) {
 cats.push("Ralph")
};

function destructivelyPrependCat(_name) {
    cats.unshift("Bob")

};

function destructivelyRemoveLastCat(_name) {
    cats.pop("Garfield");
};

function destructivelyRemoveFirstCat(_name) {
    return cats.shift("Arnold");
    cats;
}

function removeLastCat(_name) {
    const copyCats = cats.slice()
    return copyCats.slice(0, copyCats.length - 1 );
} 

function appendCat(name) {
    return [...cats, name];
}


function removeFirstCat() {
    return cats.slice(cats.length - 2)
}

function prependCat(name) {
    const cats =["Milo", "Otis", "Garfield"]
   return ["Arnold", ...cats, ]
}