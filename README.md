# Sistemas Distribuídos API

## Descrição

Este projeto é uma API desenvolvida em TypeScript para gerenciamento de filas utilizando Bull e Redis, com PostgreSQL como banco de dados. A documentação da API é feita com Swagger. A aplicação é orquestrada utilizando containers e o Prisma é utilizado como ORM.

## Tecnologias Utilizadas

- **TypeScript**: Linguagem de programação utilizada para desenvolver a API.
- **Bull**: Biblioteca para gerenciamento de filas.
- **Redis**: Banco de dados em memória utilizado para gerenciamento de filas.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenamento de dados.
- **Swagger**: Ferramenta para documentação da API.
- **Containers**: Utilizados para orquestrar a aplicação.
- **Prisma**: ORM utilizado para interagir com o banco de dados.

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd Sistemas-Distribuidos-Api
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```
    ou  

    ```bash
    docker-compose up -d
    ```

## Configuração

1. Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente necessárias, tais como:
    ```env
    DATABASE_URL=
    REDIS_URL=
    ```
    Um arquivo `.env.example` está disponível para guia de quais variáveis serão necessárias

## Execução

1. Inicie os containers:
    ```bash
    docker-compose up -d
    ```

    ou

2. Inicie a aplicação:
    ```bash
    npm run dev
    ```

## Documentação

A documentação da API pode ser acessada através do Swagger na seguinte URL:
```
http://localhost:3000/docs
```

## Contribuição

1. Faça um fork do projeto.
2. Crie uma nova branch:
    ```bash
    git checkout -b minha-nova-feature
    ```
3. Faça suas alterações e commit:
    ```bash
    git commit -m 'Adiciona nova feature'
    ```
4. Envie para o repositório remoto:
    ```bash
    git push origin minha-nova-feature
    ```
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
## Contato

| Nome            | Email                           | GitHub              |
|-----------------|---------------------------------|---------------------|
| Antonio Marcos  | ambrcz@hotmail.com              | [AntonioMarcosDev](https://github.com/AntonioMarcosDev) |
| Flávio Henrique | flaviohenriquefc@gmail.com      | [ndbzika](https://github.com/ndbzika) |