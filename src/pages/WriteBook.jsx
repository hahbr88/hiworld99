import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { __postBooks, __getBooks } from "../redux/modules/inputSlice";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
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
import { Cate } from "../components/Cate";
import { Column5 } from "../components/Column5";
import { Column7 } from "../components/Column7";
import { MenuBar } from "../components/MenuBar";
import { Text2Box } from "../components/Text2Box";
import profile from "./profile.png";

const WriteBook = () => {
  const { users, loading, error } = useSelector((state) => state.users);
  const nickInitalState = {
    nickNames: "",
  };

  const titleInitalState = {
    titles: "",
  };

  const contentInitalState = {
    contents: "",
  };

  const [nickName, setNickName] = useState(nickInitalState);
  const [title, setTitle] = useState(titleInitalState);
  const [content, setContent] = useState(contentInitalState);

  const userId = uuidv4();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getbook = useSelector((state) => state.books.books);

  const { id } = useParams();


  // const nowDT = new Date().toLocaleString();

  useEffect(() => {
    dispatch(__getBooks());
  }, [dispatch]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      title.titles === "" ||
      nickName.nickNames === "" ||
      content.contents === ""
    ) {
      return false;
    } // 셋 중 하나라도 입력하지 않았을 때 dispatch 하지 않음
    else {
      setNickName(nickInitalState);
      setTitle(titleInitalState);
      setContent(contentInitalState);
    }
    dispatch(__postBooks({ nickName, title, content, userId }));
  };

  return (
    <>
      <BookCover>
        <BookDot>
          <Page>
            <Column1>
              <Row1>TODAY 2022.08.11</Row1>
              <Row2>
                <Text1>
                  <Text2Box>
                    <img src={profile} alt="profile" />
                  </Text2Box>
                </Text1>
                <Text2>
                Øl유없Øl Ŀl㈎ 참 좋㈕
                </Text2>
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
                  <Column7>
                    <form onSubmit={onSubmitHandler}>
                      <input
                        type="text"
                        name="nickNames"
                        placeholder="작성자"
                        value={nickName.nickNames}
                        onChange={(e) => {
                          const { value } = e.target;
                          setNickName({ ...nickName, nickNames: value });
                        }}
                      />
                      <input
                        type="text"
                        name="titles"
                        placeholder="제목"
                        value={title.titles}
                        onChange={(e) => {
                          const { value } = e.target;
                          setTitle({ ...title, titles: value });
                        }}
                      />
                      <input
                        type="text"
                        name="contents"
                        placeholder="내용"
                        value={content.contents}
                        onChange={(e) => {
                          const { value } = e.target;
                          setContent({ ...content, contents: value });
                        }}
                      />
                      <button>글쓰기</button>
                    </form>
                    </Column7>
                    <Column7>
                    <div>
                    
                      {getbook?.length > 0 &&
                        getbook.map((e) => (
                          <div key={e.id}>
                            <div>작성자 : {e.name}</div>
                            <Link to={`/Detail/${e.id}`}>제목:{e.title} </Link>
                          </div>
                        ))}
                    </div>
                  </Column7>
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
    </>
  );
};

// const InputComponent = ({}) => {

//   return (<input
//     type="text"
//     name="nickNames"
//     placeholder="작성자"
//     value={nickName.nickNames}
//     onChange={(e) => {
//       const { value } = e.target;
//       setNickName({ ...nickName, nickNames: value });
//     }}
//   />)
// }

export default WriteBook;
