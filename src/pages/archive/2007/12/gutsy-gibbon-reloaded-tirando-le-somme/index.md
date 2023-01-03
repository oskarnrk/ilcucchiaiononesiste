---
layout: "../../../../../layouts/BlogPost.astro"
title: "«Gutsy Gibbon» reloaded, tirando le somme"
date: "2007-12-01"
categories: 
  - "linux-informatica"
tags: 
  - "gutsy-gibbon"
  - "ubuntu"
---

Dopo aver cercato in tutti i modi di sistemare i piccoli problemi che affliggevano (affliggono?) la mia linux-box con metodi poco invasivi avevo deciso di ripulire tutto, come detto nei post [Il Gibbone non sta bene](http://oskarnrk.blogspot.com/2007/10/il-gibbone-non-sta-bene.html) e [Colpo di spugna: «Gutsy Gibbon» reloaded](http://oskarnrk.blogspot.com/2007/11/colpo-di-spugna-gutsy-gibbon-reloaded.html). Prima ho accolto il suggerimento di Marco Boneff aka [Neff](http://www.marco.boneff.ch/blog/), cancellando le cartelle nascoste della home e partendo quindi da un profilo pulito. Poi però ho optato per una reinstallazione di Gutsy, formattando la partizione di sistema e non toccando quella della /home, mantenendo tutti i miei files. Ecco il risultato:

- errore failed to allocate mem resource #6 al boot: non risolto, questo [bug conosciuto](https://bugs.launchpad.net/bugs/54294) c'è ancora, anche dopo la reinstallazione del sistema, non è sparito come dopo la mia reinstallazione di Edgy a suo tempo
- il sistema, d'un tratto, si riavvia, così tanto per: RISOLTO, o meglio non l'ha più fatto
- mentre scrollo con Firefox (ma anche con Synaptic...) freeze momentaneo del sistema, che quando ritorna usabile "sfarfalla" mostrando qualche refresh nero: non risolto, purtroppo, almeno per ora... Leggendo il forum internazionale di Ubuntu pare sia un problema condiviso da tanti. Ho provato a seguire l'indicazione by notorious di [disattivare Pango](http://www.techlog.netsons.org/pc/linux/guide/firefox-font-scroll-264/), vediamo se servirà a qualcosa
- lanciando un'applicazione che vuole i diritti di amministrazione le finestre appaiono vuote, si notano solo spazi bianchi al posto dei riquadri di input finché non si killa gksu dal Monitor di sistema: RISOLTO, il consiglio di Neff per avere un profilo pulito ha funzionato

Un ringraziamento ai già citati commentatori dei post per le indicazioni, se qualcosa peggiora o migliora sarete informati via [TuxFeed](http://www.tuxfeed.it) :)
