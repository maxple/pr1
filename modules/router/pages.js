import { Link } from 'react-router-dom'

export const Home = () =>
  <div>
    <h1>[Company Website]</h1>
    <nav>
      <Link to="about">[About]</Link>
      <Link to="events">[Events]</Link>
      <Link to="products">[Products]</Link>
      <Link to="contact">[Contact Us]</Link>
    </nav>
  </div>

export const Whoops404 = ({ location }) =>
  <div>
    <h1>Resource not found at '{location.pathname}'</h1>
  </div>

export const About = () =>
  <section>
    <h1>[About the Company]</h1>
  </section>

export const Events = () =>
  <section>
    <h1>[Events Calendar]</h1>
  </section>

export const Products = () =>
  <section>
    <h1>[Products Catalog]</h1>
  </section>

export const Contact = () =>
  <section>
    <h1>[Contact Us]</h1>
  </section>
