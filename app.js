const checklistData = {
    ADMIN: [
      "Finished all training modules",
      "All library items read",
      "Received Employee handbook",
      "Generator perks",
      "Copy of the Original Contract",
      "Shiftjuggler",
      "MS Teams",
      "Y-Drive",
      "Keycard encoder",
      "Lanyard and Keycard",
      "MEWS Account",
      "Lightspeed Account",
      "Clocking in",
    ],
    PROPERTY: [
      "Lobby",
      "Shuffleboard Bar",
      "- Wheelchair elevator",
      "Bar & Kitchen Storage",
      "Office",
      "Delivery Room",
      "Technik: Hebeanlage",
      "Technik: Enthärtungsanlage",
      "Technik: ELA",
      "Technik: BMZ (Fire Panel)",
      "Technik: Elektrik/Niederspannung",
      "Technik: IT & FM (Nelu’s Office)",
      "Technik: Sprinkleranlage",
      "Technik: Heizungsraum",
      "Housekeeping room",
      "Staff changing rooms",
      "Garage & Linen Storage",
      "Trash room & Collection Schedule",
      "Walk-in fridge",
      "Shared Bathrooms including storage rooms 3rd and 7th floor",
      "Roof",
    ],
    HEALTH_SAFETY_AND_MAINTENANCE: [
      "BMZ (Fire Panel) at Reception desk",
      "Fire training",
      "Turning off smoke extraction system",
      "Accident Investigation Report",
      "Crisis Management Plan",
      "Minor repair works (Round with Technician)",
      "Key box Maintenance room",
      "Key box Reception",
      "Changing door lock batteries",
      "Programming door locks",
      "Electricity boxes in the room and hallways",
      "Maintenance Round with Technician",
    ],
    HOUSEKEEPING: [
      "Public Housekeeping (Communication channel MS Teams)",
      "Public Housekeeping folder",
      "Public cleaning schedule",
      "Rooms Housekeeping + MEWS Commander",
      "Clean and Dirty linen",
      "Room standards",
      "Go Green Procedure",
      "- HSK",
      "- FB",
      "- FO",
    ],
    TERMS_AND_CONDITIONS_RULES_INFOs: [
      "House rules",
      "Terms and conditions",
      "Unaccompanied minor",
      "Dogs",
      "Accessibility (ADA)",
    ],
    FRONT_OFFICE: [
      "Dashboard (where things are)",
      "Check-in",
      "- Kiosk check-in",
      "- Co-operator check-in",
      "- Online check-in",
      "- Emergency check-in",
      "- Key making",
      "- Upselling & Wow factor",
      "Check-out",
      "- How to",
      "- Requirements",
      "Reservations section",
      "- Overview",
      "- Report",
      "Types of reservations and rates (NRF/FLX and more)",
      "Creating a reservation",
      "Walk-in policies",
      "Editing an existing reservation",
      "- Re-instating no shows",
      "- Splitting rooms/room moves",
      "- Extending reservations",
      "- Stay over reservations",
      "Payments & Billing",
      "- Mews terminal",
      "- Payment request",
      "- Charging cards",
      "- External payments",
      "- Issue invoice",
      "- Pre-authorisations",
      "- Refunds",
      "- Rebates",
      "Timeline",
      "- How to navigate",
      "- Optimising allocations ('playing Tetris')",
      "- Overbookings",
      "- Icons",
      "Cancellations",
      "- No shows",
      "- Cancellation",
      "Accounting Ledger",
      "Posting deposits",
      "Group check-in",
      "- Preparation",
      "- Rules",
      "- Contact person",
      "- Allocation",
      "- Vouchers",
      "- Rooming list",
      "Credit Card check",
      "- Handling potentially fraudulent cards",
    ],
    FNB: [
      "Placing orders",
      "iZettle",
      "Tables & table numbers",
      "Storekit QR codes",
      "Storekit system",
      "Lightspeed Discount codes",
      "Signing off receipts",
      "Changing beer kegs",
      "Cleaning beer tabs",
      "Coffee machine",
      "Cleaning the coffee machine",
      "Setting up the fridges",
      "Filling up the Vending Machine",
      "Storage organization",
      "Setting up the breakfast buffet",
      "Setting up Lunch and Dinner buffets",
      "Shuffleboard setup",
      "Pool tables, Beer Pong tables and Arcades",
      "Service station",
      "Table service",
      "Cleaning NAIKO tap system",
      "Bottle separation",
      "Food and Beverage Offer (Menus)",
      "Drink Recipes",
      "Bar Setup",
    ],
  };
  
  function loadChecklist() {
    const container = document.getElementById("checklist-container");
    container.innerHTML = ""; // Clear loading message
  
    for (const [section, items] of Object.entries(checklistData)) {
      const sectionElement = document.createElement("div");
      sectionElement.classList.add("checklist-section");
      sectionElement.innerHTML = `<h2>${section.replace(/_/g, " ")}</h2>`;
  
      items.forEach((item, index) => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("checklist-item");
  
        itemElement.innerHTML = `
          <div class="checklist-header">
            <span class="arrow" id="arrow-${section}-${index}">></span>
            <span class="text">${item}</span>
            <input type="checkbox" id="checkbox-${section}-${index}" />
          </div>
          <textarea id="notes-${section}-${index}" placeholder="Add notes..."></textarea>
        `;
  
        const arrow = itemElement.querySelector(`#arrow-${section}-${index}`);
        const notes = itemElement.querySelector(`#notes-${section}-${index}`);
  
        arrow.addEventListener("click", () => {
          if (notes.classList.contains("expanded")) {
            notes.classList.remove("expanded");
            arrow.textContent = ">";
          } else {
            notes.classList.add("expanded");
            arrow.textContent = "v";
          }
        });
  
        sectionElement.appendChild(itemElement);
      });
  
      container.appendChild(sectionElement);
    }
  }
  
  document.addEventListener("DOMContentLoaded", loadChecklist);