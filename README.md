Este projeto é o primeiro realizado em TypeScript. Nele Foi criado uma API de uma loja de itens medievais. A API foi desenvolvida com as camadas Model, Service e Controller, para organizar todas
as ações do CRUD (criar, ler, atualizar e deletar). Foi utilizado um banco de dados SQL, gerado e validado um token com o Json Web Token. Sendo o maior desafio neste projeto é desenvolvê-lo todo em TypeScript.


Nest projeto não há front-End. Podendo ter a suas funcionalidades vistas por meio de Cliente.
Para ter acesso ao código desse projeto, clone o repositório e siga os passos abaixo: 
 - git clone git@github.com:FernandaGrein/BackEnd-Project-Trybesmith.git
 - cd BackEnd-Project-Trybesmith
 - docker-compose up -d
 - code . (caso queira continuar pelo VsCode)
 - docker exec -it trybesmith bash
 - npm install
 - npm run restore
 - npm run dev

Foram cumpridos os seguintes requisitos: 
 - Foi criado um endpoint para o cadastro de produtos, sendo validado que os campos de 'name' e 'amount' foram preenchidos corretamente.
 - Foi criado um endpoint para a listagem de todos os produtos.
 - Na sequencia foi criado um enpoint de cadastro de usuários, gerando um token para cada novo usuários, bem como validando se os campos de 'username', 'level' e 'password' foram preenchidos corretamente.
 -Foi criado um endpoint para listar todos os pedidos juntamente com os ids dos produtos vinculados a cada pedido.
 - Também foi criado um endpoint para login de cada usuário, login este que vincula o usuário ao seu token, permitindo a posterior validação deste token.
 - E, Por fim, foi criado um endpoint para cadastro de um pedido, nele é feita a verificado se o usuário possui um token e se este é válido, verificado se foi passado de forma válida os 'productsIds' do pedido, bem como se é possível criar um pedido com 1 produto ou com vários produtos.
