const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name")?.toString().trim() || "";
    const company = formData.get("company")?.toString().trim() || "Nao informado";
    const phone = formData.get("phone")?.toString().trim() || "Nao informado";
    const service = formData.get("service")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    const whatsappMessage = [
      "Ola, vim pelo site da MKWorks.",
      `Nome: ${name}`,
      `Empresa: ${company}`,
      `Telefone: ${phone}`,
      `Servico de interesse: ${service}`,
      `Necessidade: ${message}`
    ].join("\n");

    const url = `https://wa.me/5521994100715?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank", "noopener");
  });
}
