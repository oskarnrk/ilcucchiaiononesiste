---
layout: "../../../../layouts/BlogPost.astro"
title: 'Riattivare "Audio telefono" per un dispositivo Bluetooth accoppiato su Android (aggiornato 10/02/2020)'
date: "2017-04-14"
updateDate: "2020-02-10"
categories:
  - "howto"
  - "tecnologia"
  - "mobile"
tags:
  - "android"
  - "bluetooth"
---

**AGGIORNAMENTO 10 febbraio 2020**: in fondo al post trovate le indicazioni dedicate ai dispositivi con versioni di Android più recenti rispetto alla 6 per la quale era stato originariamente scritto.

Con il mio Moto G (del 2015, detto G3, con Android 6.0.1 "Marshmallow") non riuscivo più ad utilizzare il vivavoce della Ford Fiesta. Guardando le impostazioni del dispositivo accoppiato sullo smartphone ho notato che la voce "Audio telefono" non era selezionata e non era possibile attivarla a mano. Solo due azioni portavano al funzionamento precedente, ossia il riavvio del telefono o la cancellazione dei dati dell'app di sistema "Condivisione Bluetooth", entrambe chiaramente scomodissime.  
Dopo diverse ricerche ecco che su [Android Enthusiasts](https://android.stackexchange.com/questions/169709/cant-check-phone-audio-of-a-bluetooth-headset) trovo riportata la **soluzione**.

Nei telefoni con Android stock – quindi non con menù personalizzati – basta aprire **_Impostazioni_, _Geolocalizzazione_, dal menù a tendina scegliere *Ricerca* e disattivare "Ricerca di dispositivi Bluetooth"**.

![](http://ilcucchiaiononesiste.it/wp-content/uploads/2017/04/geolocalizzazione_ricerca.png?w=300)

Non sono sicuro ma credo che questa impostazione sia stata attivata di default con un aggiornamento di sistema. In ogni caso ora, come in precedenza, la connessione include anche "Audio telefono".

## Come risolvere su versioni di Android più recenti

Ormai da quasi 2 anni ho un Moto Z2 Force che ora utilizza Android 9 “Pie”. Arrivare alle impostazioni dello screenshot sopra è ora un po’ più complesso, ossia **_Impostazioni_, *Sicurezza e posizione*, *Privacy – Geolocalizzazione*, *Avanzate – Scansione*, disattivare “Scansione di dispositivi Bluetooth”**.
