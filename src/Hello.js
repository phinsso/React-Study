import React from "react";

function Hello({ color, name, isSpecial }) {
    return (
        // isSpecial의 값이 true -> 컴포넌트의 좌측에 * 표시되도록
        <div style={{ color }}>
            {isSpecial && <b>*</b>}
            안녕하세요 {name}
        </div>
    );
}

Hello.defaultProps = {
    name: '이름없음'
}

export default Hello;