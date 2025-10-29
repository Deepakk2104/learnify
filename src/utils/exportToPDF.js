import html2pdf from "html2pdf.js";

export function exportToPDF(topic) {
  const element = document.getElementById("course-content");
  const opt = {
    margin: 0.5,
    filename: `${topic}_course.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };
  html2pdf().set(opt).from(element).save();
}
