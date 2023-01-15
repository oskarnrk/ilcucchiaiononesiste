---
layout: "../../../../layouts/BlogPost.astro"
title: "Adobe AIR 1.5 su Ubuntu Linux [how to]"
date: "2008-12-19"
categories: 
  - "howto"
  - "linux-informatica"
tags: 
  - "adobe-air"
  - "linux"
  - "twhirl"
---

[![](/images/2376777717_cfa10878f6_o.png "Adobe AIR")](http://www.adobe.com/it/products/air/)Anno Domini 2008, 18 dicembre. Adobe ha rilasciato **Adobe AIR 1.5 per Linux**. Alla buon'ora direi, visto che noi pinguini avevamo bisogno di una versione particolare di [twhirl](http://www.twhirl.org) 0.8.7, essendo questa creata per la versione 1.5. Gentilissimo sicuramente il team di twhirl che l'ha rilasciato, certo è che a noi non piace stare indietro con le release. Non ne avevo troppa voglia, ma anche in questo caso ho creato una piccola guida per installare questa versione. Requisito: avere installata la versione precedente. Un ringraziamento all'amico [Fabrizio Sinopoli](http://www.fabriziosinopoli.it), collega pinguino, juventino (nessuno è perfetto :P).

## HowTo

Chiudete tutte le applicazioni AIR che state usando. Disinstallate (da terminale o gestore dei pacchetti poco importa) il pacchetto _adobeair1.0_, non è altro che l'installazione precedente.

> sudo apt-get purge adobeair1.0

Adesso cancellate la directory _/var/opt/Adobe AIR_ (ovviamente servono i diritti di amministrazione):

> sudo rm -rf /var/opt/Adobe AIR

Scaricate la nuova versione dal [sito ufficiale Adobe Labs](http://get.adobe.com/air/). Com'è possibile notare, non c'è più una pagina Adobe Labs separata per Linux, il che è una bella sensazione, siamo ufficialmente supportati? Ottenuto il file .bin, rendetelo eseguibile.

> chmod +x AdobeAIRInstaller.bin

Facendo ben attenzione a **non avere aperto nessun gestore dei pacchetti** (perché l'installer crea dei pacchetti temporanei di installazione, in pratica sfrutta dpkg, e questo vale anche per quando installate le applicazioni AIR) lanciate il binario:

> ./AdobeAIRInstaller.bin

Basta seguire l'interfaccia grafica e il gioco è fatto. D'ora in poi scaricando un'applicazione AIR (in pratica il file _.air_) un semplice doppio click ci lancerà l'installazione, con la precauzione scritta poco sopra.

Come al solito se ci sono problemi, suggerimenti, indicazioni, perdite di dati e detonazioni di cui non mi reputo in ogni caso responsabile... esistono i commenti.
