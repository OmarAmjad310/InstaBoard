import './About.css';
console.log('Rendering AboutPage');

export default function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>AwesomeCorp</strong>! We're a passionate team dedicated to creating top-notch web solutions
        that simplify life and empower businesses.
      </p>

      <h2>🌟 Our Mission</h2>
      <p>
        To deliver innovative, user-friendly, and scalable digital experiences that make a difference.
      </p>

      <h2>🧠 What We Do</h2>
      <ul>
        <li>Custom Web Development</li>
        <li>UI/UX Design</li>
        <li>Mobile App Development</li>
        <li>Cloud Services</li>
      </ul>

      <h2>👥 Meet the Team</h2>
      <p>
        We’re a group of developers, designers, and dreamers who love solving problems and crafting beautiful digital products.
      </p>
    </div>
  );
}
