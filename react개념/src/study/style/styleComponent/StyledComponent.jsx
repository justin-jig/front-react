
import styled from 'styled-components';

/**
 * npm i styled-component
 * @returns 
 */

// 기본 사용방법
const _Boxone =  styled.div`
   background-color:blue;
   width:100px;
   height:100px;
`
// props를 이용하는 방법
const _Boxtwo = styled.div `
   background-color: ${(props) => props.color};
   width: 100px;
   height: 100px;
`
// 상속 받아서 이용하는 방법
const _Circle = styled(_Boxtwo)`
   border-radius: 50%;
   border: 1px solid ${(props) => props.borderColr};
`

// 기존태그를 이름만 바꿔서 사용하는 방법 => as 키워드 사용
const _btn = styled.button`
   background-color: aqua;
   color: green;
   padding: 10px 15px;
   border-radius: 4px;
`

// html태그에 옵션값을 넣는 방법
const _input = styled.input.attrs({require: true}) `
   background-color: yellow;
`
// 중첩
const _Boxthree = styled.div `
   width: 200px;
   height: 200px;
   background-color: blueviolet;
   line-height: 200px;
   text-align: center;
  
   p {
      color:white;
      font-weight: bold;
      //pseudo
      &:hover {
         font-size: 30px;
      }
   }

   // 다른 컴포넌를 불러와서 사용 가능
   ${_input}{
      background-color: red;
   }
`

export default function StyledComponent () {

   return (
        <div>
            {/* <_Boxone/>
            <_Boxtwo color={"red"}/>
            <_Boxtwo color={"orange"}/>
            <_Boxtwo color={"yellow"}/>
            <_Circle color='green'/>
    
            <_btn as="a" href="https://www.naver.com" >클릭</_btn>
            <_input></_input> */}

            <_btn >클릭</_btn>
            <_Boxthree>
               <p>Hello Styed</p>
               <_input/>
            </_Boxthree>

            <br/><br/><br/><br/>
            <_Boxthree children={<_Boxtwo color='red'/>}/>

        </div>
   ) 
} 