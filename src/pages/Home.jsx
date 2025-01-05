import { NavLink } from 'react-router-dom';
import Banner from '../components/Banner';
import CategorySidebar from '../components/CategorySidebar';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <div>
      <section className="banner bg-blue-500 text-white p-8">
         <Banner> </Banner>
    </section>
      <div className="flex">
        <aside className="categories   bg-gray-200 p-4">
          <ul >
            <button className='btn btn-primary m-2' >All Products</button>
            <CategorySidebar />
          </ul>
        </aside>
        <main className="gadgets p-4">
          <ProductCard></ProductCard>
        </main>
      </div>
    </div>
  );
};

export default Home;
