import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import { connect } from 'dva'
import './index.less'

export default connect(state =>({
    
}))(Login)

function Login() {
    const [color, setColor] = useState('span')
    const [cole, setCloe] = useState('box')
    useEffect(() => {
        
    },[])
    const boxFun = e => {
        if(color === 'span'){
            setColor('on')
            setCloe('on1')

        } else {
           setColor('span')
           setCloe('box')
        }
    }
    return (
        <div className="login">
            <Header title="密码登录"/>
            <div className="loginSection">
                <div>
                    <input type="text"/>
                </div>
                <div>
                    <input type="text"/>
                    <p className={cole} onClick={boxFun}>
                        <span className={color}></span>
                    </p>
                </div>
                <div>
                    <p><input type="text" placeholder="验证码"/></p>
                    <p>
                        <font>12312</font>
                        <button>看不清换一张</button>
                    </p>
                </div>
            </div>
            <div>
                <p>温馨提示：未注册过的账号，登录时将会自动注册</p>
                <p>注册过的用户可凭账号密码登录</p>
            </div>
            <p>
                <button>登录</button>
            </p>
            <p>重置密码?</p>
        </div>
    )
}

