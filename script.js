const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

getSumBtn.addEventListener("click", function () {
    let table = document.getElementById("tb");

    // Remove existing total row if already present
    let existingTotalRow = document.getElementById("totalRow");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    let total = getSum();

    // Create a new row for total price
    let totalRow = document.createElement("tr");
    totalRow.id = "totalRow";  // Assign ID for testing

    let totalCell = document.createElement("td");
    totalCell.colSpan = 2;  // Span across both columns
    totalCell.style.fontWeight = "bold";
    totalCell.style.textAlign = "right";
    totalCell.textContent = `Total Price: Rs ${total}`;
    
    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
});

const getSum = () => {
    let sum = 0;
    let prices = document.querySelectorAll(".price");

    prices.forEach(price => {
        sum += parseInt(price.textContent) || 0;  // Ensure NaN is handled
    });

    return sum;
};

// const getSumBtn = document.createElement("button");
// getSumBtn.append("Get Total Price");
// document.body.appendChild(getSumBtn);

// getSumBtn.addEventListener('click', function () {
//     let table_val = document.getElementById('tb');

//     // inserting at the end of table 
//     let last_row_place = table_val.insertRow(-1);

//     //crating a row to fill the ans
//     let row_val = document.createElement("tr");
    
//     //creating column and adding value
//     let col_val = document.createElement("td");
//     col_val.textContent = `Ths is the text -> ${getSum()}`;

//     //adding to row
//     row_val.appendChild(col_val);

//     // adding to the place 
//     last_row_place.appendChild(row_val);
// });

// const getSum = () => {

//     let sum = 0;
//     let sum_arry = document.querySelectorAll('.price')
//     for (let i = 0; i < sum_arry.length; i++) {
//         sum = sum + parseInt(sum_arry[i].textContent);

//     }
//     return sum;

// };

// getSumBtn.addEventListener("click", getSum);


