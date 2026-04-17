// Animación al hacer scroll
const categorias = document.querySelectorAll(".categoria");

window.addEventListener("scroll", () => {
  categorias.forEach(cat => {
    const position = cat.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
      cat.style.opacity = "1";
      cat.style.transform = "translateY(0)";
    }
  });
});

// Estado inicial
categorias.forEach(cat => {
  cat.style.opacity = "0";
  cat.style.transform = "translateY(40px)";
  cat.style.transition = "all 0.8s ease";
});

// Animación aparición footer
const footer = document.querySelector(".footer");

window.addEventListener("scroll", () => {
  const position = footer.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.2;

  if (position < screenPosition) {
    footer.style.opacity = "1";
    footer.style.transform = "translateY(0)";
  }
});

footer.style.opacity = "0";
footer.style.transform = "translateY(40px)";
footer.style.transition = "all 0.8s ease";

// FILTRO PRODUCTOS
const filtros = document.querySelectorAll(".filtro");
const productos = document.querySelectorAll(".producto");

filtros.forEach(boton => {
  boton.addEventListener("click", () => {

    // Quitar active
    filtros.forEach(btn => btn.classList.remove("active"));
    boton.classList.add("active");

    const filtro = boton.getAttribute("data-filter");

    productos.forEach(producto => {
      if (filtro === "all" || producto.dataset.category === filtro) {
        producto.style.display = "block";
        setTimeout(() => {
          producto.style.opacity = "1";
          producto.style.transform = "translateY(0)";
        }, 50);
      } else {
        producto.style.opacity = "0";
        producto.style.transform = "translateY(20px)";
        setTimeout(() => {
          producto.style.display = "none";
        }, 300);
      }
    });

  });
});

// Animación inicial
productos.forEach(producto => {
  producto.style.opacity = "0";
  producto.style.transform = "translateY(30px)";
  producto.style.transition = "all 0.6s ease";
});

window.addEventListener("load", () => {
  productos.forEach((producto, index) => {
    setTimeout(() => {
      producto.style.opacity = "1";
      producto.style.transform = "translateY(0)";
    }, index * 200);
  });
});

// FILTRO MUJER
const filtrosM = document.querySelectorAll(".filtro-m");
const productosM = document.querySelectorAll(".producto-m");

filtrosM.forEach(boton => {
  boton.addEventListener("click", () => {

    filtrosM.forEach(btn => btn.classList.remove("active"));
    boton.classList.add("active");

    const filtro = boton.getAttribute("data-filter");

    productosM.forEach(producto => {
      if (filtro === "all" || producto.dataset.category === filtro) {
        producto.style.display = "block";
        setTimeout(() => {
          producto.style.opacity = "1";
          producto.style.transform = "translateY(0)";
        }, 50);
      } else {
        producto.style.opacity = "0";
        producto.style.transform = "translateY(20px)";
        setTimeout(() => {
          producto.style.display = "none";
        }, 300);
      }
    });

  });
});

// Animación entrada
productosM.forEach(producto => {
  producto.style.opacity = "0";
  producto.style.transform = "translateY(30px)";
  producto.style.transition = "all 0.6s ease";
});

window.addEventListener("load", () => {
  productosM.forEach((producto, index) => {
    setTimeout(() => {
      producto.style.opacity = "1";
      producto.style.transform = "translateY(0)";
    }, index * 200);
  });
});

function openSocial(platform) {
  if (platform === "instagram") {
    window.open("https://instagram.com", "_blank");
  }
  if (platform === "facebook") {
    window.open("https://facebook.com", "_blank");
  }
  if (platform === "tiktok") {
    window.open("https://tiktok.com", "_blank");
  }
}

// REDES SOCIALES
function openSocial(red) {
  if (red === "instagram") {
    window.open("https://www.instagram.com/tuusuario", "_blank");
  } else if (red === "facebook") {
    window.open("https://www.facebook.com/tuusuario", "_blank");
  } else if (red === "tiktok") {
    window.open("https://www.tiktok.com/@tuusuario", "_blank");
  }
}

// CHAT BOT
function responder() {
  let input = document.getElementById("chat-input").value;
  let body = document.getElementById("chat-body");

  if (input.trim() === "") return;

  body.innerHTML += "<p><b>Tú:</b> " + input + "</p>";

  let texto = input.toLowerCase();
  let respuesta = "No entendí tu mensaje 😅";

  if (texto.includes("hola")) {
    respuesta = "¡Hola! Bienvenido a HSN 👕";
  } else if (texto.includes("precio")) {
    respuesta = "Puedes ver los precios en cada producto 🛍️";
  } else if (texto.includes("envio")) {
    respuesta = "Realizamos envíos a todo México 🚚";
  } else if (texto.includes("pago")) {
    respuesta = "Aceptamos pagos en línea y transferencias 💳";
  }

  body.innerHTML += "<p><b>HSN:</b> " + respuesta + "</p>";

  body.scrollTop = body.scrollHeight;
  document.getElementById("chat-input").value = "";
}

// ABRIR / CERRAR CHAT
function toggleChat() {
  const chat = document.getElementById("chat");
  chat.classList.toggle("active");
}