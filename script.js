document.addEventListener("DOMContentLoaded", () => {
  function factorial_iteration() {
    let inputValue = +document.querySelector("#factorial__input-iteration").value;

    let result;
    if (inputValue === 0) {
      result = 1;
    } else if (inputValue < 0) {
      result = "Тільки числа >= 0";
    } else {
      result = 1;
      while (inputValue > 1) {
        result *= inputValue--;
      }
    }
    document.querySelector("#factorial__output-iteration").innerText = result;
  }
  document.querySelector("#factorial__btn-iteration").addEventListener("click", factorial_iteration);

  function factorial_recursion(num) {
    if (num === 0) {
      return 1;
    } else if (num > 0) {
      return num * factorial_recursion(num - 1);
    } else {
      return "Тільки числа >= 0";
    }
  }

  document.querySelector("#factorial__btn-recursion").addEventListener("click", () => {
    let inputValue = +document.querySelector("#factorial__input-recursion").value;
    document.querySelector("#factorial__output-recursion").innerText = factorial_recursion(inputValue);
  });

  function productOfArray_iteration() {
    let product = 1;
    let inputValue = document.querySelector("#productOfArray__input-iteration").value;
    let arr = inputValue.split(",");

    if (arr.length > 1) {
      for (let number of arr) {
        if (number == '' || number == 0) {
          number = 1;
        }

        if (+number % 2 == 0) {
          product *= +number;
        }
      }
      if (product == 1) {
        product = "Парних чисел немає";
      }
    } else {
      product = "Введіть хоча б 2 числа!";
    }

    document.querySelector("#productOfArray__output-iteration").innerText = product;
  }
  document.querySelector("#productOfArray__btn-iteration").addEventListener("click", productOfArray_iteration);

  function productOfArray_recursion(arr) {
    let product = 1;
    const output = document.querySelector("#productOfArray__output-recursion");

    if (arr.length > 1) {
      function helper(a) {
        if (product == 1 && a.length == 0) {
          return output.innerText = "Парних чисел немає";
        }

        if (a.length == 0) return output.innerText = product;

        if (a[0] == '' || a[0] == 0) {
          a[0] = 1;
        }

        if (+a[0] % 2 == 0) {
          product *= +a[0];
        }

        helper(a.slice(1))
      }

      helper(arr);
    } else {
      return output.innerText = "Введіть хоча б 2 числа!";
    }
  }

  document.querySelector("#productOfArray__btn-recursion").addEventListener("click", () => {
    let inputValue = document.querySelector("#productOfArray__input-recursion").value;
    let array = inputValue.split(",");
    productOfArray_recursion(array);
  });

  function isPalindrome_iteration() {
    let inputValue = document.querySelector("#isPalindrome__input-iteration").value.toLowerCase();
    const output = document.querySelector("#isPalindrome__output-iteration");

    if (inputValue.length == 0) {
      return output.innerText = "Введіть щось!";
    }

    if (inputValue.length == 1) {
      return output.innerText = true;
    }

    const lastIndex = inputValue.length - 1;
    for (let i = 0; i < inputValue.length / 2; i++) {
      if (inputValue[i] !== inputValue[lastIndex - i]) {
        return output.innerText = false;
      }
    }
    return output.innerText = true;
  }

  document.querySelector("#isPalindrome__btn-iteration").addEventListener("click", isPalindrome_iteration);

  function isPalindrome_recursion(str) {
    const output = document.querySelector("#isPalindrome__output-recursion");

    if (str.length == 0) {
      return output.innerText = "Введіть щось!";
    }

    if (str.length == 1) {
      return output.innerText = true;
    }

    const firstSymbol = str[0];
    const lastSymbol = str[str.length - 1];

    if (firstSymbol !== lastSymbol) {
      return output.innerText = false;
    }

    const withoutFIRSTandLAST = str.substring(1, str.length - 1);

    return isPalindrome_recursion(withoutFIRSTandLAST);
  }

  document.querySelector("#isPalindrome__btn-recursion").addEventListener("click", () => {
    let inputValue = document.querySelector("#isPalindrome__input-recursion").value.toLowerCase();

    isPalindrome_recursion(inputValue);
  });

  function reverseString_iteration() {
    let inputValue = document.querySelector("#reverseString__input-iteration").value;
    const output = document.querySelector("#reverseString__output-iteration");

    if (inputValue.length < 2 || inputValue.replaceAll(' ', '').length < 2) {
      return output.innerText = 'Введіть слово більше 1 букви'
    }

    let result = [];

    for (let i = 0; i < inputValue.length; i++) {
      result.unshift(inputValue[i])
    }

    output.innerText = result.join('');
  }

  document.querySelector("#reverseString__btn-iteration").addEventListener("click", reverseString_iteration);

  function reverseString_recursion(str) {
    const output = document.querySelector("#reverseString__output-recursion");

    if (str.length < 2 || str.replaceAll(' ', '').length < 2) {
      return output.innerText = 'Введіть слово більше 1 букви'
    }
    
    let result = [];

    function helper(string) {
      if (string.length == 0) return;

      result.unshift(string[0]);
      helper(string.slice(1));
    }

    helper(str);

    output.innerText = result.join('');
  }

  document.querySelector("#reverseString__btn-recursion").addEventListener("click", () => {
    let inputValue = document.querySelector("#reverseString__input-recursion").value;

    reverseString_recursion(inputValue);
  });

  function capitalizeFirst_iteration() {
    let inputValue = document.querySelector("#capitalizeFirst__input-iteration").value.split(' ');
    const output = document.querySelector("#capitalizeFirst__output-iteration");

    if (inputValue.length <= 1) {
      return output.innerText = 'Введіть >= 2 слів'
    }

    let result = [];

    for (let i = 0; i < inputValue.length; i++) {
      if (inputValue[i] == '' || inputValue[i] == ' ') {
        continue;
      }
      
      let el = inputValue[i].toLocaleLowerCase().slice(1);
      let capitalizeFirstLetter = inputValue[i][0].toLocaleUpperCase();
      let resultArr = capitalizeFirstLetter.concat(el);

      result.push(resultArr);
    }

    output.innerText = result.join(' ');
  }

  document.querySelector("#capitalizeFirst__btn-iteration").addEventListener("click", capitalizeFirst_iteration);

  function capitalizeFirst_recursion(arr) {
    const output = document.querySelector("#capitalizeFirst__output-recursion");

    let result = [];

    if (arr.length <= 1) {
      return output.innerText = 'Введіть >= 2 слів'
    }

    function helper(array) {
      if (array[0] == '' || array[0] == ' ') {
        return helper(array.slice(1));
      }

      if (array.length == 0) return;

      let el = array[0].toLocaleLowerCase().slice(1);
      let capitalizeFirstLetter = array[0][0].toLocaleUpperCase();
      let resultArr = capitalizeFirstLetter.concat(el);

      result.push(resultArr);

       helper(array.slice(1));
    }

    helper(arr);

    output.innerText = result.join(' ');
  }

  document.querySelector("#capitalizeFirst__btn-recursion").addEventListener("click", () => {
    let inputValue = document.querySelector("#capitalizeFirst__input-recursion").value.split(' ');

    capitalizeFirst_recursion(inputValue);
  });

  function flatten_recursion(arr, num) {
    let result = [];

    function helper(array) {
      if (array.length == 0) return;

      if (typeof array[0] === 'object') {
        helper(array[0])
      } else {
        result.push(array[0]);
      }

      helper(array.slice(1));
    }

    console.log("flatten" + num)
    console.log(arr);
    helper(arr);
    console.log(result);
  }

  document.querySelector('#flatten__btn-recursion_1').addEventListener('click', () => {
    let array1 = [1, [2, [3, 4], [[5]]]];

    flatten_recursion(array1, 1)
  });

  document.querySelector('#flatten__btn-recursion_2').addEventListener('click', () => {
    let array2 = [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]];

    flatten_recursion(array2, 2)
  });

  const allInputs = document.querySelectorAll(".number-input");

  allInputs.forEach((e) => {
    e.oninput = () => {
      if (e.value >= 100) {
        e.value = 99;
      }
    };
  });
});