---
layout: "../../../../../layouts/BlogPost.astro"
title: "Schizzo di follia: da Feisty Fawn a Gutsy Gibbon"
date: "2007-08-27"
categories: 
  - "linux-informatica"
tags: 
  - "feisty-fawn"
  - "gutsy-gibbon"
  - "ubuntu"
---

[![](/images/Lar%20Gibbon%20female%20Jane%20Twycross%20034s.jpg)](http://williamcalvin.com/portraits/gibbon/Lar%20Gibbon%20female%20Jane%20Twycross%20034s.jpg)In uno schizzo di pazzia, di quelli che poi in qualche modo mi pento di aver fatto, nella notte tra sabato e domenica ho trasformato il mio cerbiatto esuberante in gibbone coraggioso (di cui abbiamo una recente immagine in posa da intellettuale), ossia ho aggiornato la mia Ubuntu "Feisty Fawn" 7.04 alla "Gutsy Gibbon" 7.10 Tribe 5. Avevo letto che il passaggio già da ora è abbastanza indolore, così ho fatto il grande passo. La condizione preliminare è stata quella di modificare /etc/apt/sources.list escludendo i repositories di terze parti (Treviño, Pollycoke, quelli di Avant Window Navigator di qualche post fa.. etc) e cambiando quelli della distribuzione da feisty a gutsy. A quel punto ho dato il bel sudo apt-get update e sudo apt-get dist-upgrade. Ha scaricato circa 1,5GB di pacchetti, modificato diversi files di configurazione. Il processo si è fermato qualche volta, costringendomi al sudo apt-get -f install per poi riprendere il dist-upgrade. L'evoluzione da cervo a scimmia ha comportato un po' di smanettamento su Compiz, visto che ho rimpiazzato quello del repo di Treviño con gli ufficiali. Devo dire che è maledettamente più fluido, non chiedetemi perché. Occhio ai servizi in avvio e a ciò che avete nell'autostart della sessione! Per ora ho anche tolto la barra AWN in quanto i repo descritti qualche post fa sono per Feisty e io sono maledettamente pigro solo a mettermi nell'ordine delle idee di compilarla, quindi sono tornato al più sobrio pannello basso. Ovviamente siamo ancora in versione alpha, quindi i problemini e gli aggiornamenti sono sull'ordine di molto MB al giorno. Ecco cosa ho riscontrato sulla mia macchina:

- le console - richiamabili con Ctrl+Alt+F1..F6 - non vanno! Schermo nero, eppure mi tornano sempre utili solitamente..
- l'audio parte di default muto (cosa che non faceva il cerbiatto) e i suoni di prompt e successo del login non sono configurati; si può in parte risolvere andando in Sistema > Amministrazione > Finestra di accesso, nella tab Accessibilità si possono settare question.wav e login.wav
- la bash competion: se l'avevate completamente attivata dovete rifarlo, in quanto /etc/bash.bashrc viene modificato; apritelo da console con sudo nano /etc/bash.bashrc e modificate queste righe
    
    > \# enable bash completion in interactive shells #if \[ -f /etc/bash\_completion \]; then # . /etc/bash\_completion #fi
    
    togliendo gli sharps (ok, cancelletti..) dal codice, ovviamente non alla prima riga che è di commento. Ctrl+O per salvare, Ctrl+X per uscire, chiudete e riaprite la console, ora potete tornare a consumare l'indispensabile tasto tab.
- come con Feisty anche ora, forse un po' di più, accade che lanciando Synaptic e dopo aver dato la password appaia la finestra del gestore di pacchetti tutta vuota, o nel mio caso con rettangoli bianchi; che sia un problema di Compiz? E se si prova a fare qualcosa crashano tutte le applicazioni. In ogni caso risolvevo andando in console con Ctrl+Alt+F1, mi loggavo, stoppavo e riavviavo GDM, ma come detto la gentil console non vuol degnarsi di farsi vedere. Carissimi co-users del forum italiano, delego la mia conoscenza alla vostra illustre esperienza.

Spero, anzi ne sono sicuro, che queste pecche di gioventù vengano corrette al più presto. PS: grazie ai [forum di ubuntu-it.org](http://forum.ubuntu-it.org/) che sono sempre ricchi di hints&tips per ogni occasione.
