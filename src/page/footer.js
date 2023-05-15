import react from 'react';
export function Navbar(){
    const aStyle={
        display: 'inline-block', 
        color:'#F08080',
        margin: '10px',
        textDecoration: 'none'
    }
    return (
        <div style={{backgroundColor: '#CD5C5C'}}>
            <a href="#" style={aStyle}>Home</a>&nbsp;|&nbsp;
            <a href="#" style={aStyle}>Abount</a>&nbsp;|&nbsp;
            <a href="#" style={aStyle}>Content</a>|
           
        </div>
    )
}
export function Header(){
    return(
    <div style={{textAlign: 'center', color:'#FA8072'}}>
            <img src="./images/cat.jpg" width="50%" higth="50%"/>
            <h2>Hello Component</h2>
            <br/><br/><br/>
           
        </div>
    )
    
}

export const Footer=()=>{ //Arrow Function
    return(
        <div style={{textAlign: 'center'}}>
            &copy;{new Date().getFullYear()} All rights reserved
        </div>

    )
}