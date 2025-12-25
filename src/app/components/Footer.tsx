function Footer() {

    const today = new Date();
    const currentYear = today.getFullYear();

  return <footer>
   <div className="text-center mb-10 font-light text-md text-gray-600  mdmb-3">
     <p>© {currentYear} Odusanya Opeyemi. All rights reserved</p>
   </div>
  </footer>;
}

export default Footer
