function calcNotas() {
    let nome = prompt('Diga o nome do aluno:')
    let h2 = document.getElementById('h2')
    h2.textContent = `Analisando a situação de ${nome}`

    let nota1 = parseFloat(prompt('Digite a primeira nota:'))
    let nota2 = parseFloat(prompt('Digite a segunda nota:'))
    let media = (nota1 + nota2) / 2
    let p1 = document.getElementById('p1')
    let p2 = document.getElementById('p2')
    p1.innerHTML = `Com as notas ${nota1} e ${nota2}, <b>a média é de ${media}</b>`

    if (media < 3){
        p2.innerHTML = `Com a média abaixo de 3, o aluno está <b>reprovado</b>`
    }
    else if (media < 6) {
        p2.innerHTML = `Com a média entre 3 e 5, o aluno está em <b>recuperação</b>`
    }
    else {
        p2.innerHTML = `Com a média acima de 6, o aluno está <b>aprovado</b>`
    }
}