import React from "react";
import student from "./Student";

function AttendenceBook() {
    return (
        <ul>
            {
                student.map((student , index) => {
                    return <li key={index}>{student.name}</li>
                })
            }
        </ul>
    )
}
export default AttendenceBook;