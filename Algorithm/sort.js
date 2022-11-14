const arr = [
  {
    name: "Prague - train station",
    value: 1041041,
    city: "Prague",
  },
  {
    name: "Brno - bus station",
    value: 104411041,
    city: "Brno",
  },
  {
    name: "Prague - bus station",
    value: 104411041,
    city: "Prague",
  },
  {
    name: "Brno - train station",
    value: 44411041,
    city: "Brno",
  },
];

let sortedArray = arr.sort((x, y) => {
    return (x.name.localeCompare(y.name))
});
console.log(sortedArray);

/* [
  { name: "Brno - bus station", value: 104411041, city: "Brno" },
  { name: "Brno - train station", value: 44411041, city: "Brno" },
  { name: "Prague - bus station", value: 104411041, city: "Prague" },
  { name: "Prague - train station", value: 1041041, city: "Prague" },
]; */