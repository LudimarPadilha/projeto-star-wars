# Bem-vindo ao projeto Star Wars! 

## Instruções de Instalação e Configuração

### Requisitos

Antes de iniciar a instalação, certifique-se de que você tem os seguintes requisitos atendidos:

 - Docker
 - Docker Compose

### Passos de Instalação

 1. **Clone o Repositório**
 
    ```shell
    git clone https://github.com/LudimarPadilha/projeto-star-wars'
    ```

 3. **Configuração do Docker-Compose**
    Será necessario verificar se o arquivo ***docker-compose.yml*** está presente no diretorio raiz do projeto. Esté arquivo é responsavel pela configuração necessária para iniciar os contêineres Docker.

 4. **Construir e Iniciar os Contêineres**
    
    Execute o seguinte comando para construir e iniciar os contêineres Docker:
    
    ```shell
    docker-compose up --build
    ```
    Esse comando ira baixar as imagens que foram definidas no arquivo ***docker-compose.yml***

### Estrutura do Projeto
    
```
  
─ projeto-star-wars
  ├── app
  │  ├── bin
  │  ├── dist
  │  ├── node_modules
  │  ├── sql
  │  ├── src
  │  ├── .env
  │  ├── package-lock.json
  │  ├── package.json
  │  ├── tsconfig.json
  │ docker-compose.yml
  │ Dockerfile

 ```

  ### Uso
   - Abra o navegador e acesse http://localhost:3000 para começar a usar o aplicativo.
   - Explore os diferentes módulos para visualizar informações sobre Star Wars.
     -  '/users' #Usuarios
	   - '/login'  #Login para pegar token (POST)
  		  - JSON de Exemplo (post):
       
  		  ```bash
            {
              "email": "ludimar",
              "password": "123456",
              "afiliacao":"Jedi"
            }
       
  		  ```

	 -  '/planets' #Planetas
	 -  '/starsystems' #Sistemas Solares
	 -  '/characters'  #Personagens
  		  - JSON de Exemplo (post):
       
  		  ```bash
            {
             "name": "Luke Skywalker",
             "height": "172",
             "hair_color": "blonde",
             "birth_year": "19BBY"
            }
       
  		  ```     
	 -  '/spaceships'  #Naves Espaciais.
  

### Banco de Dados
  - Abra o navegador e acesse http://localhost:3000 para começar a usar o aplicativo PgAdmin.
  - Criar uma conexão com o nome que melhor se encaixar na descrição.
    - Na aba conexão, configure o servidor:
      - Host name/address: db
      - Port: 5432
      - Username: postgres
      - Password: 123456
      
    Apos isso, será possivel acessar o banco de dados.

Está incialização do APP e manipulação e exemplos práticos de como fazer requisições HTTP para as rotas da API.

## FIM  

