// Link do WhatsApp facil de trocar.
const WHATSAPP_GROUP_LINK = "https://wa.me/5500000000000?text=Quero%20entrar%20no%20grupo";

// Configuracoes simples para reaproveitar os elementos de interface.
const progressPercentage = 80;
const toastVisibleDuration = 3200;
const toastDelay = 1400;

const whatsappButton = document.querySelector("#whatsappButton");
const progressBar = document.querySelector("#progressBar");
const progressValue = document.querySelector("#progressValue");
const joinToast = document.querySelector("#joinToast");

if (whatsappButton) {
  whatsappButton.href = WHATSAPP_GROUP_LINK;
}

if (progressBar && progressValue) {
  progressValue.textContent = String(progressPercentage);

  // Aguarda o paint inicial para animar a barra suavemente.
  requestAnimationFrame(() => {
    progressBar.style.width = `${progressPercentage}%`;
  });
}

if (joinToast) {
  const showToast = () => {
    joinToast.classList.add("is-visible");

    window.setTimeout(() => {
      joinToast.classList.remove("is-visible");
    }, toastVisibleDuration);
  };

  window.setTimeout(showToast, toastDelay);
}
