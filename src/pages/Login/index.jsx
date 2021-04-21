import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Iconfont from '@/components/Iconfont'
import { history } from 'umi'
import { connect } from 'dva'
import './index.less'

export default connect(state => {
    return {
        meta: state.login.meta,
        obj: state.login.obj
    }
})(Login)

function Login(props) {
    const [color, setColor] = useState('span')
    const [cole, setCloe] = useState('box')
    const [switc, setSwitc] = useState('password')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [captcha_code, setCaptcha_code] = useState('')
    const [disable, setDisable] = useState('none')

    //验证码的封装
    const mete = () => {
        props.dispatch({
            type: 'login/meta',
            payload: {},
        })
    }
    useEffect(() => {
        mete()
    },[])
    //点击切换明文暗文
    const boxFun = e => {
        if(color === 'span'){
            setColor('on')
            setCloe('on1')
            setSwitc('text')
        } else {
           setColor('span')
           setCloe('box')
           setSwitc('password')
        }
    }
    //点击换一换验证码
    const Change = () =>{ 
        mete()
    }
    //姓名
    const nameFun = e => setUsername(e.target.value)
    //密码
    const passFun = e => setPassword(e.target.value)
    //验证妈
    const captcha = e => setCaptcha_code(e.target.value)

    //点击登录
    const loginFun = async () => {
        let obj1 = {
            username,
            password,
            captcha_code
        }
       let res = await props.dispatch({
            type: 'login/loginFn',
            payload: obj1,
        })
        if(res.payload.status === 0){
            setDisable('flex')
        }
    }
    //点击关闭遮罩层
    const okokFun = () => {
        setDisable('none')
        mete()
    }
    return (
        <div className="login">
            <div className="disables" style={{display: disable}}>
                <div>
                    <p><Iconfont type="icon-jinggao"/></p>
                    <p>{sessionStorage.getItem('info')}</p>
                </div>
                <button onClick={okokFun}>确认</button>
            </div>
            <Header title="密码登录"/>
            <div className="loginSection">
                <div>
                    <input type="text" onChange={nameFun} />
                </div>
                <div>
                    <input type={switc} onChange={passFun}/>
                    <p className={cole} onClick={boxFun}>
                        <span className={color}></span>
                    </p>
                </div>
                <div>
                    <p><input type="text" placeholder="验证码" onChange={captcha} /></p>
                    <p>
                        <font>
                            <img src={props.meta} alt=""/>
                        </font>
                        <button onClick={Change}>看不清换一张</button>
                    </p>
                </div>
            </div>
            <div style={{color:'red'}}>
                <p>温馨提示：未注册过的账号，登录时将会自动注册</p>
                <p>注册过的用户可凭账号密码登录</p>
            </div>
            <p className="btn">
                <button onClick={loginFun}>登录</button>
            </p>
            <p>重置密码?</p>
        </div>
    )
}

