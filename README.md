## Drupal web pre projekt Žijem vedu

<img alt="Drupal Logo" src="https://www.drupal.org/files/Wordmark_blue_RGB.png" height="60px">

## Deployment

```
git fetch
git pull
composer install
drush cim
drush cr
```

Do `.gitignore` som hodil adresár `modules/contrib`, takže pozor na ten composer - nezabudnúť ho púšťať.

## Custom moduly

### zijem_vedu_block
Definície blokov pre tento projekt.

### zijem_vedu_pages
Všeobecný modul, v ktorom sa nachádza nejaká aplikačná logika, ako napr. správa featured článkov a podobne.

## Custom grafická téma: zijem_vedu
Najviac práce je v templatoch, prakticky všetko, čo sa dalo, som dával do templatov, nech je to cca na jednom mieste. Pár drobností je v preprocess funkciách.
Niečo som dal aj do view, myslím, že stránka (page) s novinkami je naštýlovaná jemne cez príslušné view.

## Patches

Máme tu už aj folder s patchmi, tu sú linky:
- https://www.drupal.org/project/drupal/issues/2628230#comment-13213379

Je asi dobré keď sa spustí `composer install` potom pustiť aj `patch -p1 <` a príslušný patch. Teda všetky, ak ich bude viacej.

## TODO
- Využiť custom block type aby si bloky mohli upravovať editori sami.
- Autorov blogov ukladať ako entity a dať pri príaní blogu možnosť výberu už existujúceho autora.
