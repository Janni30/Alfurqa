import { useState } from "react";
import Link from "next/link";

export const DaskTopMenusMenus = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <ul className="nav_scroll text-center">
      {/* Courses Menu */}
      <li className="nav-item">
        <Link href="/course">Courses</Link>
      </li>

      {/* Pricing Menu */}
      <li className="nav-item">
        <Link href="/pricing">Pricing</Link>
      </li>

      {/* Discover Menu with Dropdown on Hover */}
      <li
        className="nav-item dropdown"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a href="#" className="dropdown-toggle">
          Discover 
        </a>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <ul className="dropdown-menu">
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/teachers">Teachers</Link></li>
            <li><Link href="/testimonials">Testimonials</Link></li>
            <li><Link href="/career">Career</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        )}
      </li>

      {/* Telephone Menu */}
      <li className="nav-item">
        <a href="tel:+1234567890">
          <i className="fas fa-phone" /> 
        </a>
      </li>
    </ul>
  );
};
