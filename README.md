# EBAC Shop Mobile Automation

Projeto de automação mobile do aplicativo EBAC Shop usando WebDriverIO + Appium.

## Objetivo

Validar o fluxo principal de uso do aplicativo em um emulador Android, com foco em:
- login
- navegação
- validação de elementos e mensagens
- organização do código

## Requisitos

- Node.js
- Java JDK
- Android SDK
- Android Studio
- Appium Server
- Emulador Android ativo
- APK do aplicativo EBAC Shop dentro da pasta `app/`

## Estrutura do projeto

```text
.
├── app/
│   └── .gitkeep
├── test/
│   ├── pageobjects/
│   │   ├── home.page.js
│   │   ├── login.page.js
│   │   └── profile.page.js
│   └── specs/
│       └── login.test.js
├── .gitignore
├── package.json
├── wdio.conf.js
└── README.md
```

## Como rodar

1. Instale as dependências:

```bash
npm install
```

2. Coloque o APK do app EBAC Shop em `app/ebacshop.apk`.

3. Inicie o Appium Server:

```bash
appium
```

4. Inicie o emulador Android ou conecte um dispositivo real.

5. Execute os testes:

```bash
npm test
```

## Observação

A pasta `app/` fica localmente no ambiente para armazenar o APK do aplicativo, e não é versionada no GitHub.
