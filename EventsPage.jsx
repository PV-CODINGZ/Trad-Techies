import React from "react";

const events = [
  {
    id: 1,
    title: "Annual Tech Hackathon",
    date: "March 15-17, 2024",
    description: "Join our 48-hour coding marathon. Build innovative solutions and win exciting prizes!",
    buttonText: "Register Now",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFja2F0aG9ufGVufDB8fDB8fHww",
  },
  {
    id: 2,
    title: "Code Warriors Competition",
    date: "April 2, 2024",
    description: "Test your programming skills in this intense coding competition.",
    buttonText: "Learn More",
    image: "https://plus.unsplash.com/premium_photo-1721080251127-76315300cc5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGhhY2thdGhvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    title: "Code Warriors Competition",
    date: "April 2, 2024",
    description: "Test your programming skills in this intense coding competition.",
    buttonText: "Learn More",
    image: "https://plus.unsplash.com/premium_photo-1721080251127-76315300cc5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGhhY2thdGhvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    title: "Code Warriors Competition",
    date: "April 2, 2024",
    description: "Test your programming skills in this intense coding competition.",
    buttonText: "Learn More",
    image: "https://plus.unsplash.com/premium_photo-1721080251127-76315300cc5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGhhY2thdGhvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const FeaturedEvents = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-4xl  font-bold mb-10">Featured Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map((event) => (
          <div key={event.id} className="bg-white shadow-md rounded-[31px] p-4 border">
            <img src={event.image} alt={event.title} className="w-full h-40 object-cover rounded" />
            <p className="text-sm font-semibold text-orange-500 mt-2">{event.date}</p>
            <h3 className="text-lg font-bold mt-1">{event.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{event.description}</p>
            <button className="mt-3 bg-purple-500 text-white px-4 py-2 rounded hover:bg-blue-600">{event.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-6 p-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold">Contact Us</h3>
          <p>Email: events@xyz.edu</p>
          <p>Phone: (555) 123-4567</p>
        </div>
        <div>
          <h3 className="font-bold">Quick Links</h3>
          <ul>
            <li>About</li>
            <li>FAQ</li>
            <li>Sponsors</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Follow Us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

const EventsPage = () => {
  return (
    <div>
      <FeaturedEvents />
      <Footer />
    </div>
  );
};

export default EventsPage;
