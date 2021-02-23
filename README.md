# Welcome to my portfolio 👋
![Version](https://img.shields.io/badge/Version-1.6-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](#)
[![Open Source Love png1](https://badges.frapsoft.com/os/v1/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/)

> This is my portfolio, here I will show to you my skills, projects, a piece of my history as web developer, among other things.

### 🏠 [Homepage](https://patogordo.ga)

## :bookmark_tabs: Content

- [:zap: Features](#features-zap)
- [:hammer_and_pick: Usage](#usage-hammer_and_pick) <br>
&nbsp;&nbsp; - [:gear: Firebase Configuration](#firebase-configuration-gear)<br>
&nbsp;&nbsp; - [:gear: EmailJs Configuration](#emailjs-configuration-gear)<br>
- [:sparkles: Observations](#observations-sparkles)
- [:handshake: Show your support](#show-your-support-handshake)
- [:technologist: Author](#author-technologist)

---

## Features :zap:
[![Deployed in Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://patogordo.ga)
[![Vuejs](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)](https://vuejs.org/)
[![Less](https://img.shields.io/badge/Less-1d365d?style=for-the-badge&logo=less&logoColor=white)](http://lesscss.org/)
[![Firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=white)](https://firebase.google.com/)
[![EmailJs](https://github.com/PatoGordo/PatoGordo/blob/main/Images/EmailJsBadge.svg)](https://www.emailjs.com/)

## Usage :hammer_and_pick:

### Firebase configuration :gear:
- Open the 'Src/Services/firebase.js' and put there your firebase app credentitals.
```sh
  const firebaseApp = firebase.initializeApp({
    apiKey: "<Your-Firebase-ApiKey>",
    authDomain: "<Your-Firebase-AuthDomain>",
    databaseURL: "<Your-Firebase-DatabaseURL>",
    projectId: "<Your-Firebase-ProjectId>",
    storageBucket: "<Your-Firebase-StorageBucket>",
    messagingSenderId: "<Your-Firebase-MessagingSenderId>",
    appId: "<Your-Firebase-AppId>"
  })
```
- Change your firebase firestore rules
```sh
  rules_version = '2';
  service cloud.firestore {
    match /databases/{database}/documents {
      match /{document=**} {
        allow create: if request.auth == null;
        allow read, write: if request.auth.uid == '<Your-Admin-UID>';
        allow read: if request.auth.uid == '<Your-Observer-UID>'; // Optional
      }
    }
  }
```
### EmailJs Configuration :gear:
- Open the 'Src/Services/emailjs.js' and put your User Id
```sh
  (function() {
    emailjs.init("<Your-UserId>")
  })()
```
- Open your EmailJs Dashboard and create a new template <br>
&nbsp;&nbsp; - Create a template with your style, the email js will recive {{id}} {{email}} {{name}} {{message}} from the website. <br>
- Open the 'Src/Pages/contacts.vue.js' and in line 25 put your template configs
```sh
  emailjs.send('<service-id>', '<template-id>', this.contact // contact to send)
```
 Click here to see [EmailJs Integration](https://dashboard.emailjs.com/admin/integration) docs

***

> ## Observations :sparkles:
> ***Now the site uses Lessjs instead of CSS.*** <br>
> If you would like to use the CSS version click on the link below. <br>
>[This version is made using CSS](https://github.com/PatoGordo/PatoGordo/tree/main/Old%20Releases) (_**This version will not receive new updates!**_)


## Show your support :handshake:

Give a ⭐️ if this project helped you!<br>
Makes a [pull request](https://github.com/PatoGordo/patogordo.ga/pulls) adding new features or solving bugs. <br>
Create a [Issue](https://github.com/PatoGordo/patogordo.ga/issues) if you don't want to implement the feature or fix the bug. <br>

## Author :technologist:

**PatoGordo**

* Website: [https://patogordo.ga](https://patogordo.ga) <br>
* Twitter: [@Patogordoo](https://twitter.com/Patogordoo) <br>
* Github: [@PatoGordo](https://github.com/PatoGordo) <br>

***
