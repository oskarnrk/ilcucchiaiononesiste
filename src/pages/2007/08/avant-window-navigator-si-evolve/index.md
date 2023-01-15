---
layout: "../../../../layouts/BlogPost.astro"
title: "Avant Window Navigator si evolve"
date: "2007-08-19"
categories: 
  - "howto"
  - "linux-informatica"
tags: 
  - "awn"
  - "repository"
  - "ubuntu"
---

Questa mattina, come ogni sacrosanta mattina, ho controllato gli aggiornamenti dei repositories della mia Ubuntu Feisty, e come spesso accade c'era un aggiornamento per [Avant Window Navigator](https://launchpad.net/awn). Fino a un po' di tempo fa lo sviluppo di questo progetto era ospitato su Google Code e utilizzava Subversion, ma dopo essersi ingrandito è passato a Launchpad e a Bazaar Version Controller. Preferendo per pigrizia la comodità dei repositories ne ho cercato uno che mi potesse dare sempre l'ultima versione con il minor sforzo. Eccolo:

> deb http://download.tuxfamily.org/syzygy42/ feisty avant-window-navigator deb-src http://download.tuxfamily.org/syzygy42/ feisty avant-window-navigator

Per autenticare il repository:

> wget http://download.tuxfamily.org/syzygy42/8434D43A.gpg -O- | sudo apt-key add -

Date un sudo apt-get update ed installate avant-window-navigator-bzr. Ecco le novità degli ultimi periodi a occhio, non seguendo l'eventuale Changelog:

- scelta di aver la barra flat oppure 3D-look con relativi controlli su angolazione, dimensioni e offset delle icone, cosa che si poteva fare fino a poco tempo fa soltanto con gconf-editor
- scelta delle applets, ovviamente la principale launchbar/taskbar, ma anche il cestino, separatori, notification area (ancora non ho capito come funziona), workspace switcher (non mi piace per ora) ma soprattutto lo stack, una specie di Esplora cartella integrato, dal quale si possono navigare le cartelle, aprirle all'occorrenza, lanciare files!
- ovviamente la possibilità di aggiungere e rimuovere i launchers, oppure modificarne l'ordine
- chicca dell'ultim'ora il theme manager, dal quale potete installare nuovi temi per la barra (anche con semplice drag'n'drop dalla cartella) e cambiarli secondo la vostra meteopatica abitudine.

La domanda sorge spontanea: dove trovo i temi? Beh, per ora ne ho trovato uno solo tramite [questo blog](http://thelinuxmovement.blogspot.com/2007/08/awn-manager-now-in-latest-bzr.html), ma penso cresceranno come funghi. Insomma, parliamo di installazione comoda e configurazione facile, cosa vuoi di più dalla vita? ...un Montenegro! (un saluto a Ome e Santu, eheheh!)
