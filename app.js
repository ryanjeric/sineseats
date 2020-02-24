let reservedItems = JSON.parse(localStorage.getItem('items')) || [];

console.log(reservedItems);

var options = {
    // Reserved and disabled seats are indexed
    // from left to right by starting from 0.
    // Given the seatmap as a 2D array and an index [R, C]
    // the following values can obtained as follow:
    // I = columns * R + C
    map: {
        id: 'map-container',
        rows: 9,
        columns: 9,
        // e.g. Reserved Seat [Row: 1, Col: 2] = 7 * 1 + 2 = 9
        reserved: {
            //seats: [1, 2, 3, 5, 6, 7, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21],
            seats: reservedItems
        },
        disabled: {
            seats: [0, 8],
            rows: [4],
            columns: [4]
        }
    },
    types: [
        { type: "ADULT", backgroundColor: "#006c80", price: 210, 
            selected: reservedItems['ADULT']
        },
        { type: "CHILD", backgroundColor: "#287233", price: 0, 
            selected: reservedItems['CHILD']
        }
    ],
    cart: {
        id: 'cart-container',
        width: 280,
        height: 250,
        currency: 'P',
    },
    legend: {
        id: 'legend-container',
    },
    assets: {
        path: "JS/seatchart.js-develop/src/assets",
    }
};

var sc = new Seatchart(options);


const reserveBtn = document.querySelector(".reserve");
reserveBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log(sc);
    const cartData = sc.getCart();
    let mergeData = cartData['ADULT'].concat(cartData['CHILD']);
    console.log(reservedItems);
    console.log(mergeData);
    items = mergeData.concat(reservedItems);


    console.log(items);
    localStorage.setItem('items',JSON.stringify(items));

    location.reload();
    

})

