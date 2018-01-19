'use strict'

const nwWindow = nw.Window.get()
nwWindow.width = 1200
nwWindow.height = 950

window.addEventListener('load', onLoad)

/** @type Document */
let iframe

let gmapsCanvas, canvas, context, captureStream, video

function onLoad() {
  iframe = document.getElementById("map").contentWindow.document
  iframe.getElementById('consent-bump').remove()
  iframe.getElementById('watermark').remove()
  setTimeout(() => {removeUnecessaryDivs(); getCanvas();}, 400)
}

function removeUnecessaryDivs() {
  const listContentDivs = Array.from(iframe.getElementById('content-container').children)
  listContentDivs.filter((el) => el.id !== 'scene').forEach((el) => el.remove())
}

function getCanvas() {
  gmapsCanvas = iframe.getElementById('scene').getElementsByClassName('widget-scene-canvas')[0]
  captureStream = gmapsCanvas.captureStream(60)
  video = document.getElementById('video')
  video.srcObject = captureStream
  redirectAllEventListenerToGmaps()
}

function redirectAllEventListenerToGmaps(){
  const allListeners = ['dblclick','load','mousedown','mousemove','mouseup','resize','scroll','select','unload','wheel']
  for (const event of allListeners) {
    video.addEventListener(event, function(e) {
      let newE = new e.constructor(e.type, e)
      if (e.type === 'mousemove' || e.type === 'mouseup') {
        const { width, height } = nwWindow
        newE = new MouseEvent(e.type, {
          'view': window,
          'altKey': e.altKey,
          'ctrlKey': e.ctrlKey,
          'isTrusted': true,
          'bubbles': true,
          'cancelable': true,
          'clientX': width - e.clientX,
          'clientY': height - e.clientY
        })
      }
      console.log(e)
      gmapsCanvas.dispatchEvent(newE)
    }, true)
  }
}
