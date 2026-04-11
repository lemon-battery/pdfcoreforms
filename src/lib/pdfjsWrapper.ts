import * as pdfjs from "pdfjs-dist";

pdfjs.GlobalWorkerOptions.workerSrc = "//unpkg.com/pdfjs-dist/build/pdf.worker.min.js";

export default pdfjs;