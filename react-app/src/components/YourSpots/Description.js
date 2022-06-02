import React from "react";
import { useState } from "react";

export default function Description({ description }) {
  const [read, setRead] = useState(false);
  const [more, setMore] = useState(false);

  //   if (description.length > 150) {
  //     setMore(more);
  //   }

  return (
    <>
      {description.length > 150 && (
        <div>
          {!read && (
            <p className="spotDescription">
              {description.slice(0, 150)}
              <span
                style={{ cursor: "pointer" }}
                className="dots"
                onClick={() => setRead(!read)}
              >
                ...read more
              </span>
            </p>
          )}
          {read && (
            <p className="spotDescription">
              {description}
              <span
                style={{ cursor: "pointer" }}
                className="dots"
                onClick={() => setRead(!read)}
              >
                ...read less
              </span>
            </p>
          )}
        </div>
      )}
      {description.length < 150 && (
        <div>
          {!read && (
            <p className="spotDescription">
              {description}
              {/* <span
                style={{ cursor: "pointer" }}
                className="dots"
                onClick={() => setRead(!read)}
              >
                ...read more
              </span> */}
            </p>
          )}
        </div>
      )}
    </>
  );
}
