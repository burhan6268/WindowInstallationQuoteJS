function saveData() {
    //setItem(key,value)
    localStorage.setItem(`name`, document.getElementById(`name`).value);
    localStorage.setItem(`email`, document.getElementById(`email`).value);
    localStorage.setItem(`room`, document.getElementById(`room`).value);
    localStorage.setItem(`widthW`, document.getElementById(`widthW`).value);
    localStorage.setItem(`lengthW`, document.getElementById(`lengthW`).value);
    var sqF;
    sqF=(document.getElementById(`lengthW`).value)*(document.getElementById(`widthW`).value)
    localStorage.setItem(`sqf`,sqF);
    localStorage.setItem(`material`,document.querySelector('input[name="material"]:checked').value);
    var fprice;
    fprice=(500+(100*sqF))
    var tax;
    tax=fprice*0.13;
    var totprice=fprice+tax;
    localStorage.setItem(`tprice`,totprice);
    alert("Data Saved Successfully");
}//End of Function

function getData() 
{
    
    document.getElementById("name").value = localStorage.getItem(`name`);
    document.getElementById("email").value = localStorage.getItem(`email`);
    document.getElementById("room").value = localStorage.getItem(`room`);
    document.getElementById("sqf").value=localStorage.getItem(`sqf`);
    document.getElementById("material").value=localStorage.getItem(`material`);
    document.getElementById("price").value=localStorage.getItem(`tprice`);
}



