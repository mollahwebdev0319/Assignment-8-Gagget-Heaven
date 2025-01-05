const Footer = () => {
  return (
  <footer className="footer bg-gray-200  text-black font-semibold p-10">
      <nav>
       <h6 className="footer-title text-2xl text-black">Services</h6>
    <a className="link link-hover">Product Support</a>
    <a className="link link-hover">Order Tracking</a>
    <a className="link link-hover">Shipping & Delivery</a>
    <a className="link link-hover">Returns</a>
  </nav>
  <nav>
    <h6 className="footer-title text-2xl text-black">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Career</a>
    <a className="link link-hover">Contact Us</a>
    <a className="link link-hover">Details More</a>
  </nav>
  <nav>
    <h6 className="footer-title text-2xl text-black">Legal</h6>
    <a className="link link-hover">Terms of Services</a>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Cookie Policy</a>
  </nav>
</footer>
  );
};

export default Footer;
