import React, { useEffect } from 'react'
import Iconfont from '@/components/Iconfont'
import './index.less'
function Header(props) {

    return (
        <div className="header">
            <p><Iconfont type="icon-37zuo"/></p>
            <p>{[props.title]}</p>
            <p>hhh</p>
        </div>
    )
}

export default Header
