import React from "react";
import { css, jsx } from "@emotion/react";

const PhoneNumber = ({ number }) => {
    
  return (
    <div
      css={css`
        position: relative;
    display: block;
    padding-top: 1.1rem;
      `}
    >
      <span
        css={css`
          text-transform: uppercase;
          font-size: 0.75rem;
          padding: 0 10px;
          background-color: #F8AD1F;
          color: #1E2651;
          border-radius: 1rem;
          position: absolute;
          right: 1rem;
          line-height: 1.2rem;
          top: 0;
        `}
      >
        Serviço 24/7
      </span>
      <a
        href={`tel: +351${number}`}
        css={css`
          font-size: 1.3rem;
          border: 2px solid #F8AD1F;
          border-radius: 2.5rem;
          padding: 0px 18px;
          display: block;
          line-height: 2.5rem;
          transition: all .2s ease-in-out;
          &:hover {
              background-color: #F8AD1F;
              color: #fff;
          }
        `}
      >
        {number}
      </a>
    </div>
  );
};

export default PhoneNumber;
