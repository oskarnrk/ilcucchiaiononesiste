---
layout: "../../../../layouts/BlogPost.astro"
title: "Rimuovere tutti i pannelli di GNOME in Ubuntu"
date: "2009-11-05"
categories: 
  - "howto"
  - "linux-informatica"
tags: 
  - "awn"
  - "gnome-panel"
  - "ubuntu"
---

Molti utenti di [Ubuntu](http://www.ubuntu-it.org "Ubuntu It") e altre distribuzioni GNU/Linux utilizzano barre delle applicazioni diverse da quelle standard offerte da GNOME, come ad esempio [Avant Window Navigator](https://launchpad.net/awn/ "Avant Window Navigator su Launchpad"). Facendo delle variazioni grafiche ho provato ad eliminare tutti i pannelli in modo da usare solo AWN con le varie applet che mette a disposizione, ma non era possibile eliminare il pannello principale. **Notate bene** che **una volta fatte queste operazioni sarete senza il solito menu, quindi preparate prima la vostra barra preferita con le applet necessarie da sostituire in tutto e per tutto lo standard offerto dal sistema**. Ecco come si fa (procedimento eseguito in Ubuntu 9.10 "Karmic Koala"):

- lanciate **_gconf-editor_** (da terminale, o con _Alt+F2_, o nel menu da _Applicazioni > Strumenti di sistema > Editor della configurazione_)
- nella struttura ad albero andate su _desktop > gnome > session > required\_components_
- alla voce _panel_ troverete _gnome-panel_, con un doppio click potete modificarlo, metteteci il comando per lanciare la vostra barra preferita (nel mio caso _avant-window-navigator_)
- chiudete, fate logout e di nuovo login.

A questo punto il pannello standard sarà sparito e avrete solo la barra che avete scelto. Se volete tornare indietro - come ho fatto io dopo 2 minuti con la nuova grafica, ho sentito subito la mancanza della grafica standard - seguite gli stessi passi appena elencati rimettendo la voce _gnome-panel_ dov'era.
