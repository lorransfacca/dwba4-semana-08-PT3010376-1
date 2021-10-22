class Aluno{
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota){
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.primeiraNota = primeiraNota;
    this.segundaNota = segundaNota;
  }
  nomeCompleto(){
    return (this.primeiroNome + " " + this.segundoNome);
  }
  media(){
    return ((this.primeiraNota*0.6)+(this.segundaNota*0.4));
  }
  situacao(){
    if (this.media() > 6){
      return "Aprovado";
    }
    return "Reprovado";
  }
}

var alunos = [
  new Aluno('Lorrans', 'Facca', 8, 7),
  new Aluno('Renato', 'Nakamura', 0, 2),
  new Aluno('victoria', 'Souza', 7, 9.5),
  new Aluno('Elisabeth', 'Aparecida', 10, 10),
  new Aluno('Ana','Feltrim', 8, 10)];
alunos.forEach(mostrarAlunos);

function mostrarAlunos(item, index) {
	  alert("Nome completo: " + item.nomeCompleto() + "\n" + 
			"Média: " + item.media() + "\n" + 
			"Situação: " + item.situacao());
}