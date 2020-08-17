const escola = [{
    nome: 'Turma M1',
    alunos: [
        {
            nome: 'Gustavo',
            nota:8.1
        },{
            nome: 'Ana',
            nota:9.3
        },
    ]
},{
    nome: 'Turma M2',
    alunos: [
        {
            nome: 'Rebeca',
            nota:8.2
        },{
            nome: 'Roberto',
            nota:7.3
        },
    ]
}
]

const getNotaDoAluno = aluno => aluno.nota
const getNotaDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotaDaTurma)
console.log(notas1)

Array.prototype.flatmap = function(callback){
    return Array.prototype.concat.apply([],this.map(callback))
}
const notas2 = escola.flatmap(getNotaDaTurma)
console.log(notas2)