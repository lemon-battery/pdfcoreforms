import * as pdfjs from "../lib/pdfjsWrapper.js";

export async function getPDF(data: ArrayBuffer|URL){
   return await pdfjs.getDocument(data).promise
}

export async function renderPageToBmp(pdfPage: pdfjs.PDFPageProxy, scale = 1){
   const viewport = pdfPage.getViewport({ scale: scale });
   const offscreen = new OffscreenCanvas(viewport.width, viewport.height);
   const ctx = offscreen.getContext("2d");

   const renderContext = {
      canvasContext: ctx,
      viewport: viewport
   }
   await pdfPage.render(
      // quick fix for pdfjs's outdated types
      renderContext as unknown as {canvas: HTMLCanvasElement, viewport: pdfjs.PageViewport}
   ).promise

   return await createImageBitmap(offscreen);
}