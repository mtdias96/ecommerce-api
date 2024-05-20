# Projeto de API E-commerce

Este projeto é uma API para um sistema de e-commerce desenvolvido em Node.js com Express e usa PostgreSQL como banco de dados, gerenciado através do Prisma.

## Funcionalidades

- **Autenticação**: Sistema de autenticação de usuários.
- **Produtos**: CRUD de produtos.
  
## Tecnologias Utilizadas

- **Node.js**: Plataforma de execução de JavaScript.
- **Express**: Framework web para Node.js.
- **PostgreSQL**: Banco de dados relacional.
- **Prisma**: ORM para Node.js e TypeScript.

## Instalação

Para executar o projeto localmente, certifique-se de ter Node.js e PostgreSQL instalados. Depois, siga estes passos:

```bash
# Clone o repositório
git clone https://github.com/mtdias96/ecommerce-api.git

# Instale as dependências
yarn install

# Configure as variáveis de ambiente (exemplo com dotenv)
cp .env
# Edite .env com suas configurações

# Exemplo de configuração das variáveis de ambiente:
# DATABASE_URL deve apontar para o seu banco PostgreSQL local
DATABASE_URL="postgresql://root:root@localhost:5433/ecommercedb?schema=public"

# JWT_SECRET é usado para a geração de tokens JWT
JWT_SECRET="password123"

# Execute as migrações do banco de dados
yarn prisma migrate dev

# Inicie o servidor de desenvolvimento
yarn dev
