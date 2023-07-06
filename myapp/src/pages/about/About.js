import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
    Lorem ipsum dolor sit amet. Qui facere sequi et laboriosam perspiciatis aut tempore minus id iure quae ab consequatur modi est quae sint vel mollitia illo. Qui voluptatem distinctio et tenetur earum sit galisum voluptas sit optio officiis. 
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Story Image"/>
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
          Lorem ipsum dolor sit amet. Ex dolorem quidem sit cumque internos ab ipsa dignissimos vel sunt repudiandae rem omnis veritatis cum internos rerum ex quis nisi. At nisi aliquam qui fugiat enim et fugit repudiandae At officiis minus est ipsa veritatis id maiores sapiente! Et voluptate porro sit nulla odio et odio esse nam ullam sequi.
          </p>
          <p>Ex rerum voluptates et nemo aperiam ex voluptas quas non tempora consequatur eum facere optio est dolores deleniti. Sit veritatis tenetur et placeat perferendis quo nihil delectus. Aut minima veritatis vel laboriosam possimus et inventore minima aut quis quidem!
          </p>
          
        </div>
      </div>
    </section>

    <section className="about__vision">
      <div className="container about__vision-container">
        
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
          Lorem ipsum dolor sit amet. Ex dolorem quidem sit cumque internos ab ipsa dignissimos vel sunt repudiandae rem omnis veritatis cum internos rerum ex quis nisi. At nisi aliquam qui fugiat enim et fugit repudiandae At officiis minus est ipsa veritatis id maiores sapiente! Et voluptate porro sit nulla odio et odio esse nam ullam sequi.
          </p>
          <p>Ex rerum voluptates et nemo aperiam ex voluptas quas non tempora consequatur eum facere optio est dolores deleniti. Sit veritatis tenetur et placeat perferendis quo nihil delectus. Aut minima veritatis vel laboriosam possimus et inventore minima aut quis quidem!
          </p>
          
        </div>
        <div className="about__section-image">
          <img src = {VisionImage} alt="Vision Story"/>
        </div>
      </div>

    </section>

    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src = {MissionImage} alt="Mision Story"/>
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
          Lorem ipsum dolor sit amet. Ex dolorem quidem sit cumque internos ab ipsa dignissimos vel sunt repudiandae rem omnis veritatis cum internos rerum ex quis nisi. At nisi aliquam qui fugiat enim et fugit repudiandae At officiis minus est ipsa veritatis id maiores sapiente! Et voluptate porro sit nulla odio et odio esse nam ullam sequi.
          </p>
          <p>Ex rerum voluptates et nemo aperiam ex voluptas quas non tempora consequatur eum facere optio est dolores deleniti. Sit veritatis tenetur et placeat perferendis quo nihil delectus. Aut minima veritatis vel laboriosam possimus et inventore minima aut quis quidem!
          </p>
          
        </div>
      </div>

    </section>
    </>
  )
}

export default About