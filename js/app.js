let contador = 4


alert('Estou construindo uma lista de tarefas')

function finalizarTarefa(elementoClicado){
    const tarefaFinalizada = elementoClicado.parentNode
    
    const estaFinalizada = tarefaFinalizada.classList.contains('finalizada')

    if(estaFinalizada){
        tarefaFinalizada.classList.remove('finalizada')
        contador = contador + 1
    }else{
        tarefaFinalizada.classList.add('finalizada')
        contador = contador - 1
    }
    atualizarContador()
}

renderizarTarefas()
function renderizarTarefas(){

    const App = document.querySelector('#root')

    const tarefas = [//arrays são indexados ou seja, começam com números ( a partir do número 0)
        ' Estudar HTML',//0
        'Estudar CSS', //1
        'Estudar JAVASCRIPT'//2
    ]

    for(let i = 0; i < tarefas.length; i++){
        App.innerHTML += 
        `
        <li>
            <ion-icon class="red" name="trash-outline"></ion-icon>
            <div onclick="finalizarTarefa(this)">
            ${tarefas[i]}
            </div>
         <ion-icon class="green" name="pricetag-outline"></ion-icon>
        </li>
        `
    }
}

function atualizarContador(){
    const elementoContador = document.querySelector('h1 span')
    elementoContador.innerHTML = `${contador}`
}
