"use client";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "../constants";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useRouter } from "next/navigation";
import AlumniCard from "./Our_alumni/AlumniCard";
import Alumniform from "./Our_alumni/Alumniform";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [togglefornavchildren, setTogglefornavchildren] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [hovering, sethover] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [openforreg, setOpenforeg] = React.useState(false);
  const router = useRouter();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpenforeg = () => {
    setOpenforeg(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseforeg = () => {
    setOpenforeg(false);
  };
  const handleNavigate = () => {
    window.open("www.nitdgp.ac.in");
  };
  const hover = () => {
    sethover(true);
  };
  console.log(togglefornavchildren);
  return (
    <>
      <div className="w-full flex  bg-slate-900 mt-20 md:mt-10 justify-between items-center h-10 px-10  mx-auto">
        <p className="text-white text-[24px] -my-2 font-bold cursor-pointer flex ">
          CAAIR &nbsp;
        </p>

        <ul className={`list-none hidden sm:flex flex-row gap-7 `}>
          {navLinks.map((nav) => (
            <>
              {nav.id !== "saicell" ? (
                <>
                  {nav.id ? (
                    <>
                      <li
                        key={nav.title}
                        className={`${
                          active === nav.title ? "text-white" : "text-slate-100"
                        } hover:text-white text-[10px] font-medium cursor-pointer `}
                        onClick={() => setActive(nav.title)}
                      >
                        {!nav.children ? (
                          <>
                            <Tooltip
                              title={
                                <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                                  {nav.childern.map((navchildren) => (
                                    <>
                                      <li
                                        key={navchildren.id}
                                        className={`font-poppins font-medium cursor-pointer text-[10px] ${
                                          active === navchildren.title
                                            ? "text-white"
                                            : "text-secondary"
                                        }`}
                                        onClick={() => {
                                          setToggle(!toggle);
                                          setActive(navchildren.title);
                                        }}
                                      >
                                        {navchildren.id !== "almuni_at" ? (
                                          <>
                                            {navchildren.id !== "reg" ? (
                                              <>
                                                <Link
                                                  legacyBehavior
                                                  href={`/${navchildren.id}`}
                                                >
                                                  {navchildren.title}
                                                </Link>
                                              </>
                                            ) : (
                                              <>
                                                <button
                                                  onClick={handleClickOpenforeg}
                                                  className="text-[10px] text-white"
                                                >
                                                  {navchildren.title}
                                                </button>
                                              </>
                                            )}
                                          </>
                                        ) : (
                                          <>
                                            <Link
                                              legacyBehavior
                                              href="https://www.linkedin.com/school/national-institute-of-technology-durgapur/people/"
                                            >
                                              {navchildren.title}
                                            </Link>
                                          </>
                                        )}
                                      </li>
                                    </>
                                  ))}
                                </ul>
                              }
                            >
                              {nav.title}
                            </Tooltip>
                          </>
                        ) : (
                          <>
                            {" "}
                            <Link href={`/${nav.id}`}>{nav.title} </Link>
                          </>
                        )}

                        <div
                          className={`${
                            !hovering ? "hidden" : "flex"
                          } p-6 black-gradient absolute top-40 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                        >
                          <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                            {navLinks.map((nav) => (
                              <ul
                                key={nav.title}
                                className={`font-poppins font-medium cursor-pointer text-[10px] ${
                                  active === nav.title
                                    ? "text-white"
                                    : "text-secondary"
                                }`}

                                // onClick={() => {
                                //   setToggle(!toggle);
                                //   setActive(nav.title);
                                // }}
                              >
                                {/* {nav.childern ? (
                                  <>
                                    {nav.childern.map((navchildren) => (
                                      <li
                                        key={navchildren.title}
                                        className={`font-poppins font-medium cursor-pointer text-[10px] text-white`}
                                      >
                                        {navchildren.title}
                                      </li>
                                    ))}
                                  </>
                                ) : (
                                  <>ggg</>
                                )} */}

                                {nav.title}
                              </ul>
                            ))}
                          </ul>
                        </div>
                      </li>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={handleClickOpen}
                        className="text-[10px] text-white"
                      >
                        Institute home
                      </button>
                    </>
                  )}
                </>
              ) : (
                <>
                  <Link legacyBehavior href="https://sac.alumnitdgp.in/">
                    <p className="text-[10px] text-white">{nav.title}</p>
                  </Link>
                </>
              )}
            </>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? "/close.svg" : "/menu.svg"}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-40 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            {/* <ul className="list-none flex  justify-end  items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <>
                  {nav.id ? (
                    <>
                      <ul
                        key={nav.title}
                        className={`${
                          active === nav.title ? "text-white" : "text-slate-100"
                        } hover:text-white text-[10px] font-medium cursor-pointer `}
                        onClick={() => {
                          setActive(nav.title);
                          setTogglefornavchildren(nav);
                        }}
                      >
                        {!nav.children ? (
                          <> */}
                            {togglefornavchildren ? (
                              <>
                                <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                                  {togglefornavchildren.childern.map(
                                    (navchildren) => (
                                      <>
                                        <li
                                          key={navchildren.id}
                                          className={`font-poppins font-medium cursor-pointer text-[10px] ${
                                            active === navchildren.title
                                              ? "text-white"
                                              : "text-secondary"
                                          }`}
                                          onClick={() => {
                                            setToggle(!toggle);
                                            setActive(navchildren.title);
                                          }}
                                        >
                                          {navchildren.id !== "almuni_at" ? (
                                            <>
                                              {navchildren.id !== "reg" ? (
                                                <>
                                                  <Link
                                                    legacyBehavior
                                                    href={`/${navchildren.id}`}
                                                  >
                                                    {navchildren.title}
                                                  </Link>
                                                </>
                                              ) : (
                                                <>
                                                  <button
                                                    onClick={
                                                      handleClickOpenforeg
                                                    }
                                                    className="text-[10px] text-white"
                                                  >
                                                    {navchildren.title}
                                                  </button>
                                                </>
                                              )}
                                            </>
                                          ) : (
                                            <>
                                              <Link
                                                legacyBehavior
                                                href="https://www.linkedin.com/school/national-institute-of-technology-durgapur/people/"
                                              >
                                                {navchildren.title}
                                              </Link>
                                            </>
                                          )}
                                        </li>
                                      </>
                                    )
                                  )}
                                </ul>
                              </>
                            ) : (
                              <>
                                <ul className="list-none flex  justify-end  items-start flex-1 flex-col gap-4">
                                  {navLinks.map((nav) => (
                                    <>
                                      {nav.id ? (
                                        <>
                                          <ul
                                            key={nav.title}
                                            className={`${
                                              active === nav.title
                                                ? "text-white"
                                                : "text-slate-100"
                                            } hover:text-white text-[10px] font-medium cursor-pointer `}
                                            onClick={() => {
                                              setActive(nav.title);
                                              setTogglefornavchildren(nav);
                                            }}
                                          >
                                            {!nav.children ? (
                                              <>{nav.title}</>
                                            ) : (
                                              <>
                                                {" "}
                                                <Link href={`/${nav.id}`}>
                                                  {nav.title}{" "}
                                                </Link>
                                              </>
                                            )}

                                            {/* <div
                            className={`${
                              !hovering ? "hidden" : "flex"
                            } p-6 black-gradient absolute top-40 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                          >
                            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                              {navLinks.map((nav) => (
                                <li
                                  key={nav.title}
                                  className={`font-poppins font-medium cursor-pointer text-[10px] ${
                                    active === nav.title
                                      ? "text-white"
                                      : "text-secondary"
                                  }`}
                                  onClick={() => {
                                    setToggle(!toggle);
                                    setActive(nav.title);
                                  }}
                                >
                                  {nav.title}
                                </li>
                              ))}
                            </ul>
                          </div> */}
                                          </ul>
                                        </>
                                      ) : (
                                        <>
                                          <button
                                            onClick={handleClickOpen}
                                            className="text-[10px] text-white"
                                          >
                                            Institute home
                                          </button>
                                        </>
                                      )}
                                    </>
                                  ))}
                                </ul>
                              </>
                            )}

                            {/* {nav.title}
                          </>
                        ) : (
                          <>
                            {" "}
                            <Link href={`/${nav.id}`}>{nav.title} </Link>
                          </>
                        )}

                        {/* <div
                          className={`${
                            !hovering ? "hidden" : "flex"
                          } p-6 black-gradient absolute top-40 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                        >
                          <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                            {navLinks.map((nav) => (
                              <li
                                key={nav.title}
                                className={`font-poppins font-medium cursor-pointer text-[10px] ${
                                  active === nav.title
                                    ? "text-white"
                                    : "text-secondary"
                                }`}
                                onClick={() => {
                                  setToggle(!toggle);
                                  setActive(nav.title);
                                }}
                              >
                                {nav.title}
                              </li>
                            ))}
                          </ul>
                        </div> */}
                      {/* </ul>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={handleClickOpen}
                        className="text-[10px] text-white"
                      >
                        Institute home
                      </button>
                    </>
                  )}
                </>
              ))}
            </ul> */} 
          </div>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"You are going to ' www.nitdgp.ac.in'?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {` Re you for leaving  "www.alumnitdgp.in" and navigating to ' www.nitdgp.ac.in'`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Stay Here</Button>
          <Button autoFocus>
            <Link href="https://nitdgp.ac.in/"> Go There</Link>
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openforreg}
        onClose={handleCloseforeg}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="lg"
        fullWidth="lg"
      >
        <Alumniform />
      </Dialog>
    </>
  );
};

export default Navbar;
