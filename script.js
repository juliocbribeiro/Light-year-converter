function calcular() {
    let num = window.document.getElementById('input')
    let luz = 9.46
    let res = window.document.getElementById('res')



    if (num.value.length == 0 || Number(num.value) <= 0) {
        window.alert('Prencha o campo com valores maiores que 0.')
    }
    else  {
        

        let valor = parseFloat(luz) * parseFloat(num.value)
        let total = valor.toFixed(2)
        res.innerHTML = `${num.value} ano(s)-luz equivale a ${total} trilhões de quilômetros.`
        num.value = ''
        num.focus()
    }
}
