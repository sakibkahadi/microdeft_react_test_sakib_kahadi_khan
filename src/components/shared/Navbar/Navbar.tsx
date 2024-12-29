"use client";

import Button from "@/components/ui/Button";
import CustomLinks from "@/components/ui/CustomLinks";
import { signOut, useSession } from "next-auth/react";

import Image from "next/image";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { data: session } = useSession();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };
  const handleLogout = () => {
    signOut();
  };
  const navLinks = (
    <>
      {session?.user ? (
        <>
          <CustomLinks href="/courses" text="Courses" />
          <CustomLinks href="/add-course" text="Add Course" />
          <Button onClick={handleLogout} text="LogOut" />
        </>
      ) : (
        <CustomLinks href="/login" text="Login" />
      )}
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
    <div className="relative container mx-auto  ">
      <div className="flex px-5 py-4  justify-between items-center">
        {/* Logo Section */}
        <div className=" ">
          <Image
            src="https://microdeft.com/wp-content/uploads/2021/11/Asset-1.svg"
            height={170}
            width={170}
            alt="icon"
          />
        </div>

        {/* links section */}
        <div className=" ">
          {/* lg devices: pc, laptop */}
          <div className=" hidden lg:block p-5 ">
            <ul className="flex  items-center text-black font-medium justify-center gap-10">
              {navLinks}
            </ul>
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
        className={`fixed top-0 right-0 h-full w-64 bg-slate-700 transform transition-transform duration-300 z-20 ${
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
        <div className="p-5 ">
          <ul className=" text-white font-medium flex flex-col gap-2 ">
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
