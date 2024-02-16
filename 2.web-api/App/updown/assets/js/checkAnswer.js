function caseUp($icon) {

    //1. #begin 인 em의 숫자값을 선택한값 +1로 변경
    document.getElementById(`begin`).textContent = +$icon.dataset.iconNumber + 1; //숫자여서 +넣음

    //2. up또는 down 이라는 요소에 애니매이션을 넣을것. -> .selected를 추가해서 흔들리는효과
    // #down 이라는 요소의 .selected를 제거 , #UP에 추가
    document.getElementById(`down`).classList.remove(`selected`);
    document.getElementById(`up`).classList.add(`selected`); 

    //3. 자기자신아이콘포함 이전 형제 요소들 전부 삭제
   
    const $numbers = document.getElementById(`numbers`);
 
    let $delTarget = $icon;
    //삭제되는 요소는 자신의 이전형제요소를 지목해놓고 삭제됩니다.
    //삭제되는요소가 1번아이콘은경우에는 이전 요소가 없기때문에 $delTarget이 null이됩니다.
    //$delTarget이 null이되는순간 반복문을 종료시키겠다는 조건식을 작성.
    while($delTarget) {    //delTarget을넣은이유는 null이뜨면 반복문끝내려고
     //이전형제요소를서로지목하며 지워지는반복문
     //이 반복문은 previousElementSibling 얘가 1까지 점점 내려가서 다음지우는타겟이 null이 떠야 끝
    const $nextTarget = $delTarget.previousElementSibling;  //이전형제요소지목
    $numbers.removeChild($delTarget);  
    
    $delTarget = $nextTarget ; 
}

}

function caseDown($icon) {
 //1. #end 인 em의 숫자값을 선택한값 -1로 변경
 document.getElementById(`end`).textContent = +$icon.dataset.iconNumber - 1;  //숫자여서 +넣음

 //2. up또는 down 이라는 요소에 애니매이션을 넣을것. -> .selected를 추가해서 흔들리는효과
 // #down 이라는 요소의 .selected를 제거 , #UP에 추가
 document.getElementById(`up`).classList.remove(`selected`);
 document.getElementById(`down`).classList.add(`selected`); 

 //3. 자기자신아이콘포함 이전 다음 형제 요소들 전부 삭제

 const $numbers = document.getElementById(`numbers`);

 let $delTarget = $icon;
 
 while($delTarget) {   
  
 const $nextTarget = $delTarget.nextElementSibling;  
 $numbers.removeChild($delTarget);  
 
 $delTarget = $nextTarget ; 
}

}

function correctAnswer($icon) {
//1. #finish 박스에 class 'show'부여 


//2. #numbers 클릭이벤트 해제 
$numbers.onclick = null;


//3, 사용자가 선택한 아이콘에 id 'move' 추가



}







export {caseUp , caseDown , correctAnswer};