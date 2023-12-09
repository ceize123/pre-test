## `Demos`

<div align="center">
    <div>
        <h2>Price Input</h2>
        <h3>Computer<h3>
        <p align="start">1</p>
        <img src="./src/assets/priceInput.png" alt="" width="500">
        <p align="start">2</p>
        <img src="./src/assets/priceInput2.png" alt="" width="500">
        <p align="start">3</p>
        <img src="./src/assets/priceInput3.png" alt="" width="500">
        <h3>Mobile<h3>
        <img src="./src/assets/priceInput_mobile.png" alt="" width="300">
    </div>
    <hr>
    <div>
        <h2>Age Group Select</h2>
        <h3>Computer<h3>
        <p align="start">1</p>
        <img src="./src/assets/ageSelect.png" alt="" width="500">
        <p align="start">2</p>
        <img src="./src/assets/ageSelect_option.png" alt="" width="500">
    </div>
    <hr>
    <div>
        <h2>Age Group Price List</h2>
        <h3>Computer<h3>
        <p align="start">1</p>
        <img src="./src/assets/list.png" alt="" width="500">
        <p align="start">2</p>
        <img src="./src/assets/list2.png" alt="" width="500">
        <p align="start">3</p>
        <img src="./src/assets/list_multi.png" alt="" width="500">
        <h3>Mobile<h3>
        <img src="./src/assets/list_mobile.png" alt="" width="300">
    </div>
</div>

---

### `npm test`

Launches the test runner in the interactive watch mode.
3 unit tests will be operated:

1. addComma test: to test addComma function
   Input: -789,912.3
   Should output: -789,912.3

2. getNumberIntervals test: to test getNumberIntervals
   Input: \[[1, 3], [5, 12], [7, 10], [14, 17]]
   Should output: {
   overlap: \[[7, 10]],
   notInclude: \[[0, 0], [4, 4], [13, 13], [18, 20]]
   }

3. priceInput test: to test priceInput component
   This is component version of addComma
