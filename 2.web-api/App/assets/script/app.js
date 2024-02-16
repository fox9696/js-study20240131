
//현재 계산기의 그려질 숫자 
let currentResult = 0;

//계산 이력을 모아둘 배열
const logEntries = [];

let seq = 0;  //로그 번호


// 더하기 버튼 이벤트 핸들러
const addHandler = () => {
  //계산 전 값을 기억
  const originalResult = currentResult;


    //입력창에 입력한 숫자를 읽자.
const enteredNumber = +$userInput.value;    //string이라 +붙여서 숫자로변환
//const enteredNumber = parseInt($userInput.value);  *이런방식도가능 위랑같은효과

currentResult += enteredNumber;  
//userInput에입력한값 *숫자입력칸 이currentResult에 들어간다 

$currentCalculationOutput.textContent = `${originalResult} + ${enteredNumber}` ;
//
$currentResultOutput.textContent = currentResult;
//currentCalculationOutput 에  currentResult 이값을 작성

//li 태그작성
const $newLi = document.createElement(`li`);
$newLi.classList.add('log-entries-item');
$newLi.textContent = `#${++seq}. ${originalResult} + ${enteredNumber} = ${currentResult}`;     

//ul에 추가
$logEntries.appendChild($newLi);


}             //           덧셈 끝               //
 
             
const subHandler = () => {
    


}
const multiHandler = () => {
    


}
const divideHandler = () => {
    


}


// ======== 이벤트 핸들러 바인딩 ========= //  


$addBtn.addEventListener(`click` , addHandler);
$subtractBtn.addEventListener(`click` , subHandler);
$multiplyBtn.addEventListener(`click` , multiHandler);
$divideBtn.addEventListener(`click` , divideHandler);

















