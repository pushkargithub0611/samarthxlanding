// This is a simplified version of India's topojson data with basic coordinates
export const indiaGeoData = {
  type: "Topology",
  arcs: [
    [[73.4, 16.7], [74.5, 17.8], [76.8, 20.4], [74.2, 21.6], [72.8, 19.1], [73.4, 16.7]],
    [[77.3, 26.8], [80.9, 27.6], [84.6, 27.3], [82.7, 25.1], [78.5, 24.8], [77.3, 26.8]],
    [[74.4, 22.7], [78.2, 23.8], [82.8, 24.5], [80.2, 21.6], [75.6, 21.9], [74.4, 22.7]]
  ],
  objects: {
    india: {
      type: "GeometryCollection",
      geometries: [
        {
          type: "Polygon",
          properties: { name: "Maharashtra", id: "IN-MH" },
          arcs: [[0]]
        },
        {
          type: "Polygon",
          properties: { name: "Uttar Pradesh", id: "IN-UP" },
          arcs: [[1]]
        },
        {
          type: "Polygon",
          properties: { name: "Madhya Pradesh", id: "IN-MP" },
          arcs: [[2]]
        }
      ]
    }
  }
};