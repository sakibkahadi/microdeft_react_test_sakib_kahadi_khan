"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const navLinks = (
    <>
      <Link className="hover:underline" href="/courses">
        Courses
      </Link>
      <Link className="hover:underline" href="/add-course">
        Add Course
      </Link>
      <Link className="hover:underline" href="/login">
        Login
      </Link>
      <Link className="hover:underline" href="/register">
        Register
      </Link>
    </>
  );

  //   close drawer if zoom out
  useEffect(() => {
    const handleDrawerCloseZoomOut = () => {
      if (window.innerWidth >= 1024) {
        setIsDrawerOpen(false);
      }
    };

    window.addEventListener("resize", handleDrawerCloseZoomOut);

    return () => {
      window.removeEventListener("resize", handleDrawerCloseZoomOut);
    };
  }, []);

  return (
    <div className="relative">
      <div className="flex bg-red-100 justify-between items-center">
        {/* Logo Section */}
        <div className=" p-5  ">logo</div>

        {/* links section */}
        <div className=" p-5">
          {/* lg devices: pc, laptop */}
          <div className=" hidden lg:block p-5 ">
            <ul className="flex justify-center gap-5">{navLinks}</ul>
          </div>
          {/* small and medium devices-mobile, tablets */}
          <div className="lg:hidden " onClick={handleDrawerOpen}>
            <FaBars size={24} />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={handleCloseDrawer}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-green-500 transform transition-transform duration-300 z-20 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-5">
          <FaTimes
            color="white"
            size={24}
            className=""
            onClick={handleCloseDrawer}
          />
        </div>
        {/* Links Content */}
        <div className="p-5 text-white">
          <ul className=" flex flex-col gap-2 ">{navLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
