//Nota: Boa parte desse arquivo foi baseado em tutoriais e cursos pré-existentes na Documentação do react. Comentei pra não me perder 

import './App.css'

export default function Formulario() {
  function handleSubmit(evento) { /*recebe a inscrição e é disparada automaticamente quando o usuário clica em "cadastro". 
    Não necessariamente precisando de validação.*/ 

  evento.preventDefault(); //Impede que a pagina recarregue toda vez que o usuário manda o formulário.

    const form = evento.target; //Captura o botão de cadastro do formulário
    const Dados = new FormData(form); //Cria novos dados (todos) no formulário

    fetch('', { method: form.method, body: Dados}); /*O fetch envia recursos (os dados) de forma assíncrona pro endpoint da API. 
     nesse caso ele busca os dados do formulário*/

    const formJson = Object.fromEntries(Dados.entries()); /*Captura e converte os dados do FormData e um Objeto JS plano (que tem
    a mesma estrutura do JSON, dessa forma: 
    { CPF: 45878569322
    username: fulano }*/

    console.log(formJson); //imprime o formulário

  }

  return (
    <fieldset>
    <form method="post" onSubmit={handleSubmit}> 

    <div className="flex items-center ">
    <h1 className="text-4xl font-bold">Bem vindo, faça o cadastro do seu portfolio</h1>
      



      <label>
        Nome completo:
        <input type='text' className='input' placeholder='Digite seu nome'/>
      </label>

       <label>
        CPF:  
        <input type='number' className='input' placeholder='Digite seu CPF'/>
      </label>

       <label>
        Data de nascimento:
        <input type='date' className='input' placeholder='Data que você nasceu'/>
      </label>
   </div>

      <br />

    <div>

       <label>
        Telefone pra contato:
        <input type='tel' className='input' placeholder='+55 (00) 00000-0000'/>
      </label>

      <label>
        E-mail:
        <input type='email' className='input' placeholder='usuario@mail.com'/>
      </label>
 
       <label className="label">Sua área:</label>
      
      <select defaultValue="" className="select">
        
        <option disabled={true}>Escolha a sua função mais recente</option>
        <option>CEO</option>
        <option>Cientista de dados</option>
        <option>Coordenador de TI</option>
        <option>Cybersegurança</option>
        <option>Des. Back-end</option>
        <option>Des. Front-end</option>
        <option>Des. Full-stack</option>
        <option>Des. Mobile</option>
        <option>Designer UX-UI</option>
        <option>Especialista em IHC</option>
        <option>Estagiário</option>
        <option>Gerente de tecnologia</option>
        <option>Governança de TI</option>
        <option>Infraestrutura</option>
        <option>Gerente de tecnologia</option>
        <option>Operador de redes de computadores</option>
        <option>Suporte de tecnologia</option>
        <option>Telecomunicações</option>
        <option>Outro</option>
        <option>Não trabalho com tecnologia</option>
        
      </select>
    

    </div>

    <br />

      <div>

       <label className="label"> Nível de graduação:</label>
        <select defaultValue="Pick a color" className="select">
         <option disabled={true}>Escolha seu nível de graduação</option>
         <option>Ensino Fundamental l</option>
         <option>Ensino Fundamental ll</option>
         <option>Ensino Médio incompleto</option>
         <option>Ensino Médio completo</option>
         <option>Realizando graduação</option>
         <option>Graduado ou tecnólogo</option>
         <option>Pós-graduado</option>
         <option>Mestre</option>
         <option>Doutor</option>
         <option>Educação informal ou outros</option>
        </select>

       <label>
        Usuário do github:
        <input type='text' className='input' placeholder='@user'/>
      </label>


      <p>
        Sua situação atual:
        <label><input type="radio" name="Radio" value="option1" />Trabalhando</label>
        <label><input type="radio" name="Radio" value="option2" defaultChecked={true} />Em busca de um emprego</label>

      </p>
      <br />

      </div>
      
      <button type="reset"> Resetar formulário</button>
      <br />
      <br />
      <button type="submit">Cadastrar formulárop</button>

    </form>
    </fieldset>
    
  );
}
