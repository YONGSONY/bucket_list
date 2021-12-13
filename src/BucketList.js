// 리액트 패키지
import React from "react";
import styled from "styled-components";

// redux hook
import {useDispatch, useSelector} from 'react-redux';

const BucketList = (props) => {
  // 버킷리스트를 리덕스 훅으로 가져오기
  const bucket_list = useSelector(state => state.bucket.list);

  console.log(bucket_list);
  
  return (
    <ListStyle>
      {bucket_list.map((list, index) => {
        return (
          <ItemStyle
            className="list_item"
            key = {index}
            completed = {list.completed}
            onClick = {() => {
              // 배열의 몇번째 항목을 눌렀는 지, url 파라미터로 넘겨줌
              props.history.push("/detail/"+index);
            }}
          >
            {list.text}
          </ItemStyle>
        );
      })}
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  font=weight: 600;
  color: ${(props) => (props.completed ? "#fff" : "#212121")};
  background-color: ${(props) => (props.completed ? "#6a5acd" : "aliceblue")};
`;

export default BucketList;