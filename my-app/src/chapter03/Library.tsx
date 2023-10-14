import React from "react";
import Book from "./Book";

function Library (props : any) { // 객체로 바꿔서 타입지정 필요
    return (
        <div>
           <Book name="test1" author="author1"></Book>
           <Book name="test2" author="author2"></Book>
           <Book name="test3" author="author3"></Book>
        </div>
    )
}

export default Library;