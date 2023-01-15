---
layout: "../../../../layouts/BlogPost.astro"
title: "Problemi con Flash integrato in Chrome 20 su Ubuntu 12.04"
date: "2012-06-29"
categories: 
  - "howto"
  - "informatica"
  - "internet"
  - "linux-informatica"
tags: 
  - "adobe"
  - "chrome"
  - "flash"
  - "google"
  - "linux"
  - "ubuntu"
---

Dopo l'aggiornamento di **Google Chrome** 20 (versione _stable_, da repository ufficiale Google) sulla mia **Ubuntu 12.04** ho notato diversi problemi in alcuni siti. Ad esempio guardando i video su YouTube se provavo ad espanderne la descrizione il pannello scorreva ma non veniva visualizzato bene, oppure scorrendo alcuni articoli della Gazzetta dello Sport contenenti video la barra grigia in basso rimaneva sospesa sulla pagina. Il problema si è rivelato essere **Adobe Flash**. Google Chrome infatti ha una sua versione autocontenuta ed essendo abilitata sia questa che quella installata nel sistema viene usata di default la prima. Ho provato a disabilitare quella integrata, lasciando lavorare la seconda, e tutto è tornato a funzionare. Come si fa?

- Si deve andare nella pagina dei _plugins_: nella _omnibar_ scrivete **_chrome:plugins_** e avrete la lista di quelli usati dal browser
- cercate la voce _Flash_, nel mio caso seguita dalla dicitura _(2 files)_
- espandete i dettagli cliccando il **+** in alto a destra, vedrete le due versioni
- cliccate _Disable_ per la versione che ha come percorso di installazione la location _/opt/google/chrome/PepperFlash/libpepflashplayer.so_ e il gioco è fatto

Provate a ricaricare le pagine che davano problemi, ora tutto dovrebbe essere tornato a funzionare al meglio. Ovviamente per tornare indietro basta seguire questa procedura e scegliere il plugin Flash che preferiamo.
