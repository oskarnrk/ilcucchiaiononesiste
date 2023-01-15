---
layout: "../../../../layouts/BlogPost.astro"
title: "Skype su Ubuntu 8.04 Hardy Heron con PulseAudio [HowTo]"
date: "2008-06-11"
categories: 
  - "howto"
  - "linux-informatica"
tags: 
  - "hardy-heron"
  - "pulseaudio"
  - "skype"
---

Come diceva [Natalino Balasso](http://it.youtube.com/watch?v=DNt5ZiMebbE), «L'aaaaaltro gioooorno» volevo partecipare attivamente alla consueta puntata del venerdì di [VivaRadioNation](http://sw4n.net/2008/06/06/viva-radionation-13/). Vengo invitato all'audioconferenza **Skype** ma non sento nulla! Ascoltando lo streaming apprendo che la mia voce arriva, ma io non sento niente dal famigerato programma VoIP closed-source. Allora mi metto alla ricerca della causa, e scopro che è un problema risaputo: Skype è un'applicazione **ALSA** che fa a cazzotti con **PulseAudio**, il server audio introdotto in **Ubuntu 8.04 «Hardy Heron»**. Cerca cerca cerca, arrivo al [bug su Launchpad](https://bugs.launchpad.net/ubuntu/+source/pulseaudio/+bug/198453). Seguendo queste indicazioni e quelle trovate sull'[help di PulseAudio](http://pulseaudio.org/wiki/PerfectSetup#Skype) e altri siti riesco a risolvere - pare - il problema, che però ne crea un altro, ossia il silenzio nel Flash in Firefox. Dopo vari smanettamenti, ecco la soluzione!

1. Modificare (**EDIT**: se non c'è lo si crea, vero Riccardo?) il file _/etc/asound.conf_ (oppure _~/.asoundrc_ che sta nella home) inserendo queste linee:
    
    > pcm.pulse {
    > 
    >     type pulse
    > }
    > 
    > ctl.pulse {
    > 
    >     type pulse
    > 
    > }
    > 
    > pcm.!default {
    > 
    >     type pulse
    > 
    > }
    > 
    > ctl.!default {
    > 
    >     type pulse
    > 
    > }
    
2. Scaricare e installate i pacchetti _libasound2_ e _libasound2-plugins_ aggiornati per la prossima release di Ubuntu, la 8.10 «Intrepid Ibex», che sono poi quelli importati da Debian unstable. Li trovate a questi link: [libasound2](http://packages.ubuntu.com/intrepid/libasound2) - [libasound2-plugins](http://packages.ubuntu.com/intrepid/libasound2-plugins).
3. Chiudere la sessione e ri-loggarsi.
4. Aprire Skype, andare nelle opzioni, Dispositivi audio. Aprendo la tendina si nota un nuovo device, **pulse**, utilizzare quello sia per ingresso audio, che per uscita audio che per suoneria. Applicare le modifiche, chiudere Skype e riaprirlo.
5. Tornare nelle opzioni Dispositivi audio e fare una chiamata di prova. Se non si sente la propria voce cambiare l'ingresso audio selezionando l'hardware corretto (di solito c'è **plughw**, per me è _plughw:Intel,0_), applicare e provare.
6. Se l'audio della telefonata di prova scatta un po' è bene modificare il file _/etc/pulse/daemon.conf_ aggiungendo in fondo (o modificando a dovere) queste linee:
    
    > default-fragments = 8
    > default-fragment-size-msec = 5
    
7. Chiudere la sessione, ri-loggarsi (o riavviare per scrupolo, volendo), provare. _Dovrebbe_ andare tutto a meraviglia! **EDIT**: controllate anche il mixer di sistema (magari tramite l'applet del volume), se non funziona il vostro microfono può essere semplicemente un problema di volumi di registrazione. Un ringraziamento a **Mattia** che mi ha fatto notare questa lacuna nei commenti.

Sarebbe meglio fare delle prove: fare la chiamata di prova, guardare un video su YouTube, rifare la chiamata di prova. Se Flash va in palla perdendo l'audio allora è il caso di provare Flash 10 beta, lo trovate sul [repository](http://pollycoke.net/repository/) di [Pollycoke](http://pollycoke.net/). Se qualcuno ha il problema e prova questa pseudoguida potrebbe confermarmi che funziona, non solo per il mio pc? Ogni commento è apprezzato.
