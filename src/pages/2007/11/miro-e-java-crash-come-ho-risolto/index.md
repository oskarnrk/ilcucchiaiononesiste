---
layout: "../../../../../layouts/BlogPost.astro"
title: "Miro e Java crash, come ho risolto"
date: "2007-11-16"
categories: 
  - "howto"
  - "linux-informatica"
tags: 
  - "crash"
  - "java"
  - "linux"
  - "miro"
---

Aggiornamento: ho modificato la soluzione rispetto alla prima stesura.

Anche io come tanta gente ho [l'omino del cervello](http://www.myspace.com/pasqualelaricchia), il quale in questi giorni mi ha sussurrato all'orecchio (ma dall'interno) «visto che tutti parlano di questo Miro, provalo no?», ed ecco che l'ho fatto.

[![](/images/home-logo-revised.png)](http://www.getmiro.com/img/home-logo-revised.png)Basta andare sul [sito ufficiale](http://www.getmiro.com/) del progetto e seguire le indicazioni. Io ho utilizzato il repository per gutsy, ossia  
  

> deb http://ftp.osuosl.org/pub/pculture.org/miro/linux/repositories/ubuntu gutsy/

Dopo l'installazione dei pacchetti necessari, ossia miro e miro-data, l'ho lanciato dal menu Audio e Video, ma appena iniziava a caricare la pagina web utilizzando Firefox si chiude. Uhm. Allora lo lancio da terminale, e mi ritrovo davanti questo errore (FAC SIMILE):  
  

> /usr/bin/python2.5: symbol lookup error: /usr/lib/jvm/java-6-sun-1.6.0.03/jre/plugin/i386/  
> ns7/libjavaplugin\_oji.so: undefined symbol: PR\_NewMonitor WARNING downloader: connection closed -- quitting INFO Shutting down downloaders...

(L'errore qui riportato è preso da ubuntuforums, il mio riguardava Java 1.4 non Java6).

Uhmmando ancora di più ho cercato un po' qua un po' là, trovando qualche indicazione su ubuntuforums. Consigliavano di installare icedtea-java7-plugin e cose simili. Dopo aver spataccato un po' ho optato semplicemente per disinstallare Java 1.4 e installare/tenere Java 1.5, funziona...va benissimo.  
Ho installato allora proprio la icedtea-java7-plugin, con sudo update-alternatives --config java ho selezionato quella Java machine, e ora funziona.
