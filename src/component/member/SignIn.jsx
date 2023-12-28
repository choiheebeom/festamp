import React, { useState } from 'react'

function SignIn() {
  console.log('SignIn() Called!');

  const [uId, setUId] = useState('');
  const [uPw, setPw] = useState('');

  //btn handler
  const loginBtnHandler = () => {
    console.log('loginBtnHandler() Clicked!!');

    let memberInStorage = JSON.parse(localStorage.getItem('memberDB'));
    let memKeysObj = memberInStorage[uId];
    
    if(memKeysObj !== null && memKeysObj.pw == uPw){
      alert('FESTAMP에 오신 걸 환영합니다 :)');
    }
   

  }


  // handler
  const loginIdHandler = (e) => {
    console.log('loginIdHandler() Changed!');

    setUId(e.target.value);

  }

  const loginPwHandler = (e) => {
    console.log('loginPwHandler() Changed!');

    setPw(e.target.value);
  }

  return (
    <div>

      <form >

        <fieldset>
          <legend>로그인</legend>
          <input type="text" value={uId} onChange={loginIdHandler} placeholder='ID를 입력하세요' />
          <br />
          <input type="password" value={uPw} onChange={loginPwHandler} placeholder='PASSWORD를 입력하세요' />
          <br />
          <a href="#none">아이디찾기</a> / <a href="#none">비밀번호찾기</a>
          <br />
          <button type='button' onClick={loginBtnHandler}>로그인</button>
        </fieldset>
      </form>
    </div>
  );
}

export default SignIn;