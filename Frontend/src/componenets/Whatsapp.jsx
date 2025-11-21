import React from "react";

export default function WhatsAppButton() {
  const phone = "918680959253";
  const message = "Hi, I want to know about Ooty tour packages";

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        backgroundColor: "#25D366",
        color: "white",
        padding: "10px 15px",
        borderRadius: "30px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        zIndex: 9999,
        textDecoration: "none",
        fontSize: "16px",
        fontWeight: "500"
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{
          width: "28px",
          height: "28px"
        }}
      />
      <span>Chat with us</span>
    </a>
  );
}
