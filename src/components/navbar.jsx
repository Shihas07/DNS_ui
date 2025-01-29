"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from '../assets/deepnets.webp';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Header */}
      <header className="bg-black/95 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center mx-10">
              <div className="w-12 h-12 bg-blue-500 rotate-45 relative">
                <div className="absolute inset-0 -rotate-45">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-white transform rotate-45"></div>
                  </div>
                </div>
              </div>
              {/* <div className="w-40 "> <img src={logo} alt="logo" /></div> */}
              
              <div className="ml-3">
                <span className="text-blue-500 text-2xl font-bold">DEEP</span>
                <span className="text-white text-2xl"> NET</span>
                <div className="text-gray-400 text-xl">SOFT</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white hover:text-blue-500 transition-colors">
                HOME
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors">
                MENU
              </a>
              <a href="#" className="text-white hover:text-blue-500 transition-colors">
                MAKE A RESERVATION
              </a>
              <a href="#" className="text-white hover:text-blue-500 transition-colors">                CONTACT US
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isMenuOpen && (
  <nav
  className="md:hidden absolute w-full h-full bg-cover  bg-no-repeat bg-black/95 border-b border-green-500 z-50"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${encodeURI(
        "https://s3-alpha-sig.figma.com/img/aefd/7aa0/f81b6208cb3da0f5ecc0f0d109ca4bd0?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QgugunDEPtViaSZudg2x1SMkE~4uq1Rj1Xr~Vuy86Gu0NDg55Qxyz35IDi9634t6yAZp~hN-hgRAV9nDjTnBdP3TG3JJkCSkz2Nat2qazfH3aMvwSH-P7nClyPTKC83rTuv3W4X1qq9glpGdyLTndwRlqwqJHxuMkdb7y1NTNRqnJMwAqNycp~uk6Kyi~ahmiNB58yn27HXrFCjRDEgJBSDo3NzOG5qP6jUugF93yyLzmn6YZgEdKaYVwtTplEA0zp8CDA141u3x1UFVu--dsoVyYaRShXSjKdhOvLGi5~xEhMfNdpt6~sONibM74D9kKCSAPvfMLiuuvZT3UsL5uw__"
      )})`,
    }}
  >
    <div className="flex flex-col space-y-4 p-4">
      <a href="#" className="text-white hover:text-blue-500 transition-colors">
        HOME
      </a>
      <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors">
        MENU
      </a>
      <a href="#" className="text-white hover:text-blue-500 transition-colors">
        MAKE A RESERVATION
      </a>
      <a
        href="#"
        className="bg-yellow-500 px-4 py-2 text-black hover:bg-yellow-400 transition-colors inline-block text-center"
      >
        CONTACT US
      </a>
    </div>
  </nav>
)}

      {/* Hero Section */}
      <div
        className="reltieve h-[300px] bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${encodeURI(
            "https://s3-alpha-sig.figma.com/img/aefd/7aa0/f81b6208cb3da0f5ecc0f0d109ca4bd0?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QgugunDEPtViaSZudg2x1SMkE~4uq1Rj1Xr~Vuy86Gu0NDg55Qxyz35IDi9634t6yAZp~hN-hgRAV9nDjTnBdP3TG3JJkCSkz2Nat2qazfH3aMvwSH-P7nClyPTKC83rTuv3W4X1qq9glpGdyLTndwRlqwqJHxuMkdb7y1NTNRqnJMwAqNycp~uk6Kyi~ahmiNB58yn27HXrFCjRDEgJBSDo3NzOG5qP6jUugF93yyLzmn6YZgEdKaYVwtTplEA0zp8CDA141u3x1UFVu--dsoVyYaRShXSjKdhOvLGi5~xEhMfNdpt6~sONibM74D9kKCSAPvfMLiuuvZT3UsL5uw__"          )})`,
        }}
      >
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl text-white font-bold mb-6">MENU</h1>
          <p className="text-gray-200 max-w-2xl mx-auto px-4 text-sm md:text-base">
            Please take a look at our menu featuring food, drinks, and brunch. If you&apos;d like to place an order, use
            the &quot;Order Online&quot; button located below the menu.
          </p>
        </div>
      </div>
    </div>
  );
}
