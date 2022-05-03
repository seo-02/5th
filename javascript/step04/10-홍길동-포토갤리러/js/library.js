//라이브러리 - 2개이상의 유용한 함수(기능)들의 모음
//수업시간에 수작업으로 라이브러리를 직접 제작

/*
  DOM 선택시 주로 사용하는 셀렉팅 방법 - 3가지?

  document.getElementById()
  document.querySeletor()
  document.querySeletorAll()

  만약 DOM을 선택하는 방법을 한가지라면 얼마나 좋을까?

  -> DOM을 선택하는 함수를 제작 -> $
*/

//DOM을 셀렉팅하는 통합함수 - 첫번째 API
const $ = function(query){
  if(query[0]=='#'){
    //return document.querySelector(query);
    return document.getElementById(query.slice(1));
  }else{
    return document.querySelectorAll(query);
  }
}

  //$함수의 사용법 
  //$('.thmbs a')
  //$('#screen')



//태그의 속성을 제어하는 함수 - 두번째 API
const attr = function(target,attrName,attrVal){
  if(attrVal===undefined){
    return target.getAttribute(attrName);
  }else{
    target.setAttribute(attrName, attrVal);
  }
};

  //attr함수 사용법
  //attr(대상DOM,'속성명')//게터
  //attr(대상DOM,'속성명','속성값')//세터


//CSS의 속성을 제어하는 함수 - 세번째 API