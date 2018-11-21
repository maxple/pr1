import { Link } from 'react-router-dom'
import { MainMenu } from './menus'
import './stylesheets/pages.scss'

const PageTemplate = ({ children }) =>
  <div className="page">
    <MainMenu />
    {children}
  </div>

export const Home = () =>
  <div className="home">
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
  <PageTemplate>
    <section>
      <h1>[About the Company]</h1>
    </section>
  </PageTemplate>

export const Events = () =>
  <PageTemplate>
    <section>
      <h1>[Events Calendar]</h1>
    </section>
  </PageTemplate>

export const Products = () =>
  <PageTemplate>
    <section>
      <h1>[Products Catalog]</h1>
    </section>
  </PageTemplate>

export const Contact = () =>
  <PageTemplate>
    <section>
      <h1>[Contact Us]</h1>
    </section>
  </PageTemplate>
