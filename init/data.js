const sampleListings = [
  // --- TRENDING (Popular Spots) ---
  {
    title: "Varkala Cliff Villa",
    description: "Stay on the edge of the stunning Varkala Cliff with panoramic views of the Arabian Sea. A trending spot for sunsets.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=60",
    },
    price: 6500,
    location: "Varkala",
    country: "India",
    category: "Trending",
  },
  {
    title: "The Goa Party House",
    description: "Located near Baga Beach, this vibrant villa is perfect for groups looking to experience the trending nightlife of Goa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=60",
    },
    price: 12000,
    location: "Goa",
    country: "India",
    category: "Trending",
  },
  {
    title: "Rishikesh Yoga Retreat",
    description: "A trending destination for wellness. Enjoy yoga sessions by the Ganges and organic vegan meals.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582255757757-0a2a16d51025?auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Rishikesh",
    country: "India",
    category: "Trending",
  },

  // --- ICONIC CITIES (Major Metros) ---
  {
    title: "Mumbai Sea-Link Apartment",
    description: "A modern apartment offering iconic views of the Bandra-Worli Sea Link and the Mumbai skyline.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=800&q=60",
    },
    price: 15000,
    location: "Mumbai",
    country: "India",
    category: "Iconic Cities",
  },
  {
    title: "South Delhi Heritage Flat",
    description: "Experience the charm of the capital in this renovated flat near the iconic Hauz Khas Village.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=60",
    },
    price: 8000,
    location: "New Delhi",
    country: "India",
    category: "Iconic Cities",
  },
  {
    title: "Colonial Kolkata Mansion",
    description: "Stay in the heart of the City of Joy in a preserved colonial mansion near Park Street.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1558431382-27e30314225d?auto=format&fit=crop&w=800&q=60",
    },
    price: 7500,
    location: "Kolkata",
    country: "India",
    category: "Iconic Cities",
  },
  {
    title: "Bangalore Garden Loft",
    description: "A lush, green loft in Indiranagar, perfectly capturing the vibe of India's Garden City.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?auto=format&fit=crop&w=800&q=60",
    },
    price: 9000,
    location: "Bangalore",
    country: "India",
    category: "Iconic Cities",
  },

  // --- MOUNTAINS (Hill Stations) ---
  {
    title: "Manali Cedar Cottage",
    description: "A cozy wooden cottage surrounded by deodar forests. The perfect mountain escape.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1626621341517-b13ff3501bcf?auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Manali",
    country: "India",
    category: "Mountains",
  },
  {
    title: "Darjeeling Tea Estate",
    description: "Wake up to the smell of fresh tea leaves and a view of Kanchenjunga from this mountain estate.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1626014902899-1234479998d8?auto=format&fit=crop&w=800&q=60",
    },
    price: 8500,
    location: "Darjeeling",
    country: "India",
    category: "Mountains",
  },
  {
    title: "Shillong Cloud Home",
    description: "Nestled in the 'Scotland of the East', this home offers breathtaking views of the rolling hills.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1629853920703-4f9e31d4715f?auto=format&fit=crop&w=800&q=60",
    },
    price: 5500,
    location: "Shillong",
    country: "India",
    category: "Mountains",
  },
  {
    title: "Munnar Misty Villa",
    description: "A private villa located high in the Western Ghats, often covered in a blanket of clouds.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1590449987372-e5b15b57d602?auto=format&fit=crop&w=800&q=60",
    },
    price: 11000,
    location: "Munnar",
    country: "India",
    category: "Mountains",
  },

  // --- CASTLES (Forts & Palaces) ---
  {
    title: "Jaipur Heritage Haveli",
    description: "Live like royalty in this restored haveli featuring traditional Rajasthani architecture and courtyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=60",
    },
    price: 18000,
    location: "Jaipur",
    country: "India",
    category: "Castles",
  },
  {
    title: "Neemrana Fort Suite",
    description: "A historic 15th-century fort turned hotel on the Delhi-Jaipur highway. Perfect for a royal weekend.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586943101559-4cdcf86a6f87?auto=format&fit=crop&w=800&q=60",
    },
    price: 22000,
    location: "Neemrana",
    country: "India",
    category: "Castles",
  },
  {
    title: "Udaipur Lake Palace Stay",
    description: "A luxurious stay with views of the City Palace and Lake Pichola. The ultimate castle experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=800&q=60",
    },
    price: 35000,
    location: "Udaipur",
    country: "India",
    category: "Castles",
  },

  // --- AMAZING POOLS ---
  {
    title: "Kumarakom Infinity Pool",
    description: "Relax in a stunning infinity pool that merges seamlessly with the Kerala backwaters.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1572331165267-854da2dc7252?auto=format&fit=crop&w=800&q=60",
    },
    price: 20000,
    location: "Kumarakom",
    country: "India",
    category: "Amazing Pools",
  },
  {
    title: "Goa Private Pool Villa",
    description: "A luxury villa in North Goa featuring a massive private pool and sun deck.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=60",
    },
    price: 25000,
    location: "Goa",
    country: "India",
    category: "Amazing Pools",
  },
  {
    title: "Kabini Jungle Pool",
    description: "A wildlife resort offering a private plunge pool overlooking the Kabini river and forest.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=60",
    },
    price: 18000,
    location: "Kabini",
    country: "India",
    category: "Amazing Pools",
  },

  // --- CAMPING ---
  {
    title: "Jaisalmer Desert Camp",
    description: "Luxury tents in the Sam Sand Dunes. Enjoy folk music, camel safaris, and bonfire nights.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1542699212-0761e2cb0385?auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Jaisalmer",
    country: "India",
    category: "Camping",
  },
  {
    title: "Pawna Lake Glamping",
    description: "Glamping tents right by the waters of Pawna Lake. Ideal for stargazing near Mumbai.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Lonavala",
    country: "India",
    category: "Camping",
  },
  {
    title: "Spiti Valley Trek Camp",
    description: "High-altitude camping for adventure lovers in the rugged terrain of Spiti Valley.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1496947853313-2d447598f361?auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Spiti",
    country: "India",
    category: "Camping",
  },

  // --- FARMS ---
  {
    title: "Punjabi Farm Stay",
    description: "Experience authentic rural life in a lush farm near Amritsar. Tractor rides and fresh milk included!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Amritsar",
    country: "India",
    category: "Farms",
  },
  {
    title: "Coorg Coffee Plantation",
    description: "Stay in the middle of a 50-acre coffee estate. Learn about bean-to-cup processing.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1541359197025-07283c74384d?auto=format&fit=crop&w=800&q=60",
    },
    price: 7000,
    location: "Coorg",
    country: "India",
    category: "Farms",
  },
  {
    title: "Nashik Vineyard Stay",
    description: "A chic stay overlooking the vineyards of Nashik. Includes wine tasting tours.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=800&q=60",
    },
    price: 11000,
    location: "Nashik",
    country: "India",
    category: "Farms",
  },

  // --- ARCTIC (Snow/High Altitude) ---
  {
    title: "Gulmarg Ski Lodge",
    description: "A premium wooden lodge located next to the Gulmarg Gondola. Perfect for skiing enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=800&q=60",
    },
    price: 15000,
    location: "Gulmarg",
    country: "India",
    category: "Arctic",
  },
  {
    title: "Auli Snow Resort",
    description: "Wake up to white slopes in India's premier skiing destination. Cozy heated rooms available.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1546522306-03c621532f6b?auto=format&fit=crop&w=800&q=60",
    },
    price: 9500,
    location: "Auli",
    country: "India",
    category: "Arctic",
  },
  {
    title: "Ladakh Winter Homestay",
    description: "Brave the chill in this authentic Ladakhi home. Experience the frozen beauty of the Himalayas.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1614742784792-c4396b27d427?auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Leh",
    country: "India",
    category: "Arctic",
  },

  // --- ROOMS (Boutique/Cozy Stays) ---
  {
    title: "Pondicherry French Room",
    description: "A quaint room with yellow walls and colonial decor in the heart of White Town.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582556369282-595dc02e4d94?auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Pondicherry",
    country: "India",
    category: "Rooms",
  },
  {
    title: "Fort Kochi Heritage Room",
    description: "Stay in a room filled with antiques and history in the charming streets of Fort Kochi.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Kochi",
    country: "India",
    category: "Rooms",
  },
  {
    title: "Gokarna Beach Shack",
    description: "A simple, cozy room right on the beach. Fall asleep to the sound of waves.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Gokarna",
    country: "India",
    category: "Rooms",
  },
  {
    title: "Shimla Attic Room",
    description: "A charming attic room with wood paneling and a view of the Shimla mall road.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Shimla",
    country: "India",
    category: "Rooms",
  },
];

module.exports = { data: sampleListings };