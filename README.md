# Le Chat

## Pages

- auth
  - register
  - login
- chat
  - general
  - :rooms

## Components

### 1. AuthForm

Composant qui permet de register et login
avec un switch pour changer le texte et comportement de l'envoi du formulaire

### 2. LeChat (le container du chat)

Divisé en 3 grandes parties

#### 2.1. LeChatTabs

Le choix des salons via des liens/tabs/boutons

#### 2.2. LeChatMessages

Affichage des messages recus

#### 2.3. LeChatPush

Champs permettant d'ecrire un message et de l'envoyer via socket.io

### 3. TheHeader

Afficher le Logo et l'adresse email.

## Stores

- auth.store

Actions
(login, register, checkToken, logout)

- chat.store

Actions
(sendMessage, addMessage, setWriting, changeRoom)

