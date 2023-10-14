import React from "react";

function Book (props : any) { // 객체로 바꿔서 타입지정 필요
    return (
        <div>
            <h1>책이름은 {props.name}</h1>
            <h1>저자는 {props.author}</h1>
        </div>
    )
}

export default Book;