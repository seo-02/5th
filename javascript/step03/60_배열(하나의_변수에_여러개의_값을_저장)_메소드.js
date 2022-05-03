//배열은 데이터 타입에 관계없이 혼합해서 저장 가능
const days = ['월','화','수','목','금','토',100];//1차원 배열

//배열메소드 .push()와 .length 속성
if(false){
  console.log(days[0]);
  console.log(days[7]);//undefined
  
  //배열의 끝에 데이터를 추가하는 .push()
  days.push('sunday');
  console.log(days[7]);//sunday
}


if(false){
  //문제)빈 배열변수 city 선언후 3개의 문자열 데이터 '서울, 인천, 대전'을 입력하는 코드를 작성하시오
  const city  = [];

  city[0] ='서울';
  city[1] ='인천';
  city[2] ='대전';

  // city.push('서울');
  // city.push('인천');
  // city.push('대전');  

  console.log(city);
}


if(false){
  //배열 생성자함수를 이용하여 hobby 배열을 만드시오.
  const hobby = new Array('댄스');
  hobby.push('노래부르기');

  console.log(hobby);
}

//배열인지 아닌지를 확인하는 Array.isArray()
if(false){
  const username = 'duly';
  console.log(Array.isArray(username));//false

  const arrNames = ['둘리','또치','도우너'];
  const arrID = ['duly','ddochi', 'douner'];

  console.log(Array.isArray(arrNames));//true
  console.log(Array.isArray(arrID));//true
}

//응용) 두개의 매개변수가 모두 배열이면 합쳐서 새로운 배열을 리턴하는 함수로직을 작성하시오.
const mergeArray = function(arr1, arr2){
  //Array.isArray()는 주로 유효성을 검사하는 로직이 필요할 때 사용됨
  if(Array.isArray(arr1) && Array.isArray(arr2)){
    return arr1.concat(arr2);
  }else{
    console.log('인자는 배열이어야 합니다.');
    return;
  }
};

const newArray = mergeArray([10,20], ['월','화']);
console.log(newArray);


//배열의 아이템을 결합하여 문자열로 반환하는 .join(구분자)
if(true){
  const strDay1 = days.join();//월,화,수,목,금,토,100
  const strDay2 = days.join(' ');//월 화 수 목 금 토 100
  const strDay3 = days.join('|');//월|화|수|목|금|토|100

  console.log('strDay1 =',strDay1);
  console.log('strDay2 =',strDay2);
  console.log('strDay3 =',strDay3);
}


//원본배열은 불변으로 하면서 복사하는 3가지 방법
//방법1 .concat()
if(false){
  const copyDays = days.concat();
  
  copyDays.push('ㅋㅋㅋㅋㅋㅋ');
  
  console.log(days);//원본배열 출력
  console.log(copyDays);//복사한배열 출력
}

//const days = ['월','화','수','목','금','토',100];//1차원 배열


//방법2 .map()
//복사할 원소에 공통적인 작업을 하면서 복사하는 메소드
if(false){
  const mapDays = days.map(function(day){
    return day;
  });

  mapDays.push('ㅎㅎㅎㅎㅎㅎㅎㅎㅎ');

  console.log('days =',days);
  console.log('mapDays =',mapDays);
}


//방법3 .filter()
//원하는 원소만 골라서 복사할 수 있는 메소드
if(true){
  const filterDays = days.filter(function(day){
    return true;
  });

  filterDays.push('ㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷ');

  console.log('days =',days);
  console.log('filterDays =',filterDays);
}




