# 🌟 **E-commerce CRUD: Angular + Ruby on Rails** 🌟

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular Logo" width="80"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg" alt="Ruby on Rails Logo" width="100"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" alt="SQLite Logo" width="80"/>  
</p>

---

Este projeto é uma aplicação de **CRUD de E-commerce** desenvolvida com **Angular** no frontend e **Ruby on Rails** no backend. A aplicação inclui design moderno com **Angular Material** e persistência de dados em **SQLite**.

---

## 🚀 **Destaques do Projeto**

### **Frontend** 🌐  
<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular Logo" width="50"/>
</p>

- **Framework**: **[Angular](https://angular.io/)**
- **UI/UX**: **[Angular Material](https://material.angular.io/)**  
- **Comunicação**: **HttpClient** para integração com a API.
- **Funcionalidades**:
  - Listagem interativa de produtos.
  - Formulários dinâmicos para criar e editar produtos.
  - Ações de exclusão com confirmação.

---

### **Backend** 🔧  
<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg" alt="Ruby on Rails Logo" width="50"/>
</p>

- **Framework**: **[Ruby on Rails](https://rubyonrails.org/)**
- **Persistência**: **ActiveRecord** para interação com o banco de dados.
- **API**: API RESTful para operações CRUD.
- **Configuração CORS**: Para comunicação segura com o frontend.

---

### **Banco de Dados** 📄  
<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" alt="SQLite Logo" width="50"/>
</p>

- **Banco Utilizado**: **SQLite**.
- **Estrutura de Dados**:
  - Nome, preço e estoque dos produtos.

---

- **[Angular Material](https://material.angular.io/)**: Para design responsivo e componentes UI.
- **[TypeScript](https://www.typescriptlang.org/)**: Usado no frontend para maior tipagem e segurança.
---

## 🔹 **Estrutura do Projeto**

```plaintext
CRUD-Angular-RubyOnRails/
├── ecommerce_api/      # Backend (Ruby on Rails)
├── ecommerce_front/    # Frontend (Angular)
```

---

## 💻 **Como Rodar o Projeto**

### **1. Clonar o Repositório**

```bash
git clone https://github.com/seu-usuario/CRUD-Angular-RubyOnRails.git
cd CRUD-Angular-RubyOnRails
```

---

### **2. Backend** 🔧

#### Passos:

1. **Acesse a pasta do backend:**
   ```bash
   cd ecommerce_api
   ```
2. **Instale as dependências:**
   ```bash
   bundle install
   ```
3. **Configure o banco de dados:**
   ```bash
   rails db:create db:migrate db:seed
   ```
4. **Inicie o servidor:**
   ```bash
   rails server
   ```

O backend estará disponível em **[http://localhost:3000](http://localhost:3000)**.

---

### **3. Frontend** 🌐

#### Passos:

1. **Acesse a pasta do frontend:**
   ```bash
   cd ecommerce_front
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Inicie o servidor Angular:**
   ```bash
   ng serve
   ```

O frontend estará disponível em **[http://localhost:4200](http://localhost:4200)**.

---

## 🌈 **Funcionalidades**

1. **Listagem de Produtos**:
   - Tabela interativa com colunas para nome, preço e estoque.
   - Ações de editar e excluir produtos diretamente na tabela.

2. **Adicionar Produto**:
   - Formulário dinâmico para adicionar novos produtos ao sistema.

3. **Editar Produto**:
   - Permite atualizar informações como nome, preço e estoque.

4. **Excluir Produto**:
   - Exclusão com confirmação para evitar ações acidentais.

5. **Design Responsivo**:
   - Interface moderna e consistente projetada com **Angular Material**.

---

## 📁 **Endpoints Disponíveis**

### **Backend**
- **GET /products**  
  Retorna a lista de produtos.

- **POST /products**  
  Adiciona um novo produto.

- **PUT /products/:id**  
  Atualiza um produto existente.

- **DELETE /products/:id**  
  Remove um produto.

---
