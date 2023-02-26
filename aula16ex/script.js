var lis = document.querySelector("select#sellista");
var final = document.querySelector('div#final')
var valores = [];

function adicionar () {
    let num = document.querySelector("input#num");
    let n = Number((num.value));
    
    final.innerHTML = "";

        if(n < 1 || n > 100){
            alert(`Insira um número entre 1 e 100.`)
        } else if(valores.indexOf(n) == -1) {
            if(valores.length == 0) {
                lis.innerHTML = "";
            } else {}
            
            if(num.value.length == 0) {
                alert('Favor inserir um número!');
            } else {
                valores.push(n);
        
                var item = document.createElement('option');
                item.text = `O número ${n} foi adicionado`;
                item.value = `lis${n}`;
                lis.appendChild(item);

            }
        } else {
            alert('Número já inserido. Insira outro ou finalize a análise.')
        }
        num.value = "";
        num.focus();
    }
    


function finalizar () {

valores.sort((a,b) => (a-b));
final.innerHTML = ""


if (valores.length == 0){
    alert("Adcione números antes de finalizar!");
}else {
    if(valores.length == 1){
        final.innerHTML += `<p>Ao todo, temos ${valores.length} número cadastrado.</p>`
    } else {
        final.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados.</p>`
    }

    final.innerHTML += `<p>O maior valor informado foi ${valores[valores.length - 1]}.</p>`

    final.innerHTML += `<p>O menor valor informado foi ${valores[0]}</p>`

    final.innerHTML += `<p>Somando os valores, temos ${valores.reduce((a,b) => a + b, 0)}.</p>`

    final.innerHTML += `<p>A média dos valores é ${(valores.reduce((a,b) => a + b, 0)) / valores.length }.</p>`
}
}
