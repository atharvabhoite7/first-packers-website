import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import Link

const CarouselComponent = () => {
  return (
    <div className=" mx-auto">
      <Carousel showThumbs={false}>
      <div>
          <img src="https://images.pexels.com/photos/5025663/pexels-photo-5025663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Slide 3" />
          <p className="legend cursor-pointer" onClick={() => (window.location.href = "/testimonials")}>Read testimonials of previous clients
          </p>
        </div>

        <div>
          <img src="https://images.pexels.com/photos/5025666/pexels-photo-5025666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Slide 1" />
          <p className="legend cursor-pointer" onClick={() => (window.location.href = "/services")}>
            Explore Services
          </p>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/5025665/pexels-photo-5025665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Slide 2" />
          <p className="legend cursor-pointer" onClick={() => (window.location.href = "/enquiry")}>
            Enquire the providers
          </p>
        </div>
        
      </Carousel>
    </div>
  );
};

export default CarouselComponent;


// import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the Carousel styles
// import { Carousel } from "react-responsive-carousel";

// const CarouselComponent = () => {
//   return (
//     <Carousel>
//       <div>
//         <img src="https://urbanrelocation.in/images/service/home-shifting.jpg" alt="Slide 1" />
//         <p className="legend">Slide 1</p>
//       </div>
//       <div>
//         <img src="https://cdn.create.vista.com/api/media/small/251613186/stock-photo-handsome-movers-wrapping-cardboard-box" alt="Slide 2" />
//         <p className="legend">Slide 2</p>
//       </div>
//       <div>
//         <img src="https://anjanapackersandmovers.com/packers/wp-content/uploads/2019/07/Packing_Unpacking_Services.jpg" alt="Slide 3" />
//         <p className="legend">Slide 3</p>
//       </div>
//     </Carousel>
//   );
// };

// export default CarouselComponent;