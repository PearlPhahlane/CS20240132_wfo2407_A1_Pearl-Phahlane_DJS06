// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

//exercise 1 - forEach Basics:
//log each name and each province separately
names.forEach(name => console.log(name)); //logs each name 
provinces.forEach(province => console.log(province)); //logs each province

names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
}); //logs names with matching provinces in the format "Name (Province)"


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
console.log(nonCapeProvinces.length) //logs the count for provinces without the word "Cape"

//exercise 6 - Finding 'S' determine if name contains letter 'S'
const nameWithS = names.map((name) => {
    return name.split('').some((char) => char === 'S');
});
console.log(nameWithS) //logs boolean array- displays true for name containing 's' else false

//exercise 7 - creating object mapping 
const namesToProvincesMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(namesToProvincesMap); //logs an object mapping names to their respective provinces


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

//Exercise 1 - log products
console.log(products.map(product => product.product)); //logs an array of each product name 

//Exercise 2 - filter by name length
console.log(products.filter((product) => product.product.length <= 5)); //logs product properties that are <= 5 characters

//Exercise 3 - price manipulation
console.log(
  products
  .filter((product => product.price !== "")) //filter out products without prices
  .map(product => ({...product, //to keep other properties as they are
    price: parseFloat(product.price) || 0 //convert "price" to a number or set 0 to empty strings
  }))
  .reduce((acc, product) => acc + product.price, 0) //logs the total price
);


//Exercise 4 - concatenate product names
console.log(`"${products.reduce((acc, product) => acc + " " + product.product, " ").trim()}"`); //logs single string of product names 

//Exercise 5 - Find extremes in Prices 
console.log(
  `Highest: ${products.reduce((acc, product) => {
    const price = typeof product.price === 'string' && product.price.trim() !== '' ? Number(product.price) : (product.price || 0);
    return price > acc ? price : acc;
  }, -Infinity)}. Lowest: ${products.reduce((acc, product) => {
    const price = typeof product.price === 'string' && product.price.trim() !== '' ? Number(product.price) : (product.price || 0);
    return price < acc ? price : acc;
  }, 0)}.`
); //logs the highest and lowest price as:  Highest: 10. Lowest: 0.


//Object transformation
console.log(
  products.reduce((acc, curr) => [
    ...acc,
    Object.entries(curr).reduce((obj, [key, value]) => ({
      ...obj,
      [key === 'product' ? 'name' : 'cost']: key === 'price' 
        ? (value === ' ' || value === '' ? 0 : Number(value))
        : value
    }), {})
  ], [])
); //logs new array with name and cost as properties and not product and price