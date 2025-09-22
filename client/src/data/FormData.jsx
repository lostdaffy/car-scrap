// src/data/formData.js

// Vehicle Types
export const vehicleTypes = [
  { type: "Car", icon: "ri-car-fill" },
  { type: "Bike", icon: "ri-motorbike-fill" },
  { type: "Truck", icon: "ri-truck-fill" },
  { type: "Other", icon: "ri-bus-fill" },
];

// Vehicle Makes & Models
export const vehicleData = {
  Car: {
    Maruti: ["Alto", "WagonR", "Swift", "Baleno", "Dzire", "Ertiga", "Brezza"],
    Hyundai: ["i10", "i20", "Creta", "Venue", "Verna", "Santro"],
    Tata: ["Tiago", "Tigor", "Altroz", "Nexon", "Harrier", "Safari"],
    Mahindra: ["Bolero", "Scorpio", "XUV300", "XUV500", "Thar"],
    Honda: ["Amaze", "City", "WR-V", "Jazz"],
    Toyota: ["Innova", "Fortuner", "Glanza", "Urban Cruiser"],
  },

  Bike: {
    Hero: ["Splendor", "Passion Pro", "HF Deluxe", "Xtreme", "Glamour"],
    Honda: ["Activa", "Shine", "Unicorn", "Hornet", "CB350"],
    Bajaj: ["Pulsar 150", "Pulsar 220", "Platina", "Avenger", "Dominar"],
    TVS: ["Apache RTR", "Jupiter", "Ntorq", "XL100"],
    RoyalEnfield: ["Classic 350", "Bullet 350", "Himalayan", "Meteor 350"],
    Suzuki: ["Access 125", "Burgman", "Gixxer", "Hayate"],
    Yamaha: ["FZ", "R15", "MT15", "Fascino", "Ray ZR"],
  },

  Truck: {
    Tata: ["407", "Ace", "LPT 1613", "Signa", "Ultra"],
    AshokLeyland: ["Dost", "Boss", "Partner", "Captain", "Ecomet"],
    Mahindra: ["Bolero Pik-Up", "Jeeto", "Supro Maxitruck"],
    BharatBenz: ["1217R", "1617R", "2523R", "3528C"],
    Eicher: ["Pro 2049", "Pro 3015", "Pro 6040"],
  },

  Other: {
    Bus: ["Tata Starbus", "Ashok Leyland Viking", "Volvo 9400", "Eicher Skyline"],
    Tractor: ["Mahindra 575 DI", "Swaraj 744 FE", "John Deere 5105", "Powertrac 439"],
    Auto: ["Bajaj RE", "Piaggio Ape", "Mahindra Treo"],
  },
};

// Extra Benefits for UI
export const benefits = ["Maximum value", "Free Pickup"];
