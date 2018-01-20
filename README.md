# SurToutLeTrajet

## Français:

Tentative de reproduire cette video: https://www.youtube.com/watch?v=zwL421Qdn-4<br>
Pour le moment seulement l'effet inversé est fait. 

## Le Lancer:

Ayant une mauvaise connexion, uploader tout le package `nw.js` est pas vraiment possible, donc va falloir télecharger `nw.js` ici:
https://nwjs.io/downloads/, le package normal suffit, le SDK c'est globalement pour avoir des outils de dev en plus,
donc pas nécessaire pour l'application.

Quelques instructions:<br>
- Une fois `nw.js` télechargé, dezippez le quelque part.<br>
- Télechargez ce repo en cliquant sur le bouton vert 'Clone or Download', il devrait y avoir un boutton pour le télecharger en zip.<br>
- Dezipper ce repo dans le repertoire `nwjs` dezippé plus tôt (là où y a le `nw.exe` sur Windows, ou l'executable `nw` sur Linux, je sais pas comment ça ce passe sur Mac)<br>
- Lancez l'executable `nw`, et il devrait y avoir une fenêtre 'Sur tout le trajet' qui s'ouvre.

Si rien ce passe pendant 2 secondes ou plus (genre écran blanc ou noir), essayez de relancer `nw.js` 1 ou 2 fois. 

## Technique derrière tout ça

J'ai essayé pendant un bout de temps de trouver un moyen de récuperer le `<canvas>` de google maps sous forme d'image, comme avec `getImageData()`.<br>
Mais en mode contexte `webgl`, il n'y a pas de fonction comme celle ci dans le `<canvas>`.<br> 
En cherchant un workaround, j'ai trouvé la fonction `captureStream` du `<canvas>`.<br>
Donc maintenant je mets le stream dans un element `<video>`. Et je peux appliquer du rotate css: `transform: rotate(180deg)` dessus.

Pour améliorer l'effet, récuperer à nouveau le contenu du `<canvas>` original par l'element `<video>` et appliquer des filtres manuellement avant de le réafficher dans un deuxième `<canvas>` pourrait être le trick final permettant d'avoir les effets désirés

### Notice

Use google maps in a very non-legit manner, this project is totally unofficial and un-affiliated to google or any of its products.<br>
<b>It is of course not supported nor endorsed by Google</b>

And there will be no Licence in this repo, so do what you want from it. I take no responsability from your usage of it.

## English:

It is an attempt to reproduce the effets seen in this video: https://www.youtube.com/watch?v=zwL421Qdn-4<br>
For the moment only the reverse effect has been done. 

## How to launch it:

You'll probably want the SDK version of `nw.js` if you want to help, else go for the normal version from here: https://nwjs.io/downloads/

I have a bad connection, so uploading the whole package `nw.js` is a no-go. So you will have to download it from the link just upper.

Some instructions:<br>
- Once the `nw.js` package has been downloaded, unzip it somewhere.<br>
- Download this repo by clicking on the green button 'Clone or Download' and there will be a button to download it as a zip.<br>
- Unzip this repo in the `nwjs` directory (where there is the `nw.exe` on Windows, or the executable `nw` on Linux)<br>
- Double click the nw executable, and it should launch a new window called 'Sur tout le trajet'.

If nothing happens for 2 seconds or more, try to relaunch the `nw.js` executable 1 or 2 times. 

## Technical part

I've tried for a long time to find a mean to get the whole google maps `<canvas>` as an image, like `getImageData()`.<br>
But in the `<canvas>` `webgl` context mode, there is no function like it.<br> 
And while I was trying to find a workaround, I found that a `captureStream` function can be found on the `<canvas>` now.<br>
So the actual process now is simpler as I put this stream into a `<video>` element. And I can apply a css rule: `transform: rotate(180deg)` on it.

To improve the app, getting the content of the maps `<canvas>` trough the `<video>` and applying a manual filter before putting it 
on another `<canvas>` might be the final trick to have the expected behavior.

### Notice

Use google maps in a very non-legit manner, this project is totally unofficial and un-affiliated to google or any of its products.<br>
<b>It is of course not supported nor endorsed by Google</b>

And there will be no Licence in this repo, so do what you want from it. I take no responsability from your usage of it.
