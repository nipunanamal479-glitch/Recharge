// ==============================
// Digital Recharge - data.js
// Configuration & constants
// ==============================

const CONFIG = {
  GOOGLE_CLIENT_ID: "12019111383-058lqu79k9jvbdcq7brqql1ukt1028l8.apps.googleusercontent.com",

  EMAILJS_PUBLIC_KEY: "HahSYzYSEJF5oRsnt",
  EMAILJS_SERVICE_ID: "service_ky2ympa",
  EMAILJS_TEMPLATE_ID: "template_rsi1eee",

  WHATSAPP_NUMBER: "0772915479",

  // Recharge card options shown on the dashboard.
  // "cardNumbers" is a pool of real 12-digit recharge card numbers for
  // that amount. Each time someone verifies their 6-digit OTP, one number
  // is taken from this list and shown to them (and then removed from the
  // pool so it's never re-used). Add as many 12-digit numbers as you like,
  // each one as a separate string inside the array.
  CARDS: [
    {
      id: "card_500",
      label: "500 LKR",
      amount: 500,
      cardNumbers: [
        "123456789012",
        "234567890123",
        "345678901234"
      ]
    },
    {
      id: "card_1000",
      label: "1000 LKR",
      amount: 1000,
      cardNumbers: [
        "456789012345",
        "567890123456",
        "678901234567"
      ]
    },
    {
      id: "card_2000",
      label: "2000 LKR",
      amount: 2000,
      cardNumbers: [
        "789012345678",
        "890123456789",
        "901234567890"
      ]
    }
  ],

  // localStorage keys
  STORAGE_KEYS: {
    TOKEN: "dr_auth_token",
    USER: "dr_user_info",
    WALLET: "dr_wallet"
  }
};
