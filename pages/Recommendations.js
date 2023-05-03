import React from "react";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

export default function Recommendations() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "500px",
            height: "300px",
            border: "2px solid black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button style={{ width: "200px", height: "100px", margin: "10px" }}>
            Chat + Plan Along
          </button>
          <button
            style={{ width: "200px", height: "100px", margin: "10px" }}
            onClick={() => {
              router.push({
                pathname: "/Confirmation",
                query: { id: id },
              });
              // window.location.href = "/Confirmation";
            }}
          >
            Autopilot
          </button>
        </div>
      </div>
    </div>
  );
}
