const Footer = () => {
  return (
    <footer className="bg-black text-white pt-14 ">
      <div className="container mx-auto m-5 px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Connect With Us Section */}
          <div className="flex flex-col items-center justify-center border border-white rounded-3xl p-6">
            <h3 className="text-blue-500 text-sm tracking-wider mb-4">CONNECT WITH US</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">📞</span>
                <a href="tel:+918591843241" className="text-gray-400 hover:text-white text-sm">
                  +91 8591843241
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">✉️</span>
                <a href="mailto:info@deepnetsoft.com" className="text-gray-400 hover:text-white text-sm">
                  info@deepnetsoft.com
                </a>
              </div>
            </div>
          </div>

          {/* Logo Section */}
          <div className="flex flex-col items-center justify-center border border-white rounded-3xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded"></div>
              <h2 className="text-xl font-bold">DEEP NET SOFT</h2>
            </div>
            <div className="flex gap-4"> 
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Find Us Section */}
          <div className="flex flex-col items-center justify-center border border-white rounded-3xl p-6">
            <h3 className="text-blue-500 text-sm tracking-wider mb-4">FIND US</h3>
            <div className="flex items-start gap-2">
              <span className="text-gray-400 mt-1">📍</span>
              <p className="text-gray-400 text-sm">
                First floor Geo Infopark,<br />
                Infopark ICFOSS, Kokkakod
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        
      </div>
      <div className="mt-8 pt-8  bg-[#161616] flex flex-col md:flex-row justify-between items-center  ">
        
          <p className="text-gray-400 text-sm mx-30 ">
            © 2024 Deepnetsoft Solutions. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Terms & Conditions
            </a>
            <span className="text-gray-600 ">|</span>
            <a href="#" className="text-gray-400 hover:text-white text-sm ">
              Privacy Policy
            </a>
          </div>
          </div>
       
    </footer>
  );
};

export default Footer;