# Getting Started with Create React App
# My notes
Class Component Vs Function Component
Class Component က load time ကြာတယ်
Functional Component က load time မြန်တယ်

========================

After React v16
Functional Component
=> useState
=> userEffect
=> useContext
Additional Hooks
=> useReducer
=> useCallback
=> useMemo
=> useRef
=> useImperativeHandle
=> useLayoutEffect
=> useDebugValue

=========================

Not supported after v16
=> ComponentDidError
=> getSnapshoBeforeUpdate

=========================

npx create-react-app@latest {project name}
npm i bootstrap
npm i react-router-dom

=======Shortcut=========

imrc shortcut for => import React, { Component } from 'react';
cc shortcut for => class component

imr shortcut for => import React from 'react';
sfc shortcut for => function component
rafce shortcut for => function component

imr, sfc = rafce

=============================================

class component မှာ this ကိုသုံးပေးရတယ်
this.props
this.state

for ES6
constructor(){
	super()
	this.state = {
		message: 'Welcome'
	}
}

ES6 မှာ this ကို ဖြေရှင်းချင်ရင် () => inline function ရေးပေးရတယ် အဲလိုမှမဟုတ်ရင် constructor မှာ သွား bind ပေးရတယ်
ဥပမာ this.changeMessage = this.changeMessage.bind(this)

===========================

ES7
state = {
        	message: 'Thank for Message'
    	}

ES7 မှာ this ကို ဖြေရှင်းချင်ရင် changeMessage = () => {
	this.setState({
		message: 'Welcome'
	})
}


====================================

function component မှာ
props
useState Hook








