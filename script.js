
const prices = {
  "Website": { "Basic": 600, "Standard": 1000, "Advanced": 1500 },
  "Flyer": { "Single": 150, "Pack of 3": 300 },
  "WhatsApp Tool": { "Auto Reply": 250, "Order Bot": 450 }
};
function updateOptions() {
  const type = document.getElementById("productType").value;
  const option = document.getElementById("productOption");
  option.innerHTML = "<option value=''>-- Select Option --</option>";
  if (prices[type]) {
    Object.entries(prices[type]).forEach(([opt]) => {
      option.innerHTML += `<option value="${opt}">${opt}</option>`;
    });
  }
}
function calculateTotal() {
  const type = document.getElementById("productType").value;
  const opt = document.getElementById("productOption").value;
  const total = document.getElementById("total");
  total.textContent = prices[type] && prices[type][opt]
    ? `Total: R${prices[type][opt]}.00` : "Total: R0.00";
}
function generatePDF() {
  const form = document.getElementById('clientForm');
  const data = new FormData(form);
  let content = "Client Form Submission:\n\n";
  for (let [key, value] of data.entries()) {
    content += `${key}: ${value}\n`;
  }
  const blob = new Blob([content], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "NBDevelopment_Client_Form.pdf";
  link.click();
}
function generateInvoicePDF() {
  const form = document.getElementById('invoiceForm');
  const data = new FormData(form);
  let content = "Invoice Form Submission:\n\n";
  for (let [key, value] of data.entries()) {
    content += `${key}: ${value}\n`;
  }
  const blob = new Blob([content], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "NBDevelopment_Invoice_Form.pdf";
  link.click();
}
