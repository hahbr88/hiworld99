import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../redux/modules/HelloWorld";
import "./Home.css";
import "./Profile.css";
import "./First.css"
import { BookCover } from "../components/BookCover";
import { BookDot } from "../components/BookDot";
import { Page } from "../components/Page";
import { Column1 } from "../components/Column1";
import { Column2 } from "../components/Column2";
import { Row1 } from "../components/Row1";
import { Row2 } from "../components/Row2";
import { Row3 } from "../components/Row3";
import { Column3 } from "../components/Column3";
import { Column4 } from "../components/Column4";
import { Row4 } from "../components/Row4";
import { Text1 } from "../components/Text1";
import { Text2 } from "../components/Text2";
import { Update1 } from "../components/Update1";
import { Column6 } from "../components/Column6";
import { Row5 } from "../components/Row5";
import { Red } from "../components/Red";
import { Blue } from "../components/Blue";
import { Row6 } from "../components/Row6";
import { Cate } from "../components/Cate";
import { Dot } from "../components/Dot";
import { Column5 } from "../components/Column5";
import { MenuBar } from "../components/MenuBar";
import { Text2Box } from "../components/Text2Box";
import { Text3Box } from "../components/Text3Box";
import { First } from "../components/First";
import { Second } from "../components/Second";
import mini from "./mini.png";
import profile from "./profile.png";


const Main = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <>
          {users?.length > 0 &&
            users.map((user) => (
              <div key={user.id}>
                <h4>이름:{user.name}</h4>
                <h4>제목:{user.title}</h4>
                <h4>내용:{user.content}</h4>
              </div>
            ))}
          <button
            onClick={() => {
              navigate(`/WriteBook`);
            }}
          >
            방명록
          </button>
        </>
      ) : (
        <div>Loading...</div>
      )}
      <BookCover>
        <BookDot>
          <Page>
            <Column1>
              <Row1>TODAY 2022.08.11</Row1>
              <Row2>
                <Text1>
                  <Text2Box>
                    {/* <First> */}
                    <img src={profile} alt="profile" />
                    {/* </First> */}
                  </Text2Box>
                </Text1>
                <Text2>Øl유없Øl Ŀl㈎ 참 좋㈕</Text2>
              </Row2>
            </Column1>
            <Column2>
              <Row3>
                <Column3>HelloWorld!! 미니홈피</Column3>
                <Column4>
                  B반 6조 하병노/서동욱/신범수&nbsp;&nbsp;&nbsp;&nbsp;
                </Column4>
              </Row3>
              <Row4>
                <Update1>
                  <Cate>방명록</Cate>
                  <Column6>
                    <Row5>
                      <Red>하병노</Red> 반갑습니다
                      <Blue>서동욱</Blue> 반가워요
                      <Red>신범수</Red> 반갑습니다
                    </Row5>
                    <Row6>
                      방명록: 3/25
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;상세페이지:3/25
                      <Dot></Dot>
                      게시판: 0/25
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;방명록:0/25
                      <Dot></Dot>
                    </Row6>
                  </Column6>
                </Update1>
              </Row4>
              <Row4>
                <Update1>
                  <Text3Box>
                    <Second>
                      <img src={mini} alt="mini" />
                    </Second>
                  </Text3Box>
                </Update1>
              </Row4>
            </Column2>
            <Column5>
              <MenuBar
                button
                onClick={() => {
                  navigate(`/`);
                }}
              >
                홈으로
              </MenuBar>
              <MenuBar
                button
                onClick={() => {
                  navigate(`/WriteBook`);
                }}
              >
                방명록
              </MenuBar>
            </Column5>
          </Page>
        </BookDot>
      </BookCover>
    </div>
  );
};

export default Main;
