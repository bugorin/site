// Link do WhatsApp facil de trocar.
const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/IaSbTw1H9hl4YeTbDUhXgS";

// Configuracoes simples para reaproveitar os elementos de interface.
const toastVisibleDuration = 3200;
const toastDelay = 1400;

const whatsappButton = document.querySelector("#whatsappButton");
const joinToast = document.querySelector("#joinToast");

const syncAppHeight = () => {
  document.documentElement.style.setProperty("--app-height", `${window.innerHeight}px`);
};

syncAppHeight();
window.addEventListener("resize", syncAppHeight);
window.addEventListener("orientationchange", syncAppHeight);

if (whatsappButton) {
  whatsappButton.href = WHATSAPP_GROUP_LINK;
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
