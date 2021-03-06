const {
  searchByProductsName,
  filterByCategory,
  filterByPrice,
  totalPriceCal,
} = require("./logic.js");
const data = require("./data.js");
test("should return all the objects contain the same Caregorey pass", () => {
  const actual = filterByCategory("Formal", data);
  const expected = [
    {
      id: 1,
      name: "dress",
      details: "New Style Hijab",
      price: 25,
      image:
        "https://www.sayidaty.net/sites/default/files/styles/800x510/public/2020/06/20/6820411-1854158242.jpg",
      category: "Formal",
    },
    {
      id: 4,
      name: "Hijab",
      details: "New Style Hijab",
      price: 25,
      image:
        "https://www.sayidaty.net/sites/default/files/styles/800x510/public/2020/10/28/7135861-841127383.jpg",
      category: "Formal",
    },
  ];
  expect(actual).toEqual(expected);
});

// Search By Name Function test
test("should return all the objects contain the same name pass", () => {
  const actual = searchByProductsName("dress", data);
  const expected = [
    {
      id: 0,
      name: "dress",
      details: "New Style Hijab",
      price: 25,
      image:
        "https://www.zyadda.com/wp-content/uploads/2021/04/hijab_jan_23_photoshoot0400_1.jpg",
      category: "Dress soiree",
    },
    {
      id: 1,
      name: "dress",
      details: "New Style Hijab",
      price: 25,
      image:
        "https://www.sayidaty.net/sites/default/files/styles/800x510/public/2020/06/20/6820411-1854158242.jpg",
      category: "Formal",
    },
  ];
  expect(actual).toEqual(expected);
});

// Filter Items By Price
describe("Testing filter items by price", () => {
  test("should return filtered array", () => {
    const actual = filterByPrice(20, data);
    const expected = [
      {
        id: 2,
        name: "Hijab",
        details: "New Style Hijab",
        price: 20,
        image:
          "https://images-na.ssl-images-amazon.com/images/I/418oAXVrsjL._AC_SY580_.jpg",
        category: "dress",
      },
    ];
    expect(actual).toEqual(expected);
  });
});

//Total Price Test
describe("Testing Total Price return value", () => {
  test("Should return 50", () => {
    const actual = totalPriceCal([
      {
        id: 1,
        name: "dress",
        details: "New Style Hijab",
        price: 25,
        image:
          "https://www.sayidaty.net/sites/default/files/styles/800x510/public/2020/06/20/6820411-1854158242.jpg",
        category: "Formal",
      },
      {
        id: 4,
        name: "Hijab",
        details: "New Style Hijab",
        price: 25,
        image:
          "https://www.sayidaty.net/sites/default/files/styles/800x510/public/2020/10/28/7135861-841127383.jpg",
        category: "Formal",
      },
    ]);
    const expected = 50;
    expect(actual).toBe(expected);
  });
});
