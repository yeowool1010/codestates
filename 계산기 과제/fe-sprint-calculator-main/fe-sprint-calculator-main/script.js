const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const Operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

function calculate(n1, operator, n2) {
  let result = 0;
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  // n1 = firstOperend.textContent;
  // n2 = secondOperend.textContent;
  // operator = Operator.textContent;
  // 1. operator가 +일 때 n1과 n2를 더한다
  // 2. operator가 -일 때 n1에서 n2를 뺀다
  // 3. operator가 *일 때 n1과 n2를 곱한다
  // 4. operator가 /일 때 n1과 n2를 나눈다
  if(operator === "+") {
    result = Number(n1) + Number(n2);
  } else if(operator === "-") {
    result = Number(n1) - Number(n2);
  } else if(operator === "*") {
    result = Number(n1) * Number(n2);
  } else if(operator === '/') {
    result = Number(n1) / Number(n2);
  }
  return String(result);
}

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

  if (target.matches('button')) {
    // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
    // 클릭된 HTML 엘리먼트가 button이면
    if (action === 'number' && firstOperend.textContent === "0") {

      firstOperend.textContent = buttonContent;
      console.log(firstOperend);
      // console.log('숫자 ' + buttonContent + ' 버튼');
    } else if(action === 'number') {
      secondOperend.textContent = buttonContent;
      // n2 = buttonContent;
    }

    if (action === 'operator') {
      Operator.textContent = buttonContent;
      // operator = buttonContent;
      console.log('연산자 ' + buttonContent + ' 버튼');
    }

    if (action === 'decimal') {

      console.log('소수점 버튼');
    }

    if (action === 'clear') {
      firstOperend.textContent = "0";
      secondOperend.textContent = "0";
      Operator.textContent = "+";
      calculatedResult.textContent = "0";
      console.log('초기화 버튼');
    }

    if (action === 'calculate') {
      calculatedResult.textContent = calculate(
        firstOperend.textContent,
        Operator.textContent,
        secondOperend.textContent );
      console.log('계산 버튼');
    }
  }
});


// // ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

// const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
// // let firstNum, operatorForAdvanced, previousKey, previousNum;
// let firstNum = '';
// let operatorForAdvanced = '';
// let previousKey = '';
// let previousNum = '';

// buttons.addEventListener('click', function (event) {
//   // 버튼을 눌렀을 때 작동하는 함수입니다.

//   const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
//   const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
//   const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
//   // ! 위 코드는 수정하지 마세요.

//   // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
//   if (target.matches('button')) {
//     if (action === 'number') {
//       if(display.textContent === "0" && operatorForAdvanced === '' ) {
//         console.log(buttonContent)
//         display.textContent = buttonContent;
//         firstNum = display.textContent;
//       } else if(display.textContent !== "0" && operatorForAdvanced === '') {
//         display.textContent += buttonContent;
//         firstNum = display.textContent;
//       } else if(display.textContent !== "0" && operatorForAdvanced !== "") {
//         if(previousKey === operatorForAdvanced) {
//           display.textContent = buttonContent;
//           previousKey = display.textContent;
//           previousNum = display.textContent;
//         } else if(previousKey !== operatorForAdvanced) {
//           display.textContent += buttonContent;
//           previousNum = display.textContent;
//         }
//       }
//     }
//     if (action === 'operator') {
//       operatorForAdvanced = buttonContent;
//       previousKey = operatorForAdvanced;
//       console.log(operatorForAdvanced);
//       // 1. 숫자 입력 후 변수 previousKey에 선택된 연산자를 할당
//       // 2. 디스플레이에 새로운 숫자가 눌림과 동시에 그 숫자로 새로 입력 시작
//       if(display.textContent === firstNum) {
//             //디스플레이에 firstNum이 있을 경우 새로운 숫자를 +=한다.
//             display.textContent = firstNum;
//       } 
//     }
//     if (action === 'decimal') {

//     }
//     if (action === 'clear') {
//       display.textContent = "0"
//       firstNum = "";
//       previousNum = "";
//       operatorForAdvanced = "";
//       previousKey = "";
//     }
//     if (action === 'calculate') {
//       if(firstNum !== '' && previousNum === "") {
//         display.textContent = firstNum;
//       } else if (firstNum !== "" && previousNum === "") {
//         display.textContent = calculate(
//         display.textContent,
//         operatorForAdvanced,
//         display.textContent
//         );
//     } else if (previousKey === display.textContent) {
//       display.textContent = calculate(
//         firstNum,
//         operatorForAdvanced,
//         previousNum
//       );
//     } else if(previousKey !== display.textContent && previousNum !== '') {
//       display.textContent = calculate(display.textContent, operatorForAdvanced, previousNum)
//      }   
//      else if(previousKey !== display.textContent && previousNum === '') {
//       display.textContent = firstNum;
//      }
//   }
// }

// });


///////////////////////
// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum;

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches('button')) {
    if (action === 'number') {
      if(display.textContent === "0" || previousKey === 'operator' || previousKey === 'calculate') {
        display.textContent = buttonContent;
      } else {
        display.textContent += buttonContent;
      }
      previousKey = "number"
    }
    if (action === 'operator') {
      if(firstNum && operatorForAdvanced && previousKey !== 'calculate' && previousKey !== 'operator') { // 엔터를 누르지 않아도 계산이 반복되게..?(마지막조건) 
        display.textContent = calculate(firstNum, operatorForAdvanced, display.textContent)
      }
     firstNum = display.textContent; //현재 디스플레이스의 숫자 퍼스트에 할당
     operatorForAdvanced = buttonContent; //오퍼레이터 어드벤스드에 연산자 할당
     previousKey = 'operator' //어떤 액션이 있을 때 마다 할당
    }
    if (action === 'decimal') {
     // display.textContent += "." 이렇게 하면 점이 계속 눌림
     // if문으로 분기점을 만들어주기
     if(!display.textContent.includes('.')) {
      display.textContent += ".";
     } 
     if(previousKey === 'operator') {
      display.textContent = "0."
     }
     previousKey = 'decimal'
    }
    if (action === 'clear') {
      display.textContent = "0"
      firstNum = undefined;
      operatorForAdvanced = undefined;
      previousKey = undefined;
      previousNum = undefined;
    }
    if (action === 'calculate') {
      if(firstNum) { //퍼스트넘에 값이 있을 때 작동하겠다
        if(previousKey === 'calculate') { //엔터를 계속 누르면 계속 계산하겠다
          display.textContent = calculate(display.textContent, operatorForAdvanced, previousNum)
        } else {
        previousNum = display.textContent;
        display.textContent = calculate(firstNum, operatorForAdvanced, previousNum)
        previousKey ='calculate';
        }
      }
      }
}

})

// 71 누른 후 연산자
