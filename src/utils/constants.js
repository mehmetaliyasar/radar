export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.654293",
    bl_lng: "25.514642",
    tr_lat: "42.793449",
    tr_lng: "43.185981",
    limit: "300",
  },
  headers: {
    "x-rapidapi-key": "1f0c239ea9msh1a22177f7c50aa5p14f0c0jsn5501e9105520",
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
};

export const headers = {
  "x-rapidapi-key": "1f0c239ea9msh1a22177f7c50aa5p14f0c0jsn5501e9105520",
  "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  "Content-Type": "application/json",
};
