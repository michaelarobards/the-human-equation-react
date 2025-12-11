import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RootLayout from "./layouts/RootLayout.jsx";

import Home from "./pages/Home.jsx";
import Events from "./pages/Events.jsx";
import Groups from "./pages/Groups.jsx";
import Membership from "./pages/Membership.jsx";
import Insight from "./pages/Insight.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import Journey from "./pages/Journey.jsx";
import Guidelines from "./pages/Guidelines.jsx";
import Contact from "./pages/Contact.jsx";
import Livestream from "./pages/Livestream.jsx";
import WeeklySchedule from "./pages/WeeklySchedule.jsx";

export default function App() {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/insight" element={<Insight />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/livestream" element={<Livestream />} />
          <Route path="/weekly-schedule" element={<WeeklySchedule />} />
        </Routes>
      </RootLayout>
    </Router>
  );
}
