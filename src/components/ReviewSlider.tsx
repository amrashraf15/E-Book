"use client";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewCard from './ReviewCard';
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1
    }
  };

const ReviewSlider = () => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
    >
      <div>
      <ReviewCard
        name="Jane Doe"
        role="Web Developer"
        image="/images/user1.jpg"
        review="The platform has completely streamlined my workflow. The tools are intuitive, and the support team is always available to help. Highly recommended!"
      />
      </div>
      <div>
      <ReviewCard
        name="Javi Doe"
        role="MERN Developer"
        image="/images/user2.jpg"
        review="As a developer, efficiency is key. This service has saved me hours of work, allowing me to focus on what truly matters—building great applications."
      />
      </div>
      <div>
      <ReviewCard
        name="Adam Doe"
        role="Student"
        image="/images/user3.jpg"
        review="Using this platform has helped me improve my coding skills tremendously. The resources and community support are invaluable!"
        />
      </div>
      <div>
      <ReviewCard
          name="Sarah Lee"
          role="Project Manager"
          image="/images/user4.jpg"
          review="Managing projects has never been easier. The collaboration tools have improved my team's efficiency and communication significantly."
        />
      </div>
    </Carousel>
  )
}

export default ReviewSlider