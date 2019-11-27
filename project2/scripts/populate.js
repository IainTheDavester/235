const populate = {

    makeEntry(name, definition) {
        let entry = document.createElement("div");
        let word = document.createElement("span");
        let description = document.createElement("p");

        entry.className = "entry";
        word.className = "word";

        word.innerHTML = name;
        description.innerText = definition;

        word.style.backgroundColor = this.makeHex(name);

        entry.appendChild(word);
        entry.appendChild(description);
        app.appendChild(entry);
    },

    makeHex(name) {
        if (name.length == 6) {
            return "#" + name;
        } else {
            throw "Incorrect Hex Format!";
        }
    }
}