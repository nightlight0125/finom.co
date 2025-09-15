import { Card, Input } from "antd";
import React, { useState } from "react";

const TransactionsWidget = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Card
      style={{
        borderRadius: "11px",
        padding: "24px",
      }}
    >
      <div
        style={{
          margin: "0 0 20px 0",
          fontSize: "27px",
          fontWeight: "600",
          color: "#02000A",
        }}
      >
        Transactions
      </div>

      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <Input
          placeholder="Search by name and reference"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          prefix={
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_47)">
                <path
                  d="M10.6295 18.4637C6.30421 18.4637 2.78845 14.9498 2.78845 10.6302C2.78845 6.30994 6.30421 2.79679 10.6295 2.79679C14.9533 2.79679 18.4705 6.30994 18.4705 10.6302C18.4705 14.9499 14.9533 18.4637 10.6295 18.4637ZM21.7003 20.4608L17.9926 16.7553C19.4296 15.038 20.2159 12.8694 20.2135 10.6302C20.2135 5.34226 15.9218 1.05548 10.6294 1.05548C5.33633 1.05559 1.04547 5.34237 1.04547 10.6303C1.04547 15.9176 5.33633 20.205 10.6295 20.205C12.9624 20.205 15.0982 19.3702 16.7604 17.9863L20.4696 21.6903C20.633 21.8531 20.8543 21.9445 21.085 21.9445C21.3156 21.9445 21.5369 21.8531 21.7003 21.6903C21.8631 21.5272 21.9546 21.3061 21.9546 21.0756C21.9546 20.8451 21.8631 20.624 21.7003 20.4608Z"
                  fill="#797778"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_47">
                  <rect
                    width="20.9091"
                    height="20.9091"
                    fill="white"
                    transform="translate(1.04547 1.04547)"
                  />
                </clipPath>
              </defs>
            </svg>
          }
          value={searchTerm}
          style={{
            width: "100%",
            maxWidth: "684px",
            height: "44px",
            borderRadius: "8px",
            border: isFocused ? "1px solid #DADBF7" : "1px solid #e8e8e8",
            boxShadow: isFocused ? "0 0 0 2px rgba(114,115,202,0.12)" : "none",
            outline: "none",
            fontSize: "18px",
          }}
        />
      </div>
    </Card>
  );
};

export default TransactionsWidget;
