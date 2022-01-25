createDatabase("employeeDatabase", 1.0, "Personnels Database", 2 * 1024 * 1024)

databaseObj.transaction(function (tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS PERSONNELS (id INTEGER PRIMARY KEY,Name,Surname,PhoneNumber)");

})

function databaseInsert(insertName, insertSurname, insertNo) {
    databaseObj.transaction(function (tx) {
        tx.executeSql("INSERT INTO PERSONNELS(Name,Surname,PhoneNumber) VALUES (?,?,?)", [insertName, insertSurname, insertNo])
    })
}

function getdatabaseID(idWorth) {
    databaseObj.transaction(function (tx) {
        tx.executeSql("SELECT*FROM PERSONNELS", [], (tx, result) => {
            for (let index = 0; index < result.rows.length; index++) {
                idWorth.textContent = result.rows.item(index).id
            }
        })
    })
}

function databaseDelete(deleteValue) {
    databaseObj.transaction(function (tx) {
        tx.executeSql("DELETE FROM PERSONNELS WHERE id=?", [deleteValue]);
    })
}

function databaseUpdate(inputName, inputSurname, inputNo, id) {
    databaseObj.transaction(function (tx) {
        tx.executeSql("UPDATE PERSONNELS SET Name=?, Surname=?, PhoneNumber=? WHERE id=?", [inputName.value, inputSurname.value, inputNo.value, id])
    })

}

//databaseSelect
databaseObj.transaction(function (tx) {
    tx.executeSql("SELECT*FROM PERSONNELS", [], (tx, result) => {
        for (let index = 0; index < result.rows.length; index++) {
            databaseSelect();
            tName.textContent = result.rows.item(index).Name
            tSurname.textContent = result.rows.item(index).Surname
            tNo.textContent = result.rows.item(index).PhoneNumber
            personId.textContent = result.rows.item(index).id
        }
    })

})