// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

//exercise 1 - forEach Basics:
provinces.forEach((province, index) => {
  const name = names[index];
  console.log(name, province); //logs name and 
});
//Ask Joshua- should Province be in brackets? e.g Ashwin (WesternCape)?

//exercise 2 - Uppercase Transformation: 
const uppercasedProvinces = provinces.map(province => province.toUpperCase())
console.log(uppercasedProvinces);

//exercise 3 - Name Lengths:
const nameLength = names.map(name => name.length)
console.log(nameLength)


//exercise 4 - Sort Provinces in Alphabetical order 
const sortedProvinces = provinces.sort()
console.log(sortedProvinces)


// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]