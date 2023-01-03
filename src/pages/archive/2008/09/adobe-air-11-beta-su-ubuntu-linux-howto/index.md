---
layout: "../../../../../layouts/BlogPost.astro"
title: "Adobe AIR 1.1 beta su Ubuntu Linux [HowTo]"
date: "2008-09-19"
categories: 
  - "howto"
  - "linux-informatica"
  - "social"
tags: 
  - "adobe-air"
  - "intrepid-ibex"
  - "linux"
  - "twhirl"
  - "twitter"
  - "ubuntu"
---

Sono stato [poco online](http://twitter.com/OskarNRK/statuses/926069079) in questi giorni purtroppo, quindi stanotte ho recuperato girovagando a destra e a manca. Per curiosità ho controllato se per grazia divina fosse uscita una nuova versione di Adobe AIR per Linux, e con mia somma sorpresa il signor Adobe (mi piace pensare che esista un tale Benjamin Adobe a capo di tutto...) ha rilasciato **Adobe AIR 1.1 beta per Linux**. Al tempo dell'alpha avevo scritto una piccola guida per installarlo, quindi ora scrivo qualche indicazione per chi ha provato a installare la nuova versione ma ha avuto qualche difficoltà, o per chi ancora non l'ha fatto e non vuole avere problemi. Chi non l'ha mai installato ovviamente salti i passaggi di pulitura del sistema dalla versione precedente.

## HowTo

Prima di tutto chiudete tutte le applicazioni AIR che state usando. Nel mio caso in buonissimo [twhirl](http://www.twhirl.org), client per Twitter, FriendFeed, identi.ca, laconi.ca e seesmic. Ora è necessario disinstallare (da terminale o gestore dei pacchetti poco importa) il pacchetto _adobeair-enu_, non è altro che l'installazione precedente.

> sudo apt-get remove --purge adobeair-enu

Adesso cancellate la directory _/opt/Adobe AIR_ (ovviamente servono i diritti di amministrazione):

> sudo rm -rf /opt/Adobe AIR

Scaricate la nuova versione dal [sito ufficiale Adobe Labs](http://labs.adobe.com/downloads/air_linux.html). Ottenuto il file .bin bisogna renderlo eseguibile.

> chmod +x adobeair\_linux\_b1\_091508.bin

Facendo ben attenzione a **non avere aperto nessun gestore dei pacchetti** (perché l'installer crea dei pacchetti temporanei di installazione, in pratica sfrutta dpkg, e questo vale anche per quando installate le applicazioni AIR) lanciamo il binario:

> ./adobeair\_linux\_b1\_091508.bin

Basta seguire l'interfaccia grafica e il gioco è fatto. D'ora in poi scaricando un'applicazione AIR (in pratica il file _.air_) un semplice doppio click ci lancerà l'installazione, con la precauzione scritta poco sopra.

## Prova su strada

Ho provato l'accrocchio per poco (l'ho installato alle 3:30 stanotte, abbiate pazienza) ma ho notato subito due importantissime migliorie: ora **le applicazioni ricordano le password** inserite e **sfruttano l'area di notifica** del sistema!

[![twhirl su Ubuntu Linux con Adobe AIR 1.1 beta](/images/2869519697_f8423eefaa_m.jpg)](http://www.flickr.com/photos/21616613@N06/2869519697/ "twhirl su Ubuntu Linux con Adobe AIR 1.1 beta")

Se ci sono problemi, suggerimenti, indicazioni, esplosioni di cui non mi reputo in ogni caso responsabile... beh, i commenti sono lì apposta :)
