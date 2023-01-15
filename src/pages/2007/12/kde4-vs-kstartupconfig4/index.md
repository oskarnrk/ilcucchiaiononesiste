---
layout: "../../../../layouts/BlogPost.astro"
title: "KDE4 vs kstartupconfig4"
date: "2007-12-14"
categories: 
  - "howto"
  - "linux-informatica"
tags: 
  - "kde"
---

Mi sono fatto travolgere dalla febbre collettiva per KDE4, la nuova versione del desktop environment che uscirà ufficialmente (pare) l'11 gennaio 2008. In circolazione ci sono già KDE4 RC1 e da un paio di giorni la Release Candidate 2. Ho così seguito le [istruzioni](http://kubuntu.org/announcements/kde4-rc2.php) pubblicate sull'annuncio di [kubuntu.org](http://kubuntu.org/) in modo da installarla tranquillamente da repository sulla mia Ubuntu.

[![](/images/kde4-hug.jpg)](http://www.elblogdemaverick.com/uploads/kde4-hug.jpg)Devo ancora capire come è messo lì Konqui

Problema: chiudo la sessione di GNOME, appare gdm, scelgo "KDE 4" dal menu delle possibili sessioni, dico "solo per questa volta", user, pass: appare una schermata nera con una finestra in alto a sinistra, che dice

> Could not start kstartupconfig4. Check your installation.

Uhm. Do l'OK, un'altra finestra mi dice che la sessione è durata meno di 10 secondi, posso vedere un log che puntualmente apro, e riporta un errore di Permission denied nella cartella /home/user/.kde4, allora rientro in GNOME e controllo i permessi. Beh, per il mio utente non è nemmeno apribile quella cartella, non capisco perché non lo sia nemmeno con sudo. Vabbè, dico, tanto è una RC, smanetto coi permessi, rendendo così quella cartella, le sue sottocartelle e i files di proprietà del mio utente e del mio gruppo utente. Ricomincio il giro, e questa volta si avvia KDE4! Gioia et jubilo, inizio a smanettarci... Qualcuno ha avuto problemi simili? Avete consigli?
