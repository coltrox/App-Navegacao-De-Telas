# 📱 APP DE NAVEGAÇÃO DE TELAS

## ✅ Funcionalidades

* Tela de Login com validação simples (`admin` / `1234`)
* **Opção "Continuar conectado" com `Switch`**
* Armazenamento de sessão com `AsyncStorage`
* Menu lateral (Drawer) com botão de logout
* Navegação protegida por autenticação
* Estilização com `StyleSheet` e `expo-linear-gradient`

---

## 🚀 Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/coltrox/MeuAppNavegacao_PedroColtro.git
cd MeuAppNavegacao_PedroColtro
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o app com Expo

```bash
npx expo start --tunnel
```

---

## 🔐 Credenciais de Acesso

* **Login:** `admin`
* **Senha:** `1234`

---

## 📦 Dependências principais

* `expo`
* `@react-navigation/native`
* `@react-navigation/drawer`
* `@react-navigation/stack`
* `react-native-gesture-handler`
* `@react-native-async-storage/async-storage`
* `expo-linear-gradient`

> Todas essas dependências serão instaladas automaticamente com `npm install` se o `package.json` estiver configurado corretamente.

---

## 📁 Estrutura do Projeto

```
MeuAppNavegacao_PedroColtro/
│
├── App.js                    # Lógica de navegação (Stack e Drawer)
├── index.js                  # Ponto de entrada do app com registerRootComponent
├── src/
│   └── screens/
│       ├── LoginScreen.js
│       ├── HomeScreen.js
│       ├── DetailsScreen.js
│       ├── ProfileScreen.js
│       └── LogoutScreen.js
```
