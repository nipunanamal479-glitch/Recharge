// ==============================
// Digital Recharge - data.js
// Configuration & constants
// ==============================

const CONFIG = {
  GOOGLE_CLIENT_ID: "12019111383-058lqu79k9jvbdcq7brqql1ukt1028l8.apps.googleusercontent.com",

  EMAILJS_PUBLIC_KEY: "HahSYzYSEJF5oRsnt",
  EMAILJS_SERVICE_ID: "service_ky2ympa",
  EMAILJS_TEMPLATE_ID: "template_brw3umg", // මේක අලුත් ID එක

  WHATSAPP_NUMBER: "0772915479",

  // Recharge card options shown on the dashboard
  CARDS: [
    { id: "card_500", label: "500 LKR", amount: 500 },
    { id: "card_1000", label: "1000 LKR", amount: 1000 },
    { id: "card_2000", label: "2000 LKR", amount: 2000 }
  ],

  // localStorage keys
  STORAGE_KEYS: {
    TOKEN: "dr_auth_token",
    USER: "dr_user_info",
    WALLET: "dr_wallet"
  }
};
