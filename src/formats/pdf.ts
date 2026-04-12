import * as pdfjs from "../lib/pdfjsWrapper.ts";

export async function getPDF(data: ArrayBuffer|URL){
   return await pdfjs.getDocument(data).promise;
}

export async function renderPageToBmp<R = ImageData|ImageBitmap>(
   pdfPage: pdfjs.PDFPageProxy,
   scale = 1,
   config: {
      returnType: "ImageBitmap"|"ImageData"
   } = {
      returnType: "ImageBitmap"
   }
){
   const viewport = pdfPage.getViewport({ scale: scale });
   const offscreen = new OffscreenCanvas(viewport.width, viewport.height);
   const ctx = offscreen.getContext("2d");

   const renderContext = {
      canvasContext: ctx,
      viewport: viewport
   };
   await pdfPage.render(
      // quick fix for pdfjs's outdated types
      renderContext as unknown as {canvas: HTMLCanvasElement, viewport: pdfjs.PageViewport}
   ).promise;

   if (config.returnType == "ImageBitmap"){
      return await createImageBitmap(offscreen) as R;
   }
   else{
      return ctx!.getImageData(0, 0, offscreen.width, offscreen.height) as R;
   }
}