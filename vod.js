document.getElementById("driverForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const inputs = this.querySelectorAll("input");
  const data = {
    age: inputs[1].value,
    carNumber: inputs[2].value,
    city: inputs[3].value,
    contact: inputs[4].value,
    price: inputs[5].value
  };

  const fileName = "driver-data.json";
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();

  document.getElementById("result").textContent = "✅ Данные скачаны в файл driver-data.json";
});