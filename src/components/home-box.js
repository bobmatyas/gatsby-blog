import React from "react"
import styled from 'styled-components';

const Box = styled.div`
  border: 1px solid #eee;
  border-radius: 5px;
  margin: 50px 0 75px 0;
  padding: 5px 25px 10px;
  -webkit-box-shadow: 0px 5px 10px 0px rgba(180,180,180,0.35);
  -moz-box-shadow: 0px 5px 10px 0px rgba(180,180,180,0.35);
  box-shadow: 0px 5px 10px 0px rgba(180,180,180,0.35);
  border-top: 4px solid #845EC2;
`;


const HomeBox = (props) => (
  <Box>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
  </Box>
)

export default HomeBox;