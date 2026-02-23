const API_URL =
  "https://script.google.com/macros/s/AKfycbwd7jmRGYjTtSaJx-qE1YyAdbO-3URxfAHT21foFzFGHFSN-cNAP-rwjLyirhSyI3flbg/exec";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("nexusForm");

  const urlParams = new URLSearchParams(window.location.search);
  const fields = ["utm_source", "utm_campaign", "gclid"];
  fields.forEach((field) => {
    const value = urlParams.get(field);
    const input = document.getElementById(field);
    if (value && input) input.value = value;
  });

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const btn = document.getElementById("btnSubmit");
      btn.disabled = true;
      btn.innerText = "Processando Dados...";

      const dataField = document.querySelector('input[name="data"]');
      if (dataField) {
        dataField.value = new Date().toLocaleString("pt-BR", {
          timeZone: "America/Sao_Paulo",
        });
      }

      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

      try {
        await fetch(API_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        window.location.href = "thanks.html";
        e.target.reset();
      } catch (error) {
        alert("Falha na conexão com o CRM. Tente o WhatsApp direto.");
      } finally {
        btn.disabled = false;
        btn.innerText = "Enviar para o Consultor";
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-btn");
  const menu = document.getElementById("menu-mobile");
  const menuLinks = menu.querySelectorAll("a");

  menuButton.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
});
