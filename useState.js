// useState에서 클로져 형식 사용 확인

// 클로져 형태
// 함수 안에 변수를 작성하고, return값으로 함수를 돌려줌

function myState (value) {
    // 처음 myState를 호출할때 들어갈 값
    let myValue = value;
    
    //myValue을 수정하는 함수
    function setFunction (payload) {
        myValue = payload;
    }
    //myValue를 출력하는 함수
    function getMyValue() {
        return myValue
    }

    // 값을 여러개를 내보내기 위해 배열
    return [getMyValue, setFunction]
}

// 작성한 myState 사용
// return 값이 배열일때, 
// 그내용을 []구조분해를 하면 순서에 따라서값이 들어간다
const [number, setNumber] = myState(10);

console.log(number());
setNumber(100);
console.log(number());