import * as pdfjs from "pdfjs-dist/legacy/build/pdf.mjs";

pdfjs.GlobalWorkerOptions.workerSrc = "//unpkg.com/pdfjs-dist/build/pdf.worker.min.js";

export * from "pdfjs-dist/legacy/build/pdf.mjs";