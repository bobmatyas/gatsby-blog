import React from "react"
import styled from "styled-components"

const Meta = styled.p`
  color: #757575;
  font-weight: 400;
  margin: 0 0 25px;
  padding: 0;
`;

const HcardPost = (props) => {

  const permaLink = `https://www.bobmatyas.com${props.slug}`;

  const dateFormat = (dateToFormat) => {
    const date = new Date(dateToFormat);
    const options = {year: 'numeric', month: 'long', day: 'numeric'}
    return date.toLocaleDateString('en-us', options);
  }

  return (
    <Meta>Posted on &nbsp; 
        <a className="u-url" href={permaLink}>
            <time 
                className="dt-published" 
                datetime={props.date}
            >
                {dateFormat(props.date)}
            </time>
        </a>
        
        &nbsp; by &nbsp; 
        
        <a className="p-author h-card" 
            href="https://www.bobmatyas.com">Bob Matyas
        </a>
    </Meta>
  )
}


export default HcardPost; 