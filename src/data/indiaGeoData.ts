// This is a simplified version of India's topojson data
export const indiaGeoData = {
  type: "Topology",
  arcs: [
    // Maharashtra
    [[72.6, 15.8], [74.5, 16.2], [76.8, 20.4], [74.2, 21.6], [72.8, 19.1], [72.6, 15.8]],
    // Uttar Pradesh
    [[77.3, 26.8], [80.9, 27.6], [84.6, 27.3], [82.7, 25.1], [78.5, 24.8], [77.3, 26.8]],
    // Madhya Pradesh
    [[74.4, 22.7], [78.2, 23.8], [82.8, 24.5], [80.2, 21.6], [75.6, 21.9], [74.4, 22.7]]
  ],
  objects: {
    india: {
      type: "GeometryCollection",
      geometries: [
        {
          type: "Polygon",
          properties: { 
            name: "Maharashtra",
            id: "IN-MH",
            totalSchools: 96000,
            primarySchools: 65000,
            secondarySchools: 31000
          },
          arcs: [[0]]
        },
        {
          type: "Polygon",
          properties: { 
            name: "Uttar Pradesh",
            id: "IN-UP",
            totalSchools: 150000,
            primarySchools: 98000,
            secondarySchools: 52000
          },
          arcs: [[1]]
        },
        {
          type: "Polygon",
          properties: { 
            name: "Madhya Pradesh",
            id: "IN-MP",
            totalSchools: 80000,
            primarySchools: 55000,
            secondarySchools: 25000
          },
          arcs: [[2]]
        }
      ]
    }
  }
};