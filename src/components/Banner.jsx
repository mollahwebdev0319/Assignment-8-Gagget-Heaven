import { NavLink } from 'react-router-dom';
import bannerImg from  '/public/assets/banner.jpg'

const Banner = () => {
  return (
    <section className="banner bg-blue-500 text-white p-8 ">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold">Upgrade Your Tech Accessorize with <br />Gadget Heaven Accessories </h1>
        <p className="mt-4 text-xl">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
        <NavLink to="/listedProducts" className="btn btn-primary px-8 mt-8">Shop Now</NavLink>
        <img src={bannerImg}  
        className="mt-8 w-[800px] h-auto mx-auto rounded-lg pt-20" />
                
      </div>
    </section>
  );
};

export default Banner;
