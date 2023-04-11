import { DefaultTheme } from "styled-components";


const light: DefaultTheme = {
    fontSize: '16px',
    colors:{
        bgColor: '#fff',
        primary: 'red',
        secondary: 'orange',
        text: '#3a3a3a'
    }
}


const dark: DefaultTheme = {
    colors:{
        bgColor: '#3a3a3a',
        primary: 'blue',
        secondary: 'green',
        text: '#fff'
    },
    fontSize: '16px'
}

export {light, dark}