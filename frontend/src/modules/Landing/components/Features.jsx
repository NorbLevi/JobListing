import { NavLink } from "react-router-dom";

export const Features = () => {
  return (
    <>
      <div className="py-16">
        <h2 className="text-5xl font-bold text-center text-primary">
          Join Us
        </h2>
      </div>
      <div className="pb-20 pt-20 relative flex flex-col lg:flex-row px-20">
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col">
          <div className="w-full h-1/2 bg-white"></div>
          <div className="w-full h-1/2 bg-[#F63C7C] bg-opacity-20"></div>
        </div>
        <div className="w-1/2 space-y-5 z-20">
          <p className="font-bold text-6xl">Find 2000+ Jobs in the joBilY family</p>
          <p className="font-medium text-4xl">
            One of the most used websites for create resumes, easy and fast!
            with professional templates!
          </p>
          <NavLink to="/clientdashboard" className="btn-primary py-3 px-5 text-lg">
            Create Resume for free
          </NavLink>
        </div>
        <div className="w-1/2 z-20">
          <div
            className="
            float-right 
            bg-[url(https://s3-alpha-sig.figma.com/img/7f4e/b0dc/b0032643ca154aaf41a38d44a9843a4a?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qDGRmNvh3gHDhzN2geEe9zEsmGQOlYFbMa0FtSXJL3YjaCz8E2hj0or~JOrjhXWmQdISRRqNrs64xZJhI1fORncE-fde0NoQ4naelGYAAtdNx8IpC2OWgnv1EcQhNcOisLDj8q2q6SHojlksp4duuUlOyRfsJHxdDf70SdwyjA2ouJzQrtarfEiBzWhjzI74rfmMYAMIEZhtUfCiIk5PWXKF0UhNRhS-LOSpBD5oHCiRXk9z~3m281jimbJKs1Q9YiSd-om5j0999PYRqdSoJpUT7Kquf0jyswK-DJDJJQu57V3U9I9Rh9xvJaB3f6D6vnVrcgKj3qWO9mmMutrqQQ__)]
            bg-center bg-cover w-[506px] rounded-3xl h-[390px] border-[5px] border-primary "
          ></div>
        </div>
      </div>
    </>
  );
};
