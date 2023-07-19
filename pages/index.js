import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import { useState } from "react";
import supabase from "../components/SupabaseClient";

export default function Home() {
  // store data
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [checkEventType, setEventType] = useState([]);
  const [checkServiceType, setServiceType] = useState([]);
  const [checkVibeType, setVibeType] = useState([]);
  const [attendees, setAttendees] = useState("Select an amount");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleVibeChange(event) {
    const checkboxValue = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setVibeType([...checkVibeType, checkboxValue]);
    } else {
      const updatedValues = checkVibeType.filter(
        (value) => value !== checkboxValue
      );
      setVibeType(updatedValues);
    }
  }

  function handleServiceChange(event) {
    const checkboxValue = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setServiceType([...checkServiceType, checkboxValue]);
    } else {
      const updatedValues = checkServiceType.filter(
        (value) => value !== checkboxValue
      );
      setServiceType(updatedValues);
    }
  }

  function handleCheckboxChange(event) {
    const checkboxValue = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setEventType([...checkEventType, checkboxValue]);
    } else {
      const updatedValues = checkEventType.filter(
        (value) => value !== checkboxValue
      );
      setEventType(updatedValues);
    }
  }

  function handleBudgetChange(event) {
    setBudget(event.target.value);
  }

  function handleDateChange(event) {
    setDate(event.target.value);
  }

  function handleTimeChange(event) {
    setTime(event.target.value);
  }

  function handleAttendeeChange(event) {
    setAttendees(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const { data, error } = await supabase
      .from("formData")
      .insert({
        name,
        email,
        budget,
        event_date: date,
        event_time: time,
        event_type: checkEventType,
        service_type: checkServiceType,
        theme: checkVibeType,
        attendance: attendees,
      })
      .select("id");

    router.push({
      pathname: "/Recommendations",
      query: { id: data[0].id },
    });
    return false;
  }

  return (
    <div>
      <Navbar />
      <div className={styles.hero}>
        <h1>Welcome to Afterwork!</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                onChange={handleNameChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                onChange={handleEmailChange}
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              What type of event are you throwing? (Pick all that apply)
            </label>
            <div className={styles.firstCheckboxGroup}>
              <div>
                <input
                  type="checkbox"
                  id="executive-event"
                  name="executive-event"
                  value="Executive Event"
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="executive-event">Executive Event</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="networking"
                  name="networking"
                  value="Networking"
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="networking">Networking</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="team-building"
                  name="team-building"
                  value="Team Building"
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="team-building">Team Building</label>
              </div>
            </div>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              What type of services are you looking for? (Pick all that apply)
            </label>
            <div className={styles.checkboxGroup}>
              <div>
                <input
                  type="checkbox"
                  id="venue"
                  name="venue"
                  value="Venue"
                  onChange={handleServiceChange}
                />
                <label htmlFor="venue">Venue</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="catering"
                  name="catering"
                  value="Catering"
                  onChange={handleServiceChange}
                />
                <label htmlFor="catering">Catering</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="decor"
                  name="decor"
                  value="Decor"
                  onChange={handleServiceChange}
                />
                <label htmlFor="decor">Decor</label>
              </div>
            </div>
            <div className={styles.checkboxGroup}>
              <div>
                <input
                  type="checkbox"
                  id="photo-video"
                  name="photo-video"
                  value="Photo/Video"
                  onChange={handleServiceChange}
                />
                <label htmlFor="photo-video">Photo/Video</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="event-staff"
                  name="event-staff"
                  value="Event Staff"
                  onChange={handleServiceChange}
                />
                <label htmlFor="event-staff">Event Staff</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="audio-visual"
                  name="audio-visual"
                  value="Audio/Visual"
                  onChange={handleServiceChange}
                />
                <label htmlFor="audio-visual">Audio/Visual</label>
              </div>
            </div>
            <div className={styles.checkboxGroup}>
              <div>
                <input
                  type="checkbox"
                  id="rentals"
                  name="rentals"
                  value="Rentals"
                  onChange={handleServiceChange}
                />
                <label htmlFor="rentals">Rentals</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="entertainment"
                  name="entertainment"
                  value="Entertainment"
                  onChange={handleServiceChange}
                />
                <label htmlFor="entertainment">Entertainment</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="private-dining"
                  name="private-dining"
                  value="Private Dining"
                  onChange={handleServiceChange}
                />
                <label htmlFor="private-dining">Private Dining</label>
              </div>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>
              What is the vibe? (Pick all that apply)
            </label>
            <div className={styles.checkboxGroup}>
              <div>
                <input
                  type="checkbox"
                  id="relaxed"
                  name="relaxed"
                  value="Relaxed"
                  onChange={handleVibeChange}
                />
                <label htmlFor="relaxed">Relaxed</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="fun"
                  name="fun"
                  value="Fun"
                  onChange={handleVibeChange}
                />
                <label htmlFor="fun">Fun</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="activity"
                  name="activity"
                  value="Activity"
                  onChange={handleVibeChange}
                />
                <label htmlFor="activity">Activity</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="casual"
                  name="casual"
                  value="Casual"
                  onChange={handleVibeChange}
                />
                <label htmlFor="casual">Casual</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="business-casual"
                  name="business-casual"
                  value="Business Casual"
                  onChange={handleVibeChange}
                />
                <label htmlFor="business-casual">Business-Casual</label>
              </div>
            </div>
            <div>
              <div className={styles.checkboxGroup}>
                <input
                  type="checkbox"
                  id="formal"
                  name="formal"
                  value="Formal"
                  onChange={handleVibeChange}
                />
                <label htmlFor="formal">Formal</label>
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="budget" className={styles.label}>
                  Budget:
                </label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  required
                  onChange={handleBudgetChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="date" className={styles.label}>
                  Date:
                </label>
                <input
                  type="text"
                  id="date"
                  name="date"
                  required
                  onChange={handleDateChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="time" className={styles.label}>
                  Time:
                </label>
                <input
                  type="text"
                  id="time"
                  name="time"
                  required
                  onChange={handleTimeChange}
                />
              </div>
            </div>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              How many people will be attending?
            </label>
            <select
              id="attendees"
              name="attendees"
              onChange={handleAttendeeChange}
            >
              <option value="Select an amount" defaultChecked>
                Select an amount
              </option>
              <option value="0-50">0-50</option>
              <option value="50-100">50-100</option>
              <option value="100-250">100-250</option>
              <option value="250+">250+</option>
            </select>
          </div>

          <button
            type="submit"
            className={styles.button}
            style={{ margin: "20px" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
