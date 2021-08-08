import React, { useCallback, useEffect, useRef, useState } from 'react';
// React Hook 이라는 것은 기존의 함수형 컴포넌트에서 state와 라이프사이클 메소드를 
// 잘 이용할수있게끔 하게 하기 위해여 만들어진것임.

const SimpleHabit = (props) => {
    const [count, setCount] = useState(0);
    // const spanRef = React.createRef();
    const spanRef = useRef();

    const handlePlus = useCallback(() => {
        setCount(count + 1);
    });
    // useState, useCallback 메모리에 저장해서 쓰면서, 함수가 호출될 때마다 실행하고
    // 오브젝트가 다시 생성되는거 방지해준다.

    const handleMinus = useCallback(() => {
        if(count !== 0){
            setCount(count - 1);
        }
    });

    useEffect(() => {
        console.log(`mounted & updated!: ${count}`);
    }, [count]);
    // 컴포넌트가 처음 마운드 되었을때 나오고, 그 다음에 업데이트 될떄마다 호출
    // [] 어떤 값이 변경되었을 때만 호출하게끔 할 수 있음. 

    return (
        <div className="habit-box">
            <span ref={spanRef} className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            <button className="btn-habit btn-plus" onClick={handlePlus}>
                <i class="fas fa-plus-square"></i>
            </button>
            <button className="btn-habit btn-minus" onClick={handleMinus}>
                <i class="fas fa-minus-square"></i>
            </button>
            <button className="btn-habit btn-trash">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default SimpleHabit;