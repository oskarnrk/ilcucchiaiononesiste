---
layout: "../../../../../layouts/BlogPost.astro"
title: "Il Gibbone non sta bene"
date: "2007-10-29"
categories: 
  - "linux-informatica"
tags: 
  - "gutsy-gibbon"
  - "ubuntu"
---

Per un po' ho sopportato, ma ora sono davvero infastidito. La mia linuxbox mi sta innervosendo. Non ho grossi problemi come quelli elencati da altri (ad esempio [Coobox](http://cubox.altervista.org/cooboxblog/2007/10/gutsy-uno-schifo.html) e [dknew](http://dknew.wordpress.com/2007/10/28/salutiamo-il-gibbone-considerazioni-generali/)) ma preferisco esporli, magari trovo chi mi può dare qualche soluzione. Ergo ecco una specie di scheda tecnica in prosa.

[![](/images/cane_arrabbiato.jpg)](http://www.motoricerca.net/upload/cane_arrabbiato.jpg)Ecco, sono stizzito proprio così

NB per amici tipo Fabio, Dalbo, Carlo, Lele...: per "soluzione" non accetto cose tipo «usa windows!». Premessa Notebook modello HP dv6276ea; CPU Intel Core2 T5500 1.66 GHz, RAM 2 GB, scheda grafica nVidia GeForce Go 7400. Uso Ubuntu «Gutsy Gibbon» 7.10 aggiornata dalla «Feisty Fawn» a sua volta aggiornata dalla «Edgy Eft»; Compiz Fusion abilitato, drivers nVidia del pacchetto nvidia-glx-new. Failed to... Errore che mi trascino dietro fin dall'aggiornamento da Edgy a Feisty: al boot, dopo GRUB e la selezione del kernel, esce questo: Failed to allocate mem resource #6. Non noto problemi derivanti da questo errore, ma è fastidioso vederlo ogni volta al boot, trasmette insicurezza. È comunque un [bug conosciuto](https://bugs.launchpad.net/bugs/54294), strano che ancora non sia stato tappato. Idee? Nessuna. Torno subito Stai tranquillamente leggendo la tua posta su Gmail con Firefox quando il sistema freeza completamente, e dopo qualche secondo \*puf!\*, il computer si spegne e si riavvia. Parte qualche stramaledizione... Idee? Non lo so, potrebbe essere Firefox con il suo Gecko. Aspetta un attimo che poi sfarfallo Stai leggendo una qualche pagina web, scrolli con la rotellina del mouse o con il touchpad, tutto d'un tratto il sistema freeza; il simpatico puntatore si muove ancora, ma tutto il resto è fermo, compreso ad esempio il grafico del monitor di sistema sul pannello; dopo alcuni secondi, quasi 10 anche, il sistema torna a lavorare, ma ogni tot secondi sembra che il monitor si spenga, sembra che qualche refresh sia nero. Se vuoi risolvere devi riavviare come minimo X. Idee? Tante: Firefox e il suo Gecko, Compiz, nVidia. Scusa capo, non ti faccio vedere la GUI Lancio un programma che ha bisogno dell'autenticazione con sudo, o meglio con gksu: mi chiede la password, appare la finestra dell'applicativo in questione (regolazione ora, Synaptic, Rete, ...) ma la finestra è vuota, si vedono al massimo riquadri bianchi dove dovrebbero esserci caselle di testo o di selezione. Per fare andare il tutto devo terminare a mano gksu dal Monitor di sistema. Questo non accade tutte le volte, solo ogni tanto. Davvero fastidioso. Idee? Nessuna. Se avete lo stesso problema, o qualche soluzione, o semplicemente qualche indicazione potete commentare questo post, ve ne sarei grato.
