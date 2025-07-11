// import './App.css'
import MainImg from '../assets/images/mainImage.jpg'
import GithubImg from '../assets/images/githubIcon.png'

const Home = () => {

  return (
    <div id='wrapper'>
      <header>
        <div id='header'>
          <div id='mainImg'>
            <img src={MainImg} />
          </div>
          <div id='name'>
            <h1>John-Paul Swaine's Portfolio</h1>
          </div>
        </div>
      </header>
      <main>

      </main>
      <footer>
        <div id='github'>
          <a href="https://github.com/John-PaulSwaine"><img src={GithubImg} class="socials" /></a>
          <p>Github</p>
        </div>
      </footer>
    </div>
  )
}

export default Home
