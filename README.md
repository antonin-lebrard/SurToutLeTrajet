# SurToutLeTrajet

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
So the actual process now is simpler as I put this stream into a `<video>` element. And I can apply a css rule: transform: `rotate(180deg)`
on it.

To improve the app, getting the content of the maps `<canvas>` trough the `<video>` and applying a manual filter before putting it 
on another `<canvas>` might be the final trick to have the expected behavior.

### Notice

Use google maps in a very non-legit manner, this project is totally unofficial and un-affiliated to google or any of its products.<br>
<b>It is of course not supported nor endorsed by Google</b>

And there will be no Licence in this repo, so do what you want from it. I take no responsability from your usage of it.
