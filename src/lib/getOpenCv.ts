import cvModule from "@techstark/opencv-js";
type OpenCvTypes = typeof import("mirada/dist/src/types/opencv/_types.d.ts");

export async function getOpenCv(){
   let cv: OpenCvTypes;
   if (cvModule instanceof Promise){
      cv = await cvModule;
   }
   else{
      const cvObj = cvModule;
      await new Promise<void>(resolve => {
         cvObj.onRuntimeInitialized = () => resolve();
      });
      cv = cvObj;
   }
   return { cv }
}