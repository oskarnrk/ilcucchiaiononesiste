---
layout: "../../../../../layouts/BlogPost.astro"
title: "\"device is unmanaged\" con Network Manager 0.7 su Intrepid Ibex?"
date: "2008-10-11"
categories: 
  - "howto"
  - "linux-informatica"
tags: 
  - "intrepid-ibex"
  - "network-manager"
  - "ubuntu"
---

Da un paio di giorni **Network Manager**, il gestore delle connessioni di Gnome giunto alla versione 0.7, non lavorava più in Ubuntu «Intrepid Ibex», giunta oramai alla versione beta. Cliccando sull'icona si poteva leggere solamente un laconico

> **Wired Networks** devices is unmanaged **Rete wireless** devices is unmanaged

Ho notato che la wireless invece era connessa, ma non navigava in quanto nel file _/etc/resolv.conf_ che contiene gli IP dei server DNS non c'era nulla. Allora l'ho editato a manina inserendo gli indirizzi (_**nameserver** xxx.xxx.xxx.xxx_). Stamane, più per curiosità che per altro, ho fatto una ricerca trovando la radice del problema nel [bug #280417](https://bugs.launchpad.net/ubuntu/+source/network-manager/+bug/280417) sul launchpad di Ubuntu: negli ultimi aggiornamenti viene cambiato un parametro nel file di configurazione di Network Manager. Ecco la soluzione (da terminale): editare il file _/etc/NetworkManager/nm-system-settings.conf_

> sudo gedit /etc/NetworkManager/nm-system-settings.conf

e cambiare

> managed=false

in

> managed=true

Dopo aver salvato e chiuso basta uccidere il processo che gestisce Network Manager, dopo poco tutto tornerà a funzionare

> sudo killall nm-system-settings

Funziona? :)
