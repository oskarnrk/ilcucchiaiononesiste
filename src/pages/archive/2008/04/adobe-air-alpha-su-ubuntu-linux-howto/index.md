---
layout: "../../../../../layouts/BlogPost.astro"
title: "Adobe AIR alpha su Ubuntu Linux [howto]"
date: "2008-04-02"
categories: 
  - "howto"
  - "linux-informatica"
  - "social"
tags: 
  - "adobe-air"
  - "alpha"
  - "linux"
  - "twhirl"
  - "twitter"
  - "ubuntu"
---

Adobe AIR su Linux è finalmente una realtà, divenuta tale dopo l'annuncio di qualche tempo fa, che avevo anche [commentato](http://oskarnrk.blogspot.com/2008/02/adobe-air-su-linux-s-ma.html). Ok, la Adobe giustifica alcuni malfunzionamenti con lo stato di alpha, ma direi che molti utenti possono dirsi già contenti così. Quindi, squillino le trombe... Prova su strada! Premetto che uso Ubuntu 8.04, la beta di Hardy Heron, ma ho letto che su tutte le distribuzioni l'installazione è semplice. Andate alla [pagina di Adobe Labs](http://labs.adobe.com/downloads/air_linux.html) e scaricatevi il file .bin di AIR per Linux, che già dal nome comprensivo di data del rilascio fa molto "developing version". Una volta scaricato aprite il terminale (eh sì, lo trovo più veloce) e date i permessi di esecuzione:

> chmod +x adobeair\_linux\_a1\_033108.bin

Poi, sempre da terminale, lanciatelo!

> ./adobeair\_linux\_a1\_033108.bin

Nelle distro con sudo vi verrà chiesta la password. Seguite le indicazioni a video ed è fatta. Attenzione: se lanciate l'installazione mentre avete aperto il gestore pacchetti, nel mio caso Synaptic, vi darà errore. Succede perché l'installer crea dei pacchetti temporanei di installazione, in pratica sfrutta dpkg. Questo vale anche per quando installate le applicazioni AIR. Ora non vi resta che andare a scaricarvi qualche applicazione. Io aspettavo con ansia AIR solo per [Twhirl](http://www.twhirl.org/), client per twitter. Sono andato sul sito, ho scaricato il file .air che si è aperto direttamente da Firefox con l'applicazione Adobe Air installer, oppure basta salvarlo da qualche parte e doppioclick. Una volta installato (in /opt) mi ha creato un'icona sul desktop e nel menu Altro. Lanciate, et voilà!

[![](/images/20080402_Twhirl.jpg)](http://bp0.blogger.com/_aoeiUc3_q0U/R_NTpen-AmI/AAAAAAAAAbQ/Hp8nLZf4ljg/s1600-h/20080402_Twhirl.jpg)Screenshot del mio desktop con Twhirl in trasparenza

Aspetti negativi Purtroppo, com'è lecito aspettarsi, ce ne sono diversi. Intanto se volete ad esempio Twhirl come su Win/Mac dovete avere l'accelerazione grafica attiva altrimenti un brutto bordo nero e... vi farà schifo, espressione elementare ma azzeccata. Pare che non abbiano ancora implementato bene l'integrazione con il vassoio di sistema, infatti se minimizzate la finestra sparisce ma il programma rimane attivo, vi tocca killarlo da terminale o dal monitor di sistema. Per il resto ho notato che ogni tanto non fa i popup di avviso nuovi tweet. Ora provo altre applicazioni, tipo eBay Desktop. Conclusioni ...non lamentiamoci, è già tanto che sia già arrivata l'alpha ^\_^ Aggiunte I popup non li fa se non marcate letti i messaggi precedenti. Ho iniziato a fare Mark all as seen e ora funzionano. Come workaround per il vassoio di sistema installate AllTray, è nei repo di Ubuntu, altrimenti trovate la pagina del progetto [QUI](http://alltray.sourceforge.net/).
