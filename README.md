## `Demos`

<div align="center">
    <div>
        <h2>Price Input</h2>
        <h3 align="start">Computer<h3>
        <p align="start">1</p>
        <img src="./src/assets/priceInput.png" alt="" width="400">
        <p align="start">2</p>
        <img src="./src/assets/priceInput2.png" alt="" width="400">
        <p align="start">3</p>
        <img src="./src/assets/priceInput3.png" alt="" width="400">
        <h3 align="start">Mobile<h3>
        <img src="./src/assets/priceInput_mobile.png" alt="" width="400">
    </div>
    <hr>
    <div>
        <h2>Age Group Select</h2>
        <h3 align="start">Computer<h3>
        <p align="start">1</p>
        <img src="./src/assets/ageSelect.png" alt="" width="400">
        <p align="start">2</p>
        <p align="start">End age can only choose from 15 to 20 now<p>
        <img src="./src/assets/ageSelect_option.png" alt="" width="400">
    </div>
    <hr>
    <div>
        <h2>Age Group Price List</h2>
        <h3 align="start">Computer<h3>
        <p align="start">1</p>
        <img src="./src/assets/list.png" alt="" width="400">
        <p align="start">2</p>
        <img src="./src/assets/list2.png" alt="" width="400">
        <p align="start">3</p>
        <img src="./src/assets/list_multi.png" alt="" width="400">
        <h3 align="start">Mobile<h3>
        <img src="./src/assets/list_mobile.png" alt="" width="400">
    </div>
    <div>
        <h2>Some other UIs</h2>
        <h3 align="start">Computer<h3>
        <p align="start">1</p>
        <img src="./src/assets/hero.png" alt="" width="400">
        <p align="start">2</p>
        <img src="./src/assets/hero2.png" alt="" width="400">
        <h3 align="start">Mobile<h3>
        <p align="start">1</p>
        <img src="./src/assets/hero_mobile.png" alt="" width="400">
        <p align="start">2</p>
        <img src="./src/assets/hero_mobile2.png" alt="" width="400">
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
