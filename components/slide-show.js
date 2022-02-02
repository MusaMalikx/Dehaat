import { Carousel } from "react-bootstrap";
import Suggest from "./Suggest";

export const SlideShow = () => {
  return (
    <Carousel fade controls={false} interval={3000}>
      <Carousel.Item>
        <div
          className="h-screen w-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url("/images/3.jpg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="mx-10 pt-24 lg:ml-20 lg:pt-32">
            <p className="text-gray-400 font-sm mb-3">
              Building Technologies for the next Agri-Revolution
            </p>
            <h1 className="font-sans font-bold text-4xl lg:text-6xl">
              Seeds To Market
            </h1>
            <div className="grid grid-cols-2 lg:flex mt-3">
              <Suggest name="Know Your Soil" />
              <Suggest name="Agri Input" />
              <Suggest name="Advisory" />
              <Suggest name="Health & Growth" />
            </div>
            <div className="grid grid-cols-2 lg:flex">
              <Suggest name="Agri Output" />
              <Suggest name="Farm Intelligence" />
              <Suggest name="Finance" />
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="h-screen w-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url("/images/2.jpg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="mx-10 pt-24 lg:ml-20 lg:pt-32">
            <p className="text-gray-400 font-sm mb-3"># Yearly Newsletter</p>
            <h1 className="font-sans font-semibold text-4xl lg:text-6xl">
              Breaking records & reaching new heights
            </h1>
            <div className="grid grid-cols-2 lg:flex mt-3">
              <Suggest name="Dehaat Digital" />
              <Suggest name="Dehaat Cart" />
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
// import Image from "next/image";
// import Suggest from "./Suggest";

// export const SlideShow = () => {
//   return (
//     <Carousel
//       autoPlay
//     //   infiniteLoop
//     //   showIndicators={false}
//     //    showStatus={false}
//       showThumbs={false}
//       interval={7000}
//     >
//       <div>
//         <div
//           className="h-screen flex flex-col items-center"
//           style={{
//             backgroundImage:
//               'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url("images/3.jpg")',
//             backgroundPosition: "center",
//             backgroundSize: "cover",
//           }}
//         >
//           <div className="mx-10 pt-24 lg:ml-20 lg:pt-32">
//             <p className="text-gray-400 font-sm mb-3">
//               Building Technologies for the next Agri-Revolution
//             </p>
//             <h1 className="font-sans font-bold text-4xl lg:text-6xl">
//               Seeds To Market
//             </h1>
//             <div className="grid grid-cols-2 lg:flex mt-3">
//               <Suggest name="Know Your Soil" />
//               <Suggest name="Agri Input" />
//               <Suggest name="Advisory" />
//               <Suggest name="Health & Growth" />
//             {/* </div>
//             <div className="grid grid-cols-2 lg:flex"> */}
//               <Suggest name="Agri Output" />
//               <Suggest name="Farm Intelligence" />
//               <Suggest name="Finance" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <div
//           className="h-screen flex flex-col items-center"
//           style={{
//             backgroundImage:
//               'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url("images/2.jpg")',
//             backgroundPosition: "center",
//             backgroundSize: "cover",
//           }}
//         >
//           <div className="mx-10 pt-24 lg:ml-20 lg:pt-32">
//             <p className="text-gray-400 font-sm mb-3"># Yearly Newsletter</p>
//             <h1 className="font-sans font-semibold text-4xl lg:text-6xl">
//               Breaking records & reaching new heights
//             </h1>
//             <div className="grid grid-cols-2 lg:flex mt-3 items-center">
//               <Suggest name="Dehaat Digital" />
//               <Suggest name="Dehaat Cart" />
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <div>
//         <img src="assets/3.jpeg" />
//         <p className="legend">Legend 3</p>
//       </div> */}
//     </Carousel>
//   );
// };
