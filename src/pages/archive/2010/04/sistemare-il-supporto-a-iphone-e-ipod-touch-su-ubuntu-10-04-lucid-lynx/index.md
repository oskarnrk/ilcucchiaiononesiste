---
layout: "../../../../../layouts/BlogPost.astro"
title: "Sistemare il supporto a iPhone e iPod Touch su Ubuntu 10.04 Lucid Lynx"
date: "2010-04-11"
categories: 
  - "howto"
  - "linux-informatica"
tags: 
  - "apple"
  - "iphone"
  - "ipod-touch"
  - "lucid-lynx"
  - "ubuntu"
---

Manca ormai poco all'uscita della nuova Ubuntu, la 10.04 "Lucid Lynx", che sarà LTS (Long Term Support). A parte le novità circa i colori, i temi o il nuovo sistema grafico all'avvio (Plymouth), una delle nuove funzionalità sbandierate da Canonical è il **supporto nativo ad iPhone e iPod Touch**, possibile grazie alla libreria [libimobiledevice](http://www.libimobiledevice.org/). Purtroppo per diversi utenti questa nuova utilità non funziona come dovrebbe: una volta collegato il costoso gadget viene visto, il sistema ci consiglia di aprire Rhythmbox, lo vediamo nella colonna di sinistra, ci trasciniamo dentro le canzoni e, una volta staccato, non le ritroviamo dove dovrebbero essere. Grazie a [questo thread](http://ubuntuforums.org/showthread.php?p=8947399) del forum internazionale di Ubuntu ho trovato la soluzione. Eccola, passo passo. **_Attenzione_**: per provare questi passi io ho usato un iPod Touch con firmware 3.1.3 che aveva già un database musicale, creato precedentemente con iTunes sotto Windows. Non so se funzionano anche senza averne creato uno. In Rhythmbox il plugin MTP deve essere disattivato, mentre deve essere attivo quello per iPod. Per convenzione, l'utente in uso è _oscar_ e il nome dell'iPhone/iPod Touch è _cypher_. Collegate l'iPhone/iPod Touch. Una volta rilevato verrà montato in una directory nella home del tuo utente, tipo

> /home/oscar/.gvfs/cypher

Aprite il terminale ed entrate nella directory:

> cd /home/oscar/.gvfs/cypher

Create la seguente directory:

> mkdir iTunes\_Control/Device

Lanciate il seguente comando, che dovrebbe restituirvi il vostro UUID di 40 caratteri:

> lsusb -v | grep -i iSerial

Con il dato ottenuto, che scriverete al posto di UUID, lanciate:

> ipod-read-sysinfo-extended UUID /home/oscar/.gvfs/cypher

Se tutto è andato bene nella directory che avete creato prima dovrebbe essere apparso un file, _SysInfoExtended_, un XML; verificate che effettivamente ci sia e con un _less_ controllate che non sia vuoto.

> ls /home/oscar/.gvfs/cypher/iTunes\_Control/Device
> less /home/oscar/.gvfs/cypher/iTunes\_Control/Device/SysInfoExtended

Smontate il gadget, staccatelo, ricollegatelo, aprite Rhythmbox (o GtkPod, ad esempio, installabile tranquillamente dai repository). Con il terminale tornate nella directory dove è stato montato e controllate in quella creata da voi, dovrebbe essere apparso un file di nome _HashInfo_. Controlliamo:

> ls /home/oscar/.gvfs/cypher/iTunes\_Control/Device

Provate a mettere la musica nel lettore. Attenzione, ci può mettere un po', e una volta finito il processo attendete qualche istante, la scritta _Sincronizzazione in corso_ deve andare via dallo schermo dell'aggeggio. Riassumendo, è questione di creare una directory, lanciare un comando che generi un file, mentre un secondo dovrebbe crearsi da solo. I commenti sono aperti a tutti, se riscontrate imprecisioni le segnalazioni sono ben accette, come lo sono quelle sulla riuscita dell'utilizzo. Se la vostra situazione è diversa da quella descritta nell'Attenzione sopra potrei non riuscire a rispondere alle vostre eventuali domande. Spero comunque che Canonical risolva questo problema prima dell'uscita definitiva della versione. _Post aggiornato in data 11/04/2010._
