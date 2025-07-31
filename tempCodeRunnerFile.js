const myData = [
  {
    id: 1,
    name: "jhon",
    email: "jhon@gmail.com",
  },
  {
    id: 2,
    name: "sita",
    email: "sita@gmail.com",
  },
  {
    id: 3,
    name: "hari",
    email: "hari@gmail.com",
  },
];

myData.map((item, index) => {
  console.log(
    `ID: ${item.id}, Name: ${item.name}, Email: ${item.email} at index ${index}`
  );
});