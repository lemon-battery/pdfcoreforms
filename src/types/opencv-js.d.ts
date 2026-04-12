type OpenCvTypes = typeof import("mirada/dist/src/types/opencv/_types.d.ts");

declare module "@techstark/opencv-js" {
  const cvModule: Promise<OpenCvTypes> | OpenCvTypes;
  export default cvModule;
}
