---
layout: "../../../../../layouts/BlogPost.astro"
title: "Anche i blog migrano, e si aggiornano"
date: "2009-06-13"
categories: 
  - "informatica"
  - "internet"
tags: 
  - "blog"
  - "hosting"
  - "upgrade"
  - "wordpress"
---

Sono stati giorni laboriosi per il mio blog: ho cambiato hosting e ho aggiornato a Wordpress 2.8! Qualche lettore avrà sicuramente notato qualche disservizio, comprensibile visto il trasloco.

### La migrazione

Nei giorni scorsi il mio precedente hosting, [Netsons](http://www.netsons.com "Netsons"), mi ha avvertito che la tipologia che usavo sarebbe stata cancellata entro fine mese. L'offerta che mi è stata fatta per avere un prodotto di pari potenzialità prevedeva l'acquisto di un nuovo dominio, nonostante io ne avessi già uno registrato con loro, che avrei potuto avere con un ottimo sconto. Da tempo ero curioso di provare qualche altro hosting, così non avendo bisogno di un nuovo dominio ho pensato di migrare, tanto per provare qualche alternativa. Lo staff del **supporto** è stato **gentile e rapido** ad aiutarmi nonostante stessero "perdendo" un cliente. Anche se ho cambiato continuo a considerare Netsons **un buonissimo hosting** che continuerò a consigliare. La scelta per il nuovo gestore è caduta su [WebPerTe](http://www.webperte.com "WebPerTe") grazie al consiglio di Enrico a.k.a. Capobecchino, ideatore e gestore di [meemi.com](http://www.meemi.com "Meemi"), e dopo averne letto bene sul blog di [Andrea Beggi](http://www.andreabeggi.net "Il blog di Andrea Beggi"). Anche con loro tutto molto veloce, nel giro di 2 giorni era tutto _up & running_. L'unica cosa che non mi piace è che il _PHP safe mode_ è attivo, cosa che incasina un po' gli aggiornamenti di plugins e core fatti direttamente dall'interfaccia di Wordpress.

### L'aggiornamento

Fatta la migrazione di files e database, con il blog perfettamente funzionante, mi sento moralmente obbligato ad aggiornare a **Wordpress 2.8**. Per il motivo detto prima preferisco fare le cose _alla vecchia_: disattivo tutti i plugins, metto il tema di default, scarico la versione localizzata in italiano da [wordpress-it](http://www.wordpress-it.it/ "Wordpress Italy Blog"), cancello tutto a parte il file _wp-config.php_, _.htaccess_ e la directory _wp-contents_ nella quale aggiorno solo quello di cui c'è bisogno, ci copio i files nuovi, aggiorno il database, provo un po' le novità e noto che non ci sono problemi, riattivo tutti i plugins e rimetto il mio tema. Ecco il primo problema: la nuova pagina di amministrazione delle widgets è congelata, non posso modificare, aggiungere o togliere nessuna widgets, il drag'n'drop è congelato. Capisco che c'è qualche plugin impazzita, le disattivo a piccoli gruppi e in poco la trovo: l'estensione di **IntenseDebate** fa freezare l'interfaccia delle widgets, tuttora è disattivata in attesa di liete novelle.
