import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const IdFind = () => {
    console.log('IdFind() !!!!!!!!!');

    const navigate = useNavigate();

    const [uEmail, setUEmail] = useState('');
    const [uPhone, setUPhone] = useState('');

    //로그인 화면 클릭 시
    const [isLoginView, setIsLoginView] = useState(false);

    const inputEmailHandler = (e) => {
        console.log('inputEmailHandler() input');

        setUEmail(e.target.value);
    }

    const inputPhoneHandler = (e) => {
        console.log('inputPasswordHandler() input');

        setUPhone(e.target.value);
    }

    const findIdHandler = () => {
        console.log('findIdHandler() Click!!!!!!');

        let memberInStorage = JSON.parse(localStorage.getItem('memberDB'));
        let memIdObjarr = Object.keys(memberInStorage);
        console.log(memberInStorage);

        // console.log(memberInStorage[uId].email);
        // console.log(memberInStorage[uId].pw);

        let flag = false;
        let flagId = "";

        memIdObjarr.map((el) => {
            console.log(el, "여기!!!!!!!!!!");
            console.log(memberInStorage[el].email, uPhone);

            if (memberInStorage[el].email == uEmail && memberInStorage[el].phone == uPhone) {
                flag = true;
                flagId = el;
            }
        });
        if(uEmail !== "" && uPhone !== "") {
            if (uEmail !== null && uEmail !== undefined ) {
             if( uPhone !== null && uPhone !== undefined ){
                 if (flag) {
                  alert(`ID : ${flagId}`);
                  } else {
                     alert("없는 정보입니다.")
                  }
                } else {
                    alert('잘못된 Phone 번호 입니다.');
                }
        } else {
            alert('잘못된 E-mail주소 입니다.');
        }
    } else {
        alert('정보를 입력해주세요.')
    }
    }

     const signInView = () => {
        console.log('signInView() Clicked!!!!');

        setIsLoginView(true);
        navigate("/SignIn");
    }

    return (
        <div>
            <div>
                <h3>아이디 찾기</h3>
                <label htmlFor="u_email">
                    <p>E-Mail</p> </label>
                    <input type="text" id='u_email' value={uEmail} onChange={(e) => inputEmailHandler(e)} placeholder='E-mail을 입력하세요' />
                

                <label htmlFor="u_phone">
                    <p>Phone Number</p>  </label> 
                    <input type="text" id='u_phone' value={uPhone} onChange={(e) => inputPhoneHandler(e)} placeholder='Phone Number를 입력하세요' />
               <br />

                <button onClick={findIdHandler}>아이디 찾기</button> &nbsp; <button value={isLoginView} onClick={signInView}>로그인 화면</button>

            </div>
        </div>
    )
}

export default IdFind;