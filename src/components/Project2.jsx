import '../styles/Projects.css';

function Project2() {
  return (
    <div id="project2" className="project-container">
      <h2 className="project-title">Reddit Sports Bot</h2>
      <p className="project-text">In this project I built a JavaScript bot that posts Reddit sports game threads. 
        It works by grabbing data from my alma mater's sports schedule RSS feed and then posting a game thread to the specific subreddit.
        A game thread is a post that is created for each game, allowing fans to discuss the game in real-time. 
        This bot has had a huge impact on the subreddit helping it grow from 1.5k users to 11k users. 
        It is currently hosted on a Raspberry Pi in my home lab.
      </p>
      <h4 className="project-subtitle">Reddit Bot Game Thread Example</h4>
      <a 
        href="https://www.reddit.com/r/miz/comments/18u23ve/football_missouri_vs_ohio_state/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img 
          src={`${import.meta.env.BASE_URL}pictures/reddit_bot_example.png`}
          alt="Reddit Bot Example" 
          className="project-image clickable-image"
        />
      </a>
    </div>
  );
}

export default Project2;