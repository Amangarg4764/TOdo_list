import React from 'react';

function Footer(){
    const years=new Date().getFullYear();
    return (<div style={{bottom:"0px",position:"fixed",backgroundColor:"#F9F9F9",width:"100%",fontSize:"20px",textAlign:"center",
                    fontFamily:"sans-serif"}}>
        <p>Copyright reserved {years}</p>
    </div>);
}

export default Footer;