# Message Me

Message Me é um aplicativo de mensageria desenvolvido em Ruby on Rails, que utiliza ActionCable, Semantic UI e web sockets para permitir a comunicação em tempo real entre os usuários. Este projeto foi desenvolvido utilizando a versão 7.0.4 do Rails e a versão 3.1.2 do Ruby.

## Funcionalidades

- Registro e autenticação de usuários.
- Criação de conversas individuais ou em grupo.
- Envio e recebimento de mensagens em tempo real.
- Notificações de novas mensagens.
- Lista de contatos online.
- Gerenciamento de perfil de usuário.

## Requisitos do sistema

Certifique-se de que seu sistema atenda aos seguintes requisitos antes de executar o projeto:

- Ruby 3.1.2
- Rails 7.0.4
- Banco de dados PostgreSQL
- Redis

## Configuração do projeto

Siga as etapas abaixo para configurar o projeto em sua máquina local:

1. Clone este repositório para o seu diretório local.
   ```bash
   git clone https://github.com/rubensmk/message-me.git
   ```

2. Instale as dependências do projeto.
   ```bash
   cd message-me
   bundle install
   ```

3. Configure o banco de dados no arquivo `config/database.yml` com suas credenciais do PostgreSQL.

4. Execute as migrações do banco de dados.
   ```bash
   rails db:create
   rails db:migrate
   ```

5. Inicie o servidor Rails.
   ```bash
   rails server
   ```

6. Abra seu navegador e acesse `http://localhost:3000` para ver o aplicativo em ação.

## Contribuição

Se você deseja contribuir para este projeto, sinta-se à vontade para abrir uma *issue* ou enviar uma *pull request*. Ficaremos felizes em receber sua colaboração.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
