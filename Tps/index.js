function calcularPromedio()
{
    const notaM = parseFloat(document.getElementById("notaM").value)
    const notaL = parseFloat(document.getElementById("notaL").value)
    const notaE = parseFloat(document.getElementById("notaE").value)
    const promedio = (notaM + notaL + notaE) / 3
    document.getElementById("resultado").innerHTML = ("Promedio: " + promedio)
}

function notaMasAlta()
{
    var nota
    const notaM = parseFloat(document.getElementById("notaM").value)
    const notaL = parseFloat(document.getElementById("notaL").value)
    const notaE = parseFloat(document.getElementById("notaE").value)
    nota = Math.max(notaM, notaL, notaE)
    document.getElementById("resultado").innerHTML = ("Nota mas alta: " + nota) 
}