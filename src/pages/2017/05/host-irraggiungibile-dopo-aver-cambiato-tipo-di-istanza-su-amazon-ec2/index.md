---
layout: "../../../../layouts/BlogPost.astro"
title: "Host irraggiungibile dopo aver cambiato tipo di istanza su Amazon EC2?"
date: "2017-05-02"
categories: 
  - "howto"
  - "informatica"
  - "linux-informatica"
tags: 
  - "amazon"
  - "aws"
  - "ec2"
  - "ssh"
  - "sysadmin"
---

In una sessione di manutenzione di alcune istanze ospitate su **Amazon EC2** ho incontrato un problema all'apparenza piuttosto grave, ammetto di aver avuto un po' di panico. Parliamo di un'istanza su cui gira Ubuntu 14.04 LTS. Dopo aver fermato la macchina e averne **cambiato il tipo** - da uno con SSD storage ad uno con solo volume EBS - ho riavviato e ho provato a collegarmi in SSH.

ssh: connect to host \[indirizzo IP\] port 22: Connection refused

Dal messeggio di errore si capiva che la macchina era accesa (e se ne aveva conferma anche dal pannello grafico di Amazon) ma rifiutava la connessione. Dopo un bel po' di ricerca in Rete ho [trovato](https://stackoverflow.com/questions/14026148/running-ec2-instance-suddenly-refuses-ssh-connection) la causa e la relativa soluzione del problema: passando dall'istanza con SSD storage ad una senza veniva lasciata nel file ​​`/etc/fstab`​ la entry del disco secondario, al boot della macchina questo faceva fallire il servizio di _mount_ che, guarda un po', viene lanciato prima del demone _sshd_, impedendo la connessione. Per **risolvere** è stato necessario:

- fermare l'istanza
- scollegare il volume e collegarlo ad un'istanza raggiungibile
- montare la partizione
- editare il file `/etc/fstab` elimimando la linea che mandava in errore il demone
- smontare il disco
- scollegarlo dall'istanza secondaria ricollegarlo all'originale
- farla ripartire

La macchina era tornata raggiungibile. Sospiro di sollievo.
