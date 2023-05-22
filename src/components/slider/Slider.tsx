import { Carousel } from "react-bootstrap";

type SlideType = {
  title: string;
  desc: string;
  img: string;
};

function Slider(): JSX.Element {
  const slides: SlideType[] = [
    {
      title: "Shop the Latest Trends",
      desc: "Stay on top of fashion with our curated collection of the latest trends. From statement pieces to everyday essentials, find the perfect style that reflects your unique personality. Explore our wide range of clothing options and embrace the latest fashion-forward looks.",
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Unmatched Quality and Craftsmanship",
      desc: "Experience the epitome of quality and craftsmanship with our meticulously crafted clothing. We believe in using premium materials and paying attention to every detail to ensure you receive garments that are not only stylish but also durable. Discover clothing that combines style, comfort, and longevity in every stitch.",
      img: "https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2828&q=80",
    },
    {
      title: "Personalized Style, Tailored for You",
      desc: "Discover your own sense of style with our personalized fashion experience. Our stylists are dedicated to helping you find the perfect outfits that match your preferences, body type, and lifestyle. Whether you're seeking a sophisticated look for a special event or a casual ensemble for everyday wear, we're here to make your fashion dreams a reality.",
      img: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Discover Cutting-Edge Technology",
      desc: "Immerse yourself in the world of advanced electronics with our curated collection of cutting-edge technology. From state-of-the-art smartphones to smart home devices and high-performance gadgets, explore the latest innovations that will enhance your digital lifestyle. Stay ahead of the curve and embrace the future of electronics.",
      img: "https://images.unsplash.com/photo-1609713292783-5e45ec29b62d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Reliable Quality, Unparalleled Performance",
      desc: "Experience the reliability and superior performance of our high-quality electronic products. We source from reputable brands known for their commitment to excellence, ensuring that every device meets the highest standards. Whether you're looking for a powerful laptop, a high-resolution TV, or premium audio equipment, our selection guarantees a seamless and enjoyable user experience.",
      img: "https://images.unsplash.com/photo-1580974928064-f0aeef70895a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
  ];

  const renderSlides = slides.map((slide) => {
    return (
      <Carousel.Item className="h-slide" key={slide.title}>
        <div className="position-relative">
          <img
            className="d-block object-fit-cover w-100 h-1vh"
            src={slide.img}
            alt={slide.title}
            loading="lazy"
          />
          <div className="overlay-img"></div>
        </div>

        <Carousel.Caption className="top-50 translate-middle-y text-center text-md-start fs-2">
          <h3 className="fs-1 mb-4 slide-label">{slide.title}</h3>
          <p
            className="maxw-md-50p p-0 m-0 slide-desc"
            style={{ color: "#bb9797" }}
          >
            {slide.desc}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return (
    <Carousel className="h-slide" indicators={false}>
      {renderSlides}
    </Carousel>
  );
}

export default Slider;
