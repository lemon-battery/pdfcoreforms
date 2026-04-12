import { getOpenCv } from "../lib/getOpenCv.ts";

export async function findBoxes(img: ImageData){
   const { cv } = await getOpenCv(); // ensure cv is loaded

   const src = cv.matFromImageData(img);
   const dst = new cv.Mat();
   cv.cvtColor(src, src, cv.COLOR_RGB2GRAY, 0);

   cv.Canny(src, dst, 50, 100, 3, false);

   src.delete();
   dst.delete();
}