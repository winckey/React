import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, set글제목] = useState(['111', '222', '333']);
  let [좋아요, g] = useState([0, 0, 0]);
  let [타이틀, t] = useState('개발 blog');

  let [modal, setModal] = useState(false);

  let posts = '강남 우동 맛집';
  return (
    <div className="App">
      <div className="black-nav">
        <div>{타이틀}</div>
      </div>


      {글제목.map((a, index) => {
        return (
          <div className="list">
            <h4>{a} <span onClick={() => {
              let copy = [...좋아요];
              copy[index] = copy[index] + 1;
              g(copy);
            }}>👍</span> {좋아요[index]} </h4>
            <p>2월 17일 발행</p>
          </div>
        )
      })}




      {/* <div className="list">
        <h4> {글제목[0]} <span onClick={() => {
          let copy = [...좋아요];
          copy[0] = copy[0] + 1;
          g(copy);
          // setTimeout(() => {
          //   console.log(좋아요)
          // }, 1000); // ? 왜 바로 반영 안댐 ? 

        }}>👍</span> {좋아요[0]} </h4>
        <p>2월 17일 발행</p>
      </div> */}

      <div className="list">
        <h4>모달창<span onClick={() => {
          modal ? setModal(false) : setModal(true)
        }}>👍</span></h4>
      </div>
      {
        modal ? <Modal 글제목={글제목} set글제목={set글제목}></Modal> : <></>
      }
    </div>
  )


}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {

      <h4>{props.글제목[0]}</h4>
        let copy = [...props.글제목];

        copy[0]=="여자코트" ? copy[0]="남자코트" : copy[0]="여자코트";
        props.set글제목(copy)
      }}>버튼</button>
    </div>
  )
}



export default App;
