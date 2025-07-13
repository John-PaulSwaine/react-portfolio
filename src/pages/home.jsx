import MainImg from '../assets/images/mainImage.jpg'

const Home = () => {

  return (
    <div id='wrapper'>
      <header>
        <div id='header'>
          <div id='mainImg'>
            <img src={MainImg} alt='a picture of myself'/>
          </div>
          <div id='name'>
            <h1>John-Paul Swaine's Portfolio</h1>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Home
