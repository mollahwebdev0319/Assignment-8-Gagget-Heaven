  
  const CategorySidebar = () => {
   
  return (
     <aside className=" bg-gray-200 p-4 ">
      <ul className=" grid grid-cols-1 lg:grid-cols-1 gap-5 ">
        <button className="btn btn-accent" >Laptops</button>
        <button className="btn btn-accent" >Smart Phones</button>
        <button className="btn btn-accent" >Smart Watches</button>
        <button className="btn btn-accent">Headphone</button>
        <button className="btn btn-accent" >Speakers</button>
      </ul>
    </aside>
  );

};
export default CategorySidebar;
