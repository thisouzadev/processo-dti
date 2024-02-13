# Reminder App

Este é um aplicativo simples para gerenciar lembretes.

## Como usar

1. **Instalação:**
   - Certifique-se de ter o SDK do .NET instalado em seu sistema. Você pode baixá-lo em [dotnet.microsoft.com](https://dotnet.microsoft.com/download).
   - Certifique-se de ter o Node.js e o npm instalados em seu sistema.
   - Clone este repositório para o seu ambiente local.
   - Navegue até o diretório do projeto e execute `npm install` para instalar as dependências.

2. **Execução:**
	cd seu-projeto
	Instale as dependências do projeto:

	npm install
	Iniciando o Servidor
	Para iniciar o servidor .NET, siga estas etapas:

	Navegue até o diretório do projeto do servidor:

	cd servidor
	Execute o comando para iniciar o servidor:

	- dotnet run

3. **Criar um lembrete:**
   - Na página inicial, preencha o campo "Nota" com o conteúdo do lembrete.
   - Selecione a data desejada para o lembrete.
   - Clique no botão "Criar" para adicionar o lembrete.

4. **Visualizar lembretes:**
   - Na página inicial, você verá uma lista de todos os lembretes criados.
   - Os lembretes são agrupados por data e exibidos em ordem cronológica.

5. **Excluir um lembrete:**
   - Cada lembrete possui um botão "x" ao lado.
   - Clique no botão "x" para excluir o lembrete correspondente.

6. **Atualizar a página:**
   - Se a página for atualizada, os lembretes permanecerão armazenados até serem excluídos.

## Tecnologias utilizadas

- **Frontend:**
  - React.js: Biblioteca JavaScript para construção de interfaces de usuário.
  - Axios: Cliente HTTP para fazer solicitações de API.

- **Backend:**
  - ASP.NET Core: Framework de desenvolvimento web para a construção de APIs RESTful.
  - C#: Linguagem de programação utilizada no backend.

- **Persistência de dados:**
  - Os lembretes são armazenados temporariamente em memória no servidor.

## Contribuição

Sinta-se à vontade para contribuir com melhorias para este projeto. Basta seguir estas etapas:

1. Faça um fork do repositório.
2. Crie uma branch para a sua feature: `git checkout -b feature-nova`.
3. Faça as alterações desejadas.
4. Faça o commit das suas alterações: `git commit -m 'Adiciona uma nova feature'`.
5. Envie as alterações para o seu fork: `git push origin feature-nova`.
6. Solicite uma Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.

