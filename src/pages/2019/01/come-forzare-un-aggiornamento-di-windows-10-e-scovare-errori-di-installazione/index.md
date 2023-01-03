---
layout: "../../../../layouts/BlogPost.astro"
title: "Come forzare un aggiornamento di Windows 10 e scovare errori di installazione"
date: "2019-01-14"
categories: 
  - "howto"
  - "informatica"
  - "windows-informatica"
tags: 
  - "aggiornamenti"
  - "aggiornamento"
  - "microsoft"
  - "setupdiag"
  - "update"
  - "updates"
  - "windows"
  - "windows-10"
---

Non l'ho sbandierato molto ma negli ultimi due anni sono tornato a **Windows**, più che altro per lavoro.

Recentemente mi sono impuntato a voler installare il **Windows 10 October 2018 Update**, tormentato aggiornamento a Windows 10 versione 1809, prima ritirato a causa di un piccolo bug (niente di che, gente che perdeva la cartella Documenti...) e poi nuovamente reso disponibile. Il mio unico obiettivo era puramente estetico, volevo Explorer con tema scuro.

Nonostante i miei controlli giornalieri Windows Update non mi proponeva l'aggiornamento. Il sistema infatti ora - e finalmente - controlla eventuali incompatibilità _prima_ di proporre un'aggiornamento, questo per evitare l'interruzione e il rollback durante l'installazione. Ma non sarebbe stato solo questo a fermarmi, no?

Ho così scaricato e lanciato il tool **Assistente aggiornamento Windows 10**. Il tool scaricava i dati, diceva di star facendo l'installazione, riavviava ma in realtà non aveva fatto un bel niente. Ho scoperto poi che più fonti suggeriscono di evitare questo tool.  
Meglio usare invece il **Windows 10 Media Creation Tool**, con il quale è possibile creare un supporto esterno per installare il sistema operativo oppure eseguirlo direttamente sulla macchina. Perfetto, proviamolo. Dopo aver scaricato i dati partiva con l'installazione e regolarmente si fermava al 12% adducendo la seguente scusa:

> 0x800F081F - 0x20003  
> This installation failed in the SAFE\_OS phase with an error during INSTALL\_UPDATES operation

Il codice di errore appare per la presenza di più tipi di problemi. Ho così usato **[SetupDiag](https://docs.microsoft.com/it-it/windows/deployment/upgrade/setupdiag)**, uno "strumento di diagnostica autonomo che può essere usato per ottenere informazioni dettagliate sul motivo per cui eseguire l'aggiornamento di Windows 10 non è riuscito". Ecco cosa si poteva notare nei log generati:

> Failure Data: Last Phase = SafeOS,Start, Last Operation = Add \[1\] package C:$WINDOWS.~BT\\DUImageSandbox\\Microsoft-OneCore-DeveloperMode-Desktop-Package~31bf3856ad364e35~amd64~~.cab, Error = 0x800F081F-0x20003

Rapida ricerca e mi imbatto in [questo thread](https://www.reddit.com/r/windows/comments/9x4z8h/october_update_1809_fails_to_install/) su reddit che parla esattamente del mio problema e dove l'utente zippadiu ha trovato la [soluzione](https://www.reddit.com/r/windows/comments/9x4z8h/october_update_1809_fails_to_install/e9r64l4/?context=3): basta andare su _Impostazioni > App > App e funzionalità > Gestisci funzionalità facoltative_ e **disinstallare Windows Developer Mode**.

Il pacchetto Windows Developer Mode si installa quando si attiva la _Modalità sviluppatore_ da _Impostazioni > Aggiornamento e sicurezza > Per sviluppatori_, necessaria se si vuole installare il sottosistema Linux e successivamente la Ubuntu dentro Windows, cosa che ovviamente ho fatto.

Probabilmente l'aggiornamento non mi veniva proposto proprio perché avevo quel pacchetto installato. In ogni caso una volta eseguito l'aggiornamento - nel mio caso possiamo tranquillamente dire forzato - si può reinstallare il Windows Developer Mode.

PS: su un altro PC ho usato l'Assistente aggiornamento Windows 10 che ha svolto il suo compito come ci si immaginava, certo, però l'ha fatto male: il sistema è stato in qualche modo sporcato e avevo continui problemi nella riproduzione di video e audio, sia online che in locale, blip e stop improvvisi.  
Consiglio quindi caldamente di usare il Windows 10 Media Creation Tool se proprio volete forzare un update.
