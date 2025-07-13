import "../App.css";

const Week7to12 = () => {
    return (
        <div>
            <h1>Week 7</h1>
            <p>This week we began working on the back end. For this weeks assignment I had to create a database using MongoDB ensuring that the CRUD functions worked.</p>
            <a href="https://github.com/John-PaulSwaine/CodeNation-Week-07-Assignment"><button>Assignment</button></a>
            <br />
            <h1>Week 8</h1>
            <p>This week we looked at using MySQL. For the assignment I had to create a server containing a book database whilst implementing MySQL once again ensuring the CRUD functions worked.</p>
            <a href="https://github.com/John-PaulSwaine/MySQLBookServer"><button>Assignment</button></a>
            <br />
            <h1>Week 9</h1>
            <p>This week we delved deeper into MySQL. For this week's assignent I had to create a Rest API containing a database (I chose to do one for games and one for anime, thereby incorporating two different databases within the server) while also implementing password hashing and token authentication for the CRUD functions.</p>
            <a href="https://github.com/John-PaulSwaine/Rest-API"><button>Assignment</button></a>
            <br />
            <h1>Final Project</h1>
            <p>For the final project we as a group had to come up with a full-stack website using React. The website we as a group decided upon was a Trading Card Game (TCG) tracker/deck builder. The TCGs we decided to use were Pokemon, Magic The Gathering, and Yu-Gi-Oh!. This involved pulling relevant data from multiple APIs such as images, names, card stats. For this project, I focused primarily on the Front-End and pulling in the APIs. I had also focused on the Terms & Conditions, Privacy Policy, and Cookie Policy for our website. For this project I took on a joint leadership role within the group ensuring everything was running smoothly across all aspects from the server creation to the CSS. The biggest issue I feel we came across was adding cards to collections. This posed an issue for us as cards were being added to collections regardless of the game they are from ie Pokemon cards were able to be added to Yu-Gi-Oh! collections. This problem did take a while to be fixed but with perserverance and multiple people working on ironing out this problem we as a group managed to resolve this issue and were able to deliver a completed product.</p>
            <a href="https://tcg-card-catchers.vercel.app/"><button>TCG Card Catchers</button></a>
            <br /><br />
            <a href="week-1-to-6"><button>Weeks 1-6</button></a>
        </div>
    )
}

export default Week7to12