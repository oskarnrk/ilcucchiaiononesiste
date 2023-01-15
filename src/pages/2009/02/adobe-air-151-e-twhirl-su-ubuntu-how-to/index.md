---
layout: "../../../../../layouts/BlogPost.astro"
title: "Adobe AIR 1.5.1 e Twhirl su Ubuntu [how to]"
date: "2009-02-25"
categories: 
  - "howto"
  - "linux-informatica"
  - "social"
tags: 
  - "adobe-air"
  - "jaunty-jackalope"
  - "linux"
  - "twhirl"
  - "ubuntu"
---

Leggendo per caso un [twit](http://twitter.com/Gioxx/status/1249127117 "Gioxx on Twitter") di [Gioxx](http://gioxx.org/ "Gioxx's Wall") ho appreso dell'aggiornamento di **Adobe AIR**. Giusto per non perdere il vizio ecco la guida per installarlo in maniera pulita su Ubuntu (nel mio caso - ora come ora - _Jaunty Jackalope Alpha 4_). Non è un copincolla delle istruzioni che ho scritto in altri post, mi spiego: da un bel pezzo [twhirl](http://www.twhirl.org), giunto alla versione 0.9, **non mi salvava la password**. È un problema a cui ero abituato con le versioni alpha e beta di AIR, ma ora lo ritengo inaccettabile. Parlando terraterra mi sono rotto e con una ricerchina in Google ho trovato la [soluzione](http://getsatisfaction.com/seesmic/topics/twhirl_0_8_7_linux_now_broken_due_to_adobe_air_1_5_linux_self_upgrade). Ciàpa qua.

## HowTo

Chiudere tutte le applicazioni AIR che state usando. Disinstallare (da terminale o gestore dei pacchetti poco importa) il pacchetto _adobeair1.0_, non è altro che l'installazione precedente, e anche twhirl. E il _\[TAB\]_ è perché può cambiare da sistema a sistema, usate il sacrosanto TAB:

> sudo apt-get purge adobeair1.0
> sudo apt-get purge de.makesoft.twhirl._\[TAB\]_

Cancellare alcune directory (per alcune servono i diritti di amministrazione, quindi **ATTENZIONE**). Poi pare che non in tutti i sistemi ci sia la cartella _.appdata_, tipo sulla Ubuntu 8.04, occhio anche lì.

> sudo rm -rf /var/opt/Adobe AIR
> rm -rf $HOME/.adobe
> rm -rf $HOME/.macromedia
> rm -rf $HOME/.appdata/Adobe
> rm -rf $HOME/.appdata/de.makesoft.twhirl._\[TAB\]_
> sudo rm -rf /root/.adobe
> sudo rm -rf /root/.macromedia

Scaricare la nuova versione dal [sito ufficiale Adobe Labs](http://get.adobe.com/air/), ovviamente la versione per GNU/Linux, e renderlo eseguibile.

> chmod +x AdobeAIRInstaller.bin

**Chiudere eventualmente ogni gestore dei pacchetti** e lanciare il binario:

> ./AdobeAIRInstaller.bin

Una volta installato, è il turno di twhirl. Dal sito, da file scaricato e doppioclick e con Adobe AIR Application Installer poco in porta. Ciò che davvero conta è che non dovrete rimettere la password ogni volta.
