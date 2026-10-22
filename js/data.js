/**
 * BRIMU ELECTRICALS & ENGINEERING - AUTHENTIC DATA REPOSITORY
 * Grounded in real Kenyan engineering standards, genuine copper materials,
 * and direct human consultation with Eng. Brian Murarai.
 */

const BRIMU_DATA = {
  founder: {
    name: "Eng. Brian Murarai",
    title: "Lead Electrical Engineer & Founder",
    experience: "9+ Years Crafting Safe Electrical Systems Across Western Kenya",
    phone: "+254 752 916 659",
    phoneOffice: "+254 706 371 626",
    email: "brianmurarai97@gmail.com",
    whatsappClean: "254752916659",
    location: "Maziwa Road, Kakamega Town, Kenya",
    hours: "Monday to Saturday: 7:00 AM – 6:00 PM (Emergency 24/7 on-call)",
    personalNote: "In electrical work, there is simply no room for shortcuts. An unshielded wire or substandard breaker isn't just an inconvenience; it's a silent hazard to your family and investment. When you work with us, you deal directly with licensed technicians who take personal pride in every conduit we chase and every switchboard we balance."
  },

  services: [
    {
      id: "residential-commercial-wiring",
      title: "Conduit Piping & Complete Building Wiring",
      tagline: "Built to last. Sized for safety. Done right the first time.",
      description: "From laying under-slab heavy-gauge PVC pipes during foundation casting to wall chasing and final fittings. We balance single-phase (240V) and three-phase (415V) installations strictly following IET BS 7671 standards.",
      icon: "wiring",
      realWorldHighlights: [
        "100% pure electrolytic copper cables from East African Cables (zero CCA wire)",
        "Proper phase balancing across all lighting, power, and high-load circuits",
        "Clean flush or surface-mount consumer units with dedicated surge protection",
        "Deep copper earthing rod installation tested below 2.5 Ohms resistance",
        "Complete EPRA testing and documentation ready for Kenya Power (KPLC) meter supply"
      ],
      whatsappPrompt: "Hello Eng. Brian, I am planning electrical wiring for my building in Western Kenya and would like to consult on the scope and materials."
    },
    {
      id: "solar-power-systems",
      title: "Solar PV & Hybrid Inverter Systems",
      tagline: "Beat KPLC power blackouts with clean, reliable solar energy.",
      description: "Custom-sized hybrid and off-grid solar energy solutions tailored to what you actually run in your home or business. We don't guess — we audit your true power consumption to design a solar array and lithium battery setup that runs smoothly through the night.",
      icon: "solar",
      realWorldHighlights: [
        "Tier-1 Monocrystalline Bifacial solar panels capturing direct and ambient sunlight",
        "Pure sine wave hybrid inverters with instant automatic grid transfer",
        "Long-cycle Lithium Iron Phosphate (LiFePO4) battery banks (6,000+ deep cycles)",
        "Solar borehole and booster pumping setups for farms and homesteads",
        "Sturdy aluminum roof mounting rails engineered for high-wind stability"
      ],
      whatsappPrompt: "Hello Brian, I would like to consult with you on sizing a hybrid solar system for my property."
    },
    {
      id: "cctv-security",
      title: "4K & ColorVu CCTV Surveillance Systems",
      tagline: "Keep an eye on what matters most, right from your phone.",
      description: "Professional high-definition security camera installations for private residences, hardware stores, rental apartments, and commercial plazas. Crisp full-color video even at 2:00 AM, with real-time phone alerts when someone enters your perimeter.",
      icon: "cctv",
      realWorldHighlights: [
        "Hikvision and Dahua ColorVu night-vision cameras with built-in audio recording",
        "Smart AI person and vehicle detection to filter out wind, animals, and false alarms",
        "Secure remote view on your iPhone, iPad, or Android phone from anywhere in the world",
        "All cabling neatly tucked inside weatherproof galvanized conduit pipes",
        "Dedicated Western Digital Purple surveillance hard drives for continuous recording"
      ],
      whatsappPrompt: "Hi Brian, I need advice on installing a CCTV surveillance system for my premises."
    },
    {
      id: "emergency-troubleshooting",
      title: "Emergency Fault Troubleshooting & Repairs",
      tagline: "Breakers tripping? Burning smells? We dispatch quickly.",
      description: "When an electrical fault threatens your home, you need an experienced engineer on-site fast. We arrive with digital insulation testers, earth loop testers, and thermal cameras to identify hidden short circuits and neutral drops without damaging your walls.",
      icon: "alert",
      realWorldHighlights: [
        "Urgent dispatch across Kakamega town and neighboring estates within 30-45 minutes",
        "Thermal scan to pinpoint loose connections and overheating busbars before fires start",
        "Immediate replacement of burned, faulty, or substandard circuit breakers",
        "Repair of phase imbalance, neutral burnouts, and lightning surge damage",
        "Clear explanation of what caused the fault and how to keep it from recurring"
      ],
      whatsappPrompt: "URGENT: Hello Brian, I have an electrical breakdown / tripping fault at my property and need emergency assistance."
    },
    {
      id: "air-conditioning",
      title: "Air Conditioning Installation & Servicing",
      tagline: "Whisper-quiet comfort and precision indoor air quality.",
      description: "Proper installation and seasonal servicing of inverter split air conditioning units for master bedrooms, executive offices, clinics, and conference rooms. Low power consumption, eco-friendly refrigerants, and clean drainage piping.",
      icon: "wind",
      realWorldHighlights: [
        "Inverter split systems (9,000 BTU to 24,000 BTU) with ultra-low electricity draw",
        "Nitrogen pressure leak testing and proper R410A / R32 gas recharging",
        "Deep chemical coil cleaning to remove mold, dust, and allergens",
        "Vibration-isolated outdoor compressor brackets to prevent wall noise",
        "Scheduled maintenance checkups to ensure optimal cooling efficiency"
      ],
      whatsappPrompt: "Hello Eng. Brian, I would like to consult on air conditioning installation / servicing."
    },
    {
      id: "electrical-supplies",
      title: "Genuine Electrical Supplies & Switchgear",
      tagline: "Authentic materials with zero counterfeit risk.",
      description: "We supply contractors, builders, and homeowners with certified electrical materials sourced directly from verified manufacturers. No imitation cables, no recycled copper, no brittle plastics.",
      icon: "package",
      realWorldHighlights: [
        "East African Cables 1.5mm, 2.5mm, 4.0mm, and 6.0mm pure copper rolls",
        "Schneider Electric and Chint metal distribution boards and RCD safety breakers",
        "Tempered scratch-resistant crystal glass wall sockets with fast USB-C ports",
        "Jinko Solar monocrystalline panels and Felicity hybrid solar inverters",
        "Fast job-site delivery across Kakamega, Bungoma, Busia, and Vihiga"
      ],
      whatsappPrompt: "Hello Brian, I would like to inquire about purchasing genuine electrical supplies in Kakamega."
    }
  ],

  projects: [
    {
      id: "amalemba-maisonette",
      title: "4-Bedroom Luxury Maisonette Conduit Wiring & 3-Phase Board",
      location: "Amalemba Estate, Kakamega",
      clientType: "Private Homeowner",
      date: "Completed March 2026",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80",
      story: "The owner came to us after another builder used substandard single-core wire that was overheating the cooker socket. We re-chased the masonry, ran heavy-duty PVC conduit with 100% East African Cables, split the 3-phase circuits evenly, and installed luxury glass faceplates throughout.",
      specs: [
        "142 Electrical Points installed",
        "415V Three-Phase Distribution Board with SPD surge arrester",
        "Tested Earth Resistance: 1.8 Ohms",
        "Passed EPRA & KPLC inspection first round"
      ]
    },
    {
      id: "maziwa-solar-arcade",
      title: "10KVA Commercial Solar Hybrid Setup for Retail Arcade",
      location: "Maziwa Road, Kakamega CBD",
      clientType: "Commercial Arcade Owner",
      date: "Completed January 2026",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&auto=format&fit=crop&q=80",
      story: "Frequent power cuts along Maziwa Road were forcing shops, pharmacies, and butcheries to run loud, expensive diesel generators. We engineered a quiet rooftop solar array with a 9.6kWh lithium battery bank that powers refrigeration and point-of-sale systems without a second of downtime.",
      specs: [
        "16x 550W Tier-1 Bifacial Solar Panels",
        "Dual 5KVA Parallel Hybrid Inverters",
        "48V 200Ah Lithium Iron Phosphate (LiFePO4) Battery Rack",
        "Estimated utility bill reduction: over KES 38,000/month"
      ]
    },
    {
      id: "lurambi-cctv-warehouse",
      title: "16-Camera AI Night-Vision Surveillance for Hardware Depot",
      location: "Lurambi, Kakamega",
      clientType: "Depot & Steel Supplies",
      date: "Completed February 2026",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&auto=format&fit=crop&q=80",
      story: "The depot needed 360-degree coverage across a 2-acre yard, especially at the main vehicle loading dock. We installed Hikvision ColorVu cameras mounted in outdoor galvanized trunking, hooked up to an 8TB surveillance drive, and configured live viewing on the owner's phone.",
      specs: [
        "16x 5MP ColorVu AI IP Cameras with Audio",
        "Outdoor Galvanized Conduit Trunking",
        "License plate detection at entrance gate",
        "Live streaming on iPad and mobile phones"
      ]
    },
    {
      id: "shinyalu-solar-resort",
      title: "Eco-Resort Pressurized Solar Water Heating & Garden Lighting",
      location: "Shinyalu, Kakamega County",
      clientType: "Hospitality Lodge",
      date: "Completed November 2025",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80",
      story: "Supplying hot showers to 24 guest cottages in Shinyalu was running up huge electric water heater bills. We installed pressurized evacuated-tube solar water heaters coupled with automatic booster pumps, along with 30 compound solar floodlights along the stone garden trails.",
      specs: [
        "1,800 Liters / Day pressurized hot water capacity",
        "30x All-weather compound solar floodlights",
        "Zero electricity cost for guest water heating",
        "Automatic day/night sensor path illumination"
      ]
    }
  ],

  testimonials: [
    {
      quote: "Brian and his electricians are rare in this industry. He doesn't guess or inflate materials. He inspected our maisonette in Amalemba, explained why our previous wiring was unsafe, and redid the board cleanly. When Kenya Power came for the inspection, it passed in ten minutes.",
      author: "Eng. Davis Wanyama",
      title: "Property Developer, Kakamega",
      service: "Residential 3-Phase Installation"
    },
    {
      quote: "At 9:00 PM on a rainy Thursday, my kitchen socket started sparking and the main breaker tripped. I found Brimu on WhatsApp. Brian answered immediately, sent a technician with a testing meter who found water had seeped into an unsealed external conduit, and made it safe that night.",
      author: "Mama Grace Nekesa",
      title: "Homeowner, Kakamega Town",
      service: "Emergency Fault Troubleshooting"
    },
    {
      quote: "We run a busy medical laboratory in Lurambi where power continuity is critical for our refrigerated reagents. Brimu Electricals sized and installed our 5KVA solar inverter system. It switches in milliseconds when grid power drops. Professionalism at its best.",
      author: "Dr. Catherine Barasa",
      title: "Laboratory Director, Lurambi",
      service: "Solar Power & Backup System"
    }
  ],

  faqs: [
    {
      q: "Why don't you offer instant automated price quotes on your website?",
      a: "Every building in Western Kenya is unique. A proper, safe electrical installation depends on your property layout, wall construction (brick vs quarry stone), earthing soil conditions, distance from the transformer, and exact appliance loads. We never give misleading computer-generated estimates. Instead, message Brian directly on WhatsApp or phone with your plans; we conduct an honest review or site visit to give you a genuine, transparent Bill of Quantities (BQ)."
    },
    {
      q: "Do you come for on-site visits before giving a quote?",
      a: "Yes, absolutely. We regularly conduct site assessments across Kakamega Town, Amalemba, Lurambi, Mumias, Butere, Shinyalu, Vihiga, Bungoma, and Kisumu. Seeing your actual building structure ensures our quotation covers every meter of cable and fitting accurately with zero surprise costs later."
    },
    {
      q: "How can I verify that your cables and breakers are genuine?",
      a: "We only source East African Cables, Schneider Electric, and Chint switchgear from authorized distributors with official KEBS certification marks. We encourage all our clients to inspect the cable markings, copper strand thickness, and manufacturer batch codes on-site before we install them."
    },
    {
      q: "How fast do you respond to emergency electrical faults?",
      a: "For dangerous electrical emergencies — such as sparking, burning insulation, or persistent circuit breaker trips — our mobile response vehicle in Kakamega Town typically arrives within 30 to 45 minutes of your WhatsApp or phone call."
    },
    {
      q: "What is the best way to contact Brian Murarai right now?",
      a: "Clicking the green WhatsApp button on this site opens a direct chat with Brian on +254 752 916 659. You can also call his line directly or click the Email button to send blueprints and architectural drawings to brianmurarai97@gmail.com."
    }
  ],

  // Photographic Archive / Project Pictorials Handled
  pictorials: [
    {
      id: "pic-01",
      title: "Under-Slab PVC Conduit Piping Before Concrete Pour",
      category: "wiring",
      categoryLabel: "Conduit & Piping",
      location: "Amalemba Villa, Kakamega",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&auto=format&fit=crop&q=80",
      caption: "Heavy-gauge Class A PVC conduit piping secured and pressure-tested prior to ground floor slab casting. Prevents crushed pipes and ensures smooth cable pulling.",
      specs: "25mm & 32mm High-Impact PVC • Under-Slab Layout"
    },
    {
      id: "pic-02",
      title: "Three-Phase 100A Main Distribution Board with Surge Protection",
      category: "switchboards",
      categoryLabel: "Switchboards & Metering",
      location: "Maziwa Road, Kakamega CBD",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&auto=format&fit=crop&q=80",
      caption: "Clean DIN-rail assembly with Schneider Electric double-pole isolators, Chint 30mA RCDs, and Type 1+2 surge protective devices (SPD) protecting against lightning strikes.",
      specs: "415V Three-Phase Balanced • Earth Tested at 1.8Ω"
    },
    {
      id: "pic-03",
      title: "Commercial Tier-1 Bifacial Solar Array Installation",
      category: "solar",
      categoryLabel: "Solar Inverters & Batteries",
      location: "Shinyalu Eco-Resort, Kakamega",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=900&auto=format&fit=crop&q=80",
      caption: "16x 550W Jinko bifacial monocrystalline modules mounted on custom aluminum framing. Captures direct overhead tropical sun and rear reflected ambient light.",
      specs: "8.8 kWp Total PV Array • Cyclone-Rated Roof Mounts"
    },
    {
      id: "pic-04",
      title: "5KVA Hybrid Inverter & 48V Lithium Battery Storage Rack",
      category: "solar",
      categoryLabel: "Solar Inverters & Batteries",
      location: "Lurambi Medical Lab, Kakamega",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&auto=format&fit=crop&q=80",
      caption: "Silent pure sine wave hybrid solar setup delivering 10ms seamless transfer during KPLC power cuts. Safeguards refrigerated laboratory reagents and diagnostic computers.",
      specs: "5000W Continuous • 48V 200Ah LiFePO4 (9.6 kWh)"
    },
    {
      id: "pic-05",
      title: "4K ColorVu AI Perimeter Security Camera in Galvanized Trunking",
      category: "cctv",
      categoryLabel: "CCTV & Security",
      location: "Lurambi Depot & Hardware Yard",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=900&auto=format&fit=crop&q=80",
      caption: "Hikvision 4K ColorVu camera housed in weatherproof IP67 enclosure, connected through galvanized industrial conduit to eliminate vulnerable exposed wires.",
      specs: "8MP Ultra HD • Full-Color 24/7 Night Vision"
    },
    {
      id: "pic-06",
      title: "Precision Wall Chasing & Pure Copper Cable Laying",
      category: "wiring",
      categoryLabel: "Conduit & Piping",
      location: "Kakamega Town Modern Residence",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900&auto=format&fit=crop&q=80",
      caption: "Vertical and horizontal masonry chasing with level laser alignment. Wired exclusively with 100% East African Cables electrolytic copper conductors.",
      specs: "2.5mm² Ring Mains • 1.5mm² Lighting • KEBS Certified"
    },
    {
      id: "pic-07",
      title: "Architectural Ceiling Cove Lighting & Glass Touch Faceplates",
      category: "lighting",
      categoryLabel: "Architectural Lighting",
      location: "Chavakali Executive Villa",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format&fit=crop&q=80",
      caption: "Indirect warm 3000K LED ceiling cove illumination paired with scratch-proof tempered crystal glass sockets featuring dual USB and Type-C fast charging.",
      specs: "Smart Two-Way Switching • Child-Safe Shuttered Sockets"
    },
    {
      id: "pic-08",
      title: "75kW Industrial Motor Control Center (MCC) Panel Wiring",
      category: "switchboards",
      categoryLabel: "Switchboards & Metering",
      location: "Mumias Agricultural Grain Mill",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&auto=format&fit=crop&q=80",
      caption: "Custom fabricated IP54 floor-standing MCC panel with automated Star-Delta motor starter, phase loss protection, and power factor correction capacitors.",
      specs: "100 HP Inductive Load • Power Factor Corrected to 0.98"
    },
    {
      id: "pic-09",
      title: "Commercial High-Output Solar Compound Floodlights",
      category: "solar",
      categoryLabel: "Solar Inverters & Batteries",
      location: "Western Hardware Loading Bay",
      image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=900&auto=format&fit=crop&q=80",
      caption: "Heavy-duty 200W IP66 solar floodlights mounted on galvanized steel poles with automated dusk-to-dawn sensors. Illuminates the entire commercial parking and loading apron.",
      specs: "200W LED Super Bright • 16-Hour LiFePO4 Battery Runtime"
    }
  ]
};
