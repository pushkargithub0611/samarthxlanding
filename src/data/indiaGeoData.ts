// This is a simplified version of India's topojson data
export const indiaGeoData = {
  type: "Topology",
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
  },
  arcs: [[[0,0]], [[1,1]], [[2,2]]]
};