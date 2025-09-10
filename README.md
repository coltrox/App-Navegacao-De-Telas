# 📱 APP DE NAVEGAÇÃO DE TELAS

## ✅ Funcionalidades principais

* Tela de Login simples com usuário **admin** e senha **1234**.
* Opção **Continuar conectado** para manter o usuário logado usando **AsyncStorage**.
* Persistência da última tela acessada (**Home, Perfil ou Detalhes**) ao reiniciar o app.
* Navegação via menu lateral (**Drawer**) com acesso às principais telas.
* Botão de **logout** no menu para encerrar a sessão imediatamente.
* Navegação protegida por autenticação, bloqueando acesso sem login.
* **Lista dinâmica na Home** usando `FlatList` (exibição de notícias/itens).
* **Informações organizadas no Perfil** usando `SectionList` (dados pessoais e preferências em seções).

---

## ℹ️ Sobre a implementação

Para simplificar e tornar o código mais legível, o **Drawer** foi colocado na pilha de navegação (**Stack Navigator**), sem a necessidade de um container separado para o Drawer.

O Drawer oferece um menu lateral fácil de usar para acessar as telas **Home, Perfil e Detalhes**, além de um botão para **logout**.

Quando o usuário ativa a opção **“Continuar conectado”**, o app salva o estado do login e a última tela acessada no **AsyncStorage**. Assim, ao reiniciar o app, o usuário é automaticamente redirecionado para a última tela visitada, mantendo a sessão ativa, o que melhora muito a experiência de uso.

Além disso, para enriquecer as telas:

* A **Home** agora exibe uma lista dinâmica usando `FlatList`.
* O **Perfil** organiza informações em grupos usando `SectionList`.

---

## 🚀 Como rodar o projeto

1. Clone o repositório

```bash
git clone https://github.com/coltrox/MeuAppNavegacao_PedroColtro.git
cd MeuAppNavegacao_PedroColtro
```

2. Instale as dependências

```bash
npm install
```

3. Inicie o app com Expo

```bash
npx expo start --tunnel
```

---

## 🔐 Credenciais de Acesso

* **Login:** admin
* **Senha:** 1234

---

## 📦 Dependências principais

* expo
* @react-navigation/native
* @react-navigation/drawer
* @react-navigation/stack
* react-native-gesture-handler
* @react-native-async-storage/async-storage
* expo-linear-gradient

Todas as dependências são instaladas automaticamente com `npm install`, desde que o `package.json` esteja configurado.

---

## 📁 Estrutura do Projeto

```
MeuAppNavegacao_PedroColtro/
│
├── App.js                    # Navegação principal (Stack + Drawer)
├── index.js                  # Entrada do app com registerRootComponent
├── src/
│   └── screens/
│       ├── LoginScreen.js    # Tela de login com AsyncStorage
│       ├── HomeScreen.js     # Tela inicial com FlatList
│       ├── DetailsScreen.js  # Tela de detalhes
│       ├── ProfileScreen.js  # Tela de perfil com SectionList
│       └── LogoutScreen.js   # Encerramento de sessão
```
adicione também no **README** um trecho de código de exemplo mostrando o `FlatList` e o `SectionList` (só pra quem abrir o repositório entender rápido o que foi feito)?
