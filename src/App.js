
import * as React from "react";
import Headers from './component/Headers';
import EventContainer from './component/EventContainer';
import MarketList from './component/MarketList';
import styled from "styled-components";
import './App.css';
import "./CSS/reset.css";
import { Routes, Route, Outlet, Link, NavLink } from "react-router-dom";
import BoardList from'./component/board/board_list';
import BoardWrite from "./component/board/board_write";
import BoardView from "./component/board/board_view";
import BoardUpdate from "./component/board/board_update";
import FreeBoardList from "./component/freeboard/freeboard_list";
import QnaList from "./component/qna/qna_list"
import QnaView from'./component/qna/qna_view';
import QnaWrite from'./component/qna/qna_write';
import QnaCommentWrite from "./component/qna/qnacomment_write";
import QnaUpdate from "./component/qna/qna_update"




const MarketContainer = styled.section`
  margin: 60px 0 0 auto;
  width: 100%;

`;

const MainPageContainer = styled.div`
  margin: 0 auto;
  width: 70%;
  animation: backColor 1s;

  @keyframes backColor {
    0% {
      opacity: 0;
      display: block;
    }
    50% {
      opacity: 0;
    }
    100% {
      display: none;
    }
  }

  @media ${(props) => props.theme.tablet} {
    width: 90%;
  }
`;

function App() {
  return (
    <>
      <div className="App">``
          <Headers></Headers>
          <MainPageContainer>

           <MarketContainer>
            <Routes>
            <Route exact path="/"  element={<Layout />} />
              <Route path="board" element={<BoardList />} />
              <Route path="board/write" element={<BoardWrite />} />
              <Route path="board/view/:board_seq" element={<BoardView />} />
              <Route path="board/update/:board_seq" element={<BoardUpdate />}/>
              
              <Route path="freeboard" element={<FreeBoardList />} />

              <Route exact path="qna/*" element={<QnaList/>}/>
              <Route exact path="qna/write" element={<QnaWrite/>}/>
              
              <Route path="/qnaUpdate/:qna_seq" element={<QnaUpdate/>}/>
              <Route path="/qnacommentwrite/:qna_seq"  element={<QnaCommentWrite/>} />
 
              
              
            </Routes>

           </MarketContainer>

        </MainPageContainer>
      </div>
    </>
  );
}

function Layout() {
 
return (
  <div >
      <EventContainer></EventContainer>
      <MarketList>
      </MarketList>
    <Outlet/>
  </div>
);
}




export default App;


/*
useHistory
useLocation
useRouteMatch
useParams

*/

            
            