---
layout: "../../../../../layouts/BlogPost.astro"
title: "Vista vs Alcohol 120%: risolvere il crash con schermata blu"
date: "2007-03-08"
categories: 
  - "howto"
  - "linux-informatica"
  - "windows-informatica"
tags: 
  - "alcohol"
  - "crash"
  - "vista"
  - "windows"
---

10/01/2008: guida corretta e modificata a favore di chi usa una distribuzione da live cd. Grazie [Alessio Padovani](http://goodsup.blogspot.com/)! Sul mio portatile nuovo, HP dv6276ea, c'è Winzozz Vista installato di default. Collegato alla corrente e acceso, la prima cosa che ho fatto è stato installarlo, per dire un «wow..» ironico, riavviare con il cd di Ubuntu e installare. Tengo sVista solo per giocare in LAN con gli amici. Per questo avevo bisogno di caricare l'immagine di un cd. Ho installato il primo programma utile a montare immagini che mi è capitato a tiro, e nonostante i preferisca i Daemon Tools, era Alcohol 120%. Subito prima di cliccare "Fine" dell'installazione ecco la sorpresa: [schermata blu](http://www.gdargaud.net/Humor/Pics/BlueScreen.jpg)! C'è pure su sVista allora (non quella del link)! Ho penato un po' in Rete, fino a trovare la soluzione. Lo sporco lavoro l'ho fatto con Ubuntu 7.04 "Feisty Fawn" Herd5, che ha già di default quello che ci serve. Dico subito che quando userò il comando sudo intendo dire che il comando deve essere eseguito come utente root (specifico per gli utenti di altre distro). Requisiti minimi

- ultima versione degli ntfstools (contiene il comando ntfsfix) (presente in Ubuntu 7.10 "Gutsy Gibbon")
- ntfs-3g (per mountare le partizione NTFS in lettura/scrittura) (presente in Ubuntu 7.10 "Gutsy Gibbon")

Procedimento in Linux (seguito dai comandi usati nel mio caso)

1. applicare ntfsfix alla partizione winzozz, per sistemare l'eventuale tabella NTFS danneggiata: sudo ntfsfix /dev/sda1
2. creare la cartella nella quale si monterà la partizione: sudo mkdir /media/vista
3. mountare di forza la partizione in lettura/scrittura: (corretto) sudo mount -o force /dev/sda1 /media/vista
4. andare nella partizione montata, nella cartella dei drivers di winzozz: (corretto) cd /media/vista/Windows/System32/drivers/
5. rinominare il file a347bus.sys (è quello che crea problemi!): sudo mv a347bus.sys a347bus.xxx
6. riavviare sotto winzozz.

Ecco che il sistema non vede più il driver di Alcohol 120% e si avvia regolarmente, magari dopo un chkdsk all'avvio. Una volta dentro disinstallare Alcohol, anche se nel mio caso aveva solo copiato i drivers e creato le shortcuts nel menù dei programmi. E il gioco è fatto :) Se dovete montare un'immagine sotto sVista installate i Daemon Tools, li ho testati e sono funzionanti.
