import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Secession = (props) => {
  
 
    let logiend = props.loginInfo.setIsLogIned;
    let logiendId = props.loginInfo.logInId;

    let navigate = useNavigate();


    const deleteInfoHandeler = () => {
        console.log('deleteInfo() Clicked!!!');

        if (window.confirm("정말 탈퇴하시겠습니까?")) {
            
          alert("이용해주셔서 감사합니다.");
          let storageMem = JSON.parse(localStorage.getItem("memberDB"));
          
           let changeInfo = delete storageMem[logiendId];
           
          let newmemInfo = JSON.stringify(storageMem)
          localStorage.setItem("memberDB" ,newmemInfo);
          logiend(false);
          navigate("/");

      } else {

          alert("메인으로 돌아갑니다");
          navigate("/");

      }

  
    }
    // 아니오 클릭 시 
    const showMainHandelr = () => {
        console.log('showMainHandelr() Clicked!!');
        navigate("/")

    }
    return (
        <div id="secession" className="sec member">
            <div className="sec_item">
                <h1 className="sec_item_title">탈퇴하시면 스탬프 혜택이 사라집니다. <br />
                    그래도 탈퇴하시겠습니까? </h1>

                <div className="btn_wrap">
                    <button onClick={deleteInfoHandeler} className="btn main" >예</button>
                    <button onClick={showMainHandelr} className="btn" >아니오</button>
                </div>
            </div>
        </div>
    )
}

export default Secession;