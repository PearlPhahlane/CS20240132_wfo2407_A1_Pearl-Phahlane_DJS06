// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

//exercise 1 - forEach Basics:
provinces.forEach((province, index) => {
  const name = names[index];
  console.log(name, `(${province})`); //logs name and province as "Name, Province"
});
//Ask Joshua- should Province be in brackets? e.g Ashwin (WesternCape)?

//exercise 2 - Uppercase Transformation: 
const uppercasedProvinces = provinces.map(province => province.toUpperCase())
console.log(uppercasedProvinces); //logs Provinces in uppercase

//exercise 3 - Name Lengths:
const nameLength = names.map(name => name.length)
console.log(nameLength) //logs the length of each name


//exercise 4 - Sort Provinces in Alphabetical order 
const sortedProvinces = provinces.sort()
console.log(sortedProvinces) //logs provinces in alphabetical order


//exercise 5 - filter to remove provinces containing "Cape" 
const nonCapeProvinces = provinces.filter(province => !province.includes("Cape"))
console.log(nonCapeProvinces) //logs provinces without the word "Cape"

//exercise 6 - Finding 'S' determine if name contains letter 'S'
const nameWithS = names.map((name) => {
  return name.includes("S");
} )
console.log(nameWithS) //returns boolean array - if the name contains 'S' it will be true else false 

/*ASK JOSHUA about this
const nameWithS = names.map((name) => {
    return name.split('').some((char) => char === 'S');
});
console.log(nameWithS)*/

//exercise 7 - creating object mapping
const namesToProvincesMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(namesToProvincesMap);


// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//Advanced exercises (Single 'console.log' execution)

// log products
console.log(products.map(product => product.product));

//filter by name length
console.log(products.filter((product) => product.product.length <= 5)); //logs product names that are <= 5 characters

//Price Manipulation
console.log(
  products
  .filter((product => product.price !== "")) //filter out products without prices
  .map(product => ({...product, //to keep other properties as they are
    price: parseFloat(product.price) || 0 //convert "price" to a number or set 0 to empty strings
  }))
  .reduce((acc, product) => acc + product.price, 0) //logs the total price
);


//Concatenate Product Names
console.log(`"${products.reduce((acc, product) => acc + " " + product.product, " ").trim()}"`); //logs single string of product names 

//Find extremes in Prices 
console.log(
  products
    .filter(product => product.price !== "") // Exclude products without valid prices
    .map(product => ({ ...product, price: parseFloat(product.price) || 0 })) // Convert prices to numbers
    .reduce(
      (acc, product) => {
        acc.Highest = Math.max(acc.Highest, product.price);  // Find the highest price
        acc.Lowest = Math.min(acc.Lowest, product.price);    // Find the lowest price
        return acc;
      },
      { Highest: -Infinity, Lowest: Infinity } // Initialize with extreme values
    )
);