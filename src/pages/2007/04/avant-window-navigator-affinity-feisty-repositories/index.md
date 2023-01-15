---
layout: "../../../../layouts/BlogPost.astro"
title: "Avant Window Navigator & Affinity: Feisty repositories"
date: "2007-04-12"
categories: 
  - "howto"
  - "linux-informatica"
tags: 
  - "awn"
  - "deb"
  - "repository"
  - "ubuntu"
---

Ci sono stati tantissimi tentativi di creare docks per Linux sull'idea della barra animata di MacOSX. Per un periodo ho usato quella di gDesklets sotto Gnome, poi ho evitato di usare soluzioni create ad hoc, ancora immature ed instabili. Poi anche grazie a [felipe](http://pollycoke.wordpress.com) ho trovato la [Avant Window Navigator](http://awn.wetpaint.com/), che ha avuto un successo immediato nonostante sia continuamente in sviluppo. Ho installato una versione pacchettizzata da lui, ma preferisco le soluzioni pulite, ossia i buoi vecchi repositories. Ebbene, dopo quelli per Edgy ecco i nuovi repo per Feisty:

> deb http://apt.schmidtke-hb.de/ feisty main deb-src http://apt.schmidtke-hb.de/ feisty main

Dopo il solito update, per avere il dock si deve installare il pacchetto avant-window-navigator. Per quanto riguarda l'altra applicazione sviluppata dallo stesso team, [Affinity](http://awn.wetpaint.com/page/Affinity), le idee sono tante, ma la stabilità per quanto mi riguarda ancora manca. Se lanciato piazza un'icona nell'area di notifica, è ancora poco personalizzabile (a meno che non ci si mettano le mani con gconf-editor, ma anche lì ci si fa poco), mentre l'applet per il pannello mi crasha inesorabilmente. Quindi per ora non lo consiglio. A chi non fosse chiaro: per far funzionare entrambe le applicazioni è necessario avere attivo compiz (non cito beryl per il semplice fatto che È compiz, sono tornati ad essere un progetto solo ormai).
