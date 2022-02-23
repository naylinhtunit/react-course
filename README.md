# Getting Started with Create React App
# My notes
Class Component Vs Function Component
Class Component က load time ကြာတယ်
Function Component က load time မြန်တယ်

========================

After React v16
Function Component

useState

userEffect

useContext

Additional Hooks

useReducer

useCallback

useMemo

useRef

useImperativeHandle

useLayoutEffect

useDebugValue

=========================

Not supported after v16

ComponentDidError

getSnapshoBeforeUpdate

# Command

npx create-react-app@latest {project name}

npm i bootstrap

npm i react-router-dom

npm i axios

# Shortcut

rafce shortcut for => function component
imr, sfc = rafce

# Snippet	Renders

imr    -  Import React

imrc   -  Import React / Component

imrd   -  Import ReactDOM

imrs   -  Import React / useState

imrse  -  Import React / useState useEffect

impt   -  Import PropTypes

impc   -  Import React / PureComponent

cc     -  Class Component

ccc    -  Class Component With Constructor

cpc    -  Class Pure Component

ffc    -  Function Component

sfc    -  Stateless Function Component (Arrow function)

cdm    -  componentDidMount

uef    -  useEffect Hook

cwm    -  componentWillMount

cwrp   -  componentWillReceiveProps

gds    -  getDerivedStateFromProps

scu    -  shouldComponentUpdate

cwu    -  componentWillUpdate

cdu    -  componentDidUpdate

cwun   -  componentWillUnmount

cdc    -  componentDidCatch

gsbu   -  getSnapshotBeforeUpdate

ss     -  setState

ssf    -  Functional setState

usf    -  Declare a new state variable using State Hook

ren    -  render

rprop  -  Render Prop

hoc    -  Higher Order Component

cp     -  Context Provider

cpf    -  Class Property Function

Full   -  Expansions

imr    -  Import React

import -  * as React from "react";

imrc - Import React, Component
import * as React from "react";
import { Component } from "react";

imrd - Import ReactDOM
import ReactDOM from "react-dom";

imrs - Import React, useState
import * as React from "react";
import { useState } from "react";

imrse - Import React, useState, useEffect
import * as React from "react";
import { useState, useEffect } from "react";

impt - Import PropTypes
import PropTypes from "prop-types";

impc - Import PureComponent
import * as React from "react";
import { PureComponent } from "react";

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

===================================

# jsonplaceholder
url => https://jsonplaceholder.typicode.com/



