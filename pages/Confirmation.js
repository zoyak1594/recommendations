import React, { useState } from "react";
import Navbar from "../components/Navbar";
import supabase from "../components/SupabaseClient";
import { useRouter } from "next/router";

function Confirmation() {
  // hello world
  const router = useRouter();
  const { id } = router.query;
  const [submitted, setSubmitted] = useState(false);
  const [comments, setComments] = useState("");

  const handleComments = (event) => {
    setComments(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);
    const { data, error } = await supabase
      .from("formData")
      .update({
        comments,
      })
      .eq("id", id);

    return false;
  };
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {!submitted && (
          <form style={{ width: "30%" }} onSubmit={handleSubmit}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <label htmlFor="addtionalComments">
                  Can you tell us more about your event?
                </label>
              </div>
              <textarea
                name="additionalComments"
                style={{ width: "100%", height: "150px" }}
                onChange={handleComments}
              />
              <button type="submit">Submit</button>
            </div>
          </form>
        )}
        {submitted && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1>Your submission has been recieved!</h1>
            <p>Thank you for submitting your information.</p>
            <p>We will review it and get back to you shortly.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Confirmation;
