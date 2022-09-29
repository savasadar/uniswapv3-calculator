import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const CreditContainer = styled.div`
  padding: 50px 15px;
  text-align: center;
  color: #bbb;
  font-size: 0.8rem;

  & svg {
    color: rgb(247, 2, 119);
  }

  & a {
    color: rgb(30, 161, 241);
    font-weight: bold;
    text-decoration: none;
  }

  & > div:nth-child(2) {
    margin-top: 7px;

    & > a {
      color: #777;
      margin: 0 7px;
    }
  }
`;

const Credit = () => {
  return (
    <CreditContainer>
      <div>
        Sponsored by{" "}
        <a target="_blank" rel="noreferrer" href="https://unigrants.org">
          Unigrant
        </a>{" "}
        (Wave 7). Crafted with <FontAwesomeIcon icon={faHeart} /> by{" "}
        <a rel="noreferrer" href="https://twitter.com/chunza2542" target="_blank">
          @chunza2542
        </a>
        , Happy Uniswapping 🦄!!
      </div>
      <div>
        <a
          href="https://github.com/chunza2542/uniswapv3-calculator"
          rel="noreferrer"
          target="_blank"
        >
          How it works?
        </a>
        <a
          href="https://github.com/chunza2542/uniswapv3-calculator/issues"
          rel="noreferrer"
          target="_blank"
        >
          Report a bug or request a feature
        </a>
        <a href="mailto:hello@thechun.dev">Contact: hello@thechun.dev</a>
      </div>
    </CreditContainer>
  );
};

export default Credit;
