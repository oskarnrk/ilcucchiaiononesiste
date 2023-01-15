---
layout: "../../../../layouts/BlogPost.astro"
title: "GetDeb? Repository!"
date: "2007-08-22"
categories: 
  - "howto"
  - "linux-informatica"
tags: 
  - "deb"
  - "repository"
  - "ubuntu"
---

[![](/images/getdeb_logo.png)](http://www.getdeb.net/themes/getdeb/images/getdeb_logo.png)Seguendo [TuxFeed](http://www.tuxfeed.it/), magnifico aggregatore di blogs che trattano dell'amato Pinguino, ho letto diversi posts dal [blog di Paolettopn](http://paolettopn.wordpress.com/), tra cui quello per la sincronizzazione tra Nokia e Evolution. Proprio a Paolettopn è arrivata una segnalazione, che ha prontamente segnalato in [questo post](http://paolettopn.wordpress.com/2007/08/21/installare-i-pacchetti-di-ubuntu-tramite-getdeb-con-synaptic/), e che prontamente vi giro. Anche ieri ho parlato della mia beata pigrizia e del mio amore smodato verso i repositories. Molti conoscono [GetDeb](http://www.getdeb.net/), portale dal quale è possibile scaricare software per Ubuntu di ogni genere - giochi, utilities per il computer, per la Rete e chi più ne ha più ne metta - e che ho citato molte volte, ad esempio per scaricare [PokerTH](http://oskarnrk.blogspot.com/2007/05/pokerth-on-ubuntu-linux.html). Ebbene, ecco che spunta il repository per accedere a quei programmi direttamente tramite APT (e managers vari)! Come fare? Inserite nella lista dei vostri repositories (modificando /etc/apt/sources.list o con il vostro manager) questo:

> deb http://ubuntu.org.ua/ getdeb/

e poi aggiornate (con sudo apt-get update o col vostro manager). Ecco fatto, li avrete tutti a vostra disposizione!
