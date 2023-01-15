---
layout: "../../../../layouts/BlogPost.astro"
title: "Ripristinare GRUB2 su Ubuntu con un Live CD dopo l'installazione di Windows"
date: "2009-10-14"
categories: 
  - "howto"
  - "informatica"
  - "linux-informatica"
tags: 
  - "7"
  - "grub2"
  - "livecd"
  - "microsoft"
  - "seven"
  - "ubuntu"
  - "windows"
---

Un mese fa ho cambiato l'harddisk del mio portatile (SATA 250GB 7200rpm). Ritrovandomi senza dvd di ripristino di Windows Vista e senza partizione di ripristino, facendo l'installazione sul disco nuovo ho messo direttamente Ubuntu e basta. Per lavoro ora ho bisogno di Windows in quando il software che uso gira solo sul sistema operativo Microsoft, quindi ho partizionato il disco e ho installato **Windows 7** per provarlo. Devo dire - oggettivamente - che è una scheggia, davvero veloce anche con millemila applicazioni aperte, ma questo discorso non c'entra con quello che voglio trattare in questo post. Dopo l'installazione di Windows mi sono ritrovato senza **GRUB2**, il bootloader di default di **Ubuntu "Karmic Koala" 9.10** e quindi non riuscivo più ad accedere al mio sistema preferito. Sulla Rete ci sono molte guide riguardo GRUB, ma pochissime trattano GRUB2. Come ripristinarlo? **ATTENZIONE!** Nei passi seguenti si lavorerà come _root_ sul nostro sistema, quindi prudenza. Recupera un Live CD. Io ho usato quello di Ubuntu "Jaunty Jackalope" 9.04 64bit. Una volta avviato apri un terminale. Per comodità diventa superuser, e d'ora in poi attenzione. Devi identificare su quale partizione hai la directory _/boot_ di Linux. Nel mio caso è _/dev/sda3_. Per vedere le partizioni usa

> sudo fdisk -l /dev/sda

Ora monta la partizione, monta la directory _/dev_ in modo da farla vedere al tuo sistema e accedi:

> mount /dev/sda3 /mnt
> mount -o bind /dev /mnt/dev
> chroot /mnt

Ora aggiorna ricreo il file grub.cfg di GRUB2 e lo installo di nuovo nel MBR:

> update-grub
> grub-install /dev/sda

Teoricamente a questo punto avrà installato nuovamente GRUB2 dopo aver trovato i kernel installati e anche la partizione con Windows. Smonta la partizione e chiudi il terminale:

> exit
> umount /mnt/dev
> umount /mnt
> exit
> exit

Ora riavvia. Potrebbe presentarsi il caso in cui la partizione con Windows non venga rilevata e che sia quindi impossibile avviarla. Per aggirare questo fastidio entriamo nel nostro sistema Ubuntu abituale, installiamo il pacchetto _os-prober_, usiamolo e ripetiamo le operazioni di prima. Via di terminale:

> sudo apt-get install os-prober
> sudo os-prober
> sudo update-grub

Ora dovresti aver visto che anche la partizione con Windows è stata individuata. Riavvia il sistema e prova. Se riscontri imprecisioni nella guida o vuoi confermare che tutto funziona lascia pure un commento. EDIT 26.10.2009: Trovi altri metodi [qui](http://ubuntuguide.net/how-to-restore-grub-2-after-reinstalling-windows-xpvistawin7) (guida trovato attraverso un poco educato commento di un utente a [questo](http://www.ossblog.it/post/5284/ripristinare-grub2-su-ubuntu-dopo-linstallazione-di-windows/ "OSSblog") articolo). EDIT 09.11.2009: Grazie a ste che nei commenti ha trovato l'imprecisione su _grub-install_, ora corretta.
