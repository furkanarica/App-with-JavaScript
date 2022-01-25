let body = document.getElementById("body");
let save = document.getElementById("save");

let dName = "";
let dSurname = "";
let dNo = "";

let tName = document.createElement("td");
let tSurname = document.createElement("td");
let tNo = document.createElement("td");

let namee = document.getElementById("namee");
let surname = document.getElementById("surname");
let no = document.getElementById("no");
let td = document.createElement("td");
let tr = document.createElement("tr");
let tbtnEdit = document.createElement("button");
let tbtnDelete = document.createElement("button");
let personId = document.createElement("td")



save.onclick = function () {
    namee = document.getElementById("namee");
    surname = document.getElementById("surname");
    no = document.getElementById("no");


    tName = document.createElement("td");
    tSurname = document.createElement("td");
    tNo = document.createElement("td");
    td = document.createElement("td");
    tbtnDelete = document.createElement("button");
    tbtnEdit = document.createElement("button");
    personId = document.createElement("td")

    tbtnDelete.textContent = "Delete";
    tbtnEdit.textContent = "Edit"
    tbtnDelete.id = "buttonDelete";
    tbtnEdit.id = "buttonEdit";
    tbtnDelete.className = "buttonDelete";
    tbtnEdit.className = "buttonEdit";

    tr = document.createElement("tr");

    if (namee.value != "" && surname.value != "" && no.value != "") {
        tName.textContent = namee.value;
        tSurname.textContent = surname.value;
        tNo.textContent = no.value;

        dName = namee.value;
        dSurname = surname.value;
        dNo = no.value;

        tr.appendChild(tName);
        tr.appendChild(tSurname);
        tr.appendChild(tNo);
        tr.appendChild(personId)
        tr.appendChild(td);
        td.appendChild(tbtnDelete);
        td.appendChild(tbtnEdit);
        body.appendChild(tr);

        namee.value = ""
        surname.value = ""
        no.value = ""

    } else {
        alert("All information must be entered.")
    }
}

body.addEventListener("click", edit);
function edit(e) {
    if (e.target.className == "buttonEdit") {
        let editNo = e.target.parentNode.previousElementSibling.previousElementSibling.innerText;
        e.target.parentNode.previousElementSibling.previousElementSibling.innerHTML = "<input type ='text'>"
        e.target.parentNode.previousElementSibling.previousElementSibling.children[0].value = editNo;

        let editSurname = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
        e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "<input type = 'text'>"
        e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.children[0].value = editSurname;

        let editName = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
        e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "<input type = 'text'>"
        e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.children[0].value = editName;

        e.target.parentNode.innerHTML = "<button class ='buttonDelete'>Delete</button> <button id = 'btntransformSave'>Save</button>"

    }
}

function createDatabase(databaseName, databaseVersion, databaseText, databaseSize) {
    return databaseObj = openDatabase(databaseName, databaseVersion, databaseText, databaseSize)
}

body.addEventListener("click", databaseDelete);
function databaseDelete(e, deleteValue) {
    if (e.target.className == "buttonDelete") {
        e.target.parentNode.parentNode.remove()
        deleteValue = e.target.parentNode.previousElementSibling.innerText
        console.log(e.target.parentNode.previousElementSibling);
        return databaseDelete(deleteValue)
    }
}

const updatePromise = new Promise((resolve, reject) => {
    body.addEventListener("click", update);
    function update(e) {
        if (e.target.id == "btntransformSave") {
            let inputName = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.children[0];
            let inputSurname = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.children[0];
            let inputNo = e.target.parentNode.previousElementSibling.previousElementSibling.children[0];

            if (inputName.value != "" && inputSurname.value != "" && inputNo.value != "") {
                e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "<td> </td>"
                e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent = inputName.value

                e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "<td> </td>"
                e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent = inputSurname.value;

                e.target.parentNode.previousElementSibling.previousElementSibling.innerHTML = "<td></td>"
                e.target.parentNode.previousElementSibling.previousElementSibling.textContent = inputNo.value;

                let id = e.target.parentElement.previousElementSibling.innerText;


                e.target.parentNode.innerHTML = "<button class = 'buttonDelete'>Delete</button> <button class = 'buttonEdit'>Edit</button>"
                const message = "Personnel enrollment has been successfully updated."
                resolve(message)
                return databaseUpdate(inputName, inputSurname, inputNo, id)

            } else {
                const message = new Error("Information must be entered correctly and completely.")
                reject(message)
            }
        }
    }
});

const updateControl = function () {
    updatePromise
        .then(message => {
            console.log(message);
        })
        .catch(message => {
            console.log(message);
        })
}
updateControl();

const insertPromise = new Promise((resolve, reject) => {
    save.addEventListener("click", insert)
    function insert(insertName, insertSurname, insertNo) {
        if (dName != "" && dSurname != "" && dNo != "") {
            insertName = dName;
            insertSurname = dSurname;
            insertNo = dNo;
            const message = "Personnel enrollment has been successfully completed."
            resolve(message)
            return databaseInsert(insertName, insertSurname, insertNo)
        } else {
            const message = new Error("Information must be entered correctly and completely.")
            reject(message)
        }
    }
});

const insertControl = function () {
    insertPromise
        .then(message => {
            console.log(message);
        })
        .catch(message => {
            console.log(message);
        })
}
insertControl();

const getidPromise = new Promise((resolve, reject) => {
    save.addEventListener("click", getId)
    function getId(idWorth) {
        if (dName != "" && dSurname != "" && dNo != "") {
            idWorth = document.createElement("td")
            personId.appendChild(idWorth)
            dName = ""
            dSurname = ""
            dNo = ""
            const message = "The id value has been reached."
            resolve(message)
            return getdatabaseID(idWorth);
        } else {
            const message = new Error("The id value could not be reached.")
            reject(message)
        }
    }
});

const getidControl = function () {
    getidPromise
        .then(message => {
            console.log(message);
        })
        .catch(message => {
            console.log(message);
        })
}
getidControl();

function databaseSelect() {
    tName = document.createElement("td");
    tSurname = document.createElement("td");
    tNo = document.createElement("td");
    td = document.createElement("td");
    tr = document.createElement("tr");
    tbtnDelete = document.createElement("button");
    tbtnEdit = document.createElement("button");
    personId = document.createElement("td")

    tbtnDelete.textContent = "Delete";
    tbtnEdit.textContent = "Edit"
    tbtnDelete.id = "buttonDelete";
    tbtnEdit.id = "buttonEdit";
    tbtnDelete.className = "buttonDelete";
    tbtnEdit.className = "buttonEdit";

    tr.appendChild(tName);
    tr.appendChild(tSurname);
    tr.appendChild(tNo);
    tr.appendChild(personId)
    tr.appendChild(td);
    td.appendChild(tbtnDelete);
    td.appendChild(tbtnEdit);
    body.appendChild(tr);
}





