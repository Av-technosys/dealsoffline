"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menus } from "./utils";
import DesktopMenu from "./DesktopMenu";
import MobMenu from "./MobMenu";
import UserProfileDialog from "../dialog/userProfileDialog";
import UserSettingDialog from "../dialog/userSettingDialog";
import UserNotificationDialog from "../dialog/userNotificationDialog";

const NavBar = ({}) => {
  const [isUserProfile, setIsUserProfile] = React.useState(false);
  const [isUserSetting, setIsUserSetting] = React.useState(false);
  const [isUserNotification, setIsUserNotification] = React.useState(false);
  return (
    <div>
      <UserProfileDialog isOpen={isUserProfile} setIsUserNotification={setIsUserNotification} setIsUserProfile={setIsUserProfile} setIsUserSetting={setIsUserSetting} />
      <UserSettingDialog isOpen={isUserSetting} setIsUserNotification={setIsUserNotification} setIsUserProfile={setIsUserProfile} setIsUserSetting={setIsUserSetting} />
      <UserNotificationDialog isOpen={isUserNotification} setIsUserNotification={setIsUserNotification} setIsUserProfile={setIsUserProfile} setIsUserSetting={setIsUserSetting} />

      <header className="h-20 z-[999] text-[15px] fixed inset-0 flex items-center bg-white ">
        <nav className=" px-2 flex items-center justify-between gap-1 w-full mx-auto">
          <Link href="/" className="flex-center shrink-0 gap-x-3 z-[999] relative">
            <img src={"./logo.svg"} alt="" className="w-auto h-8" />
          </Link>

          <ul className="xl:flex items-center gap-1 shrink-0 hidden">
            {Menus.map((menu, i) => (
              <DesktopMenu menu={menu} key={i} />
            ))}
          </ul>
          {/* Dummy component to place the navbar menues to right on large screen */}
          <div></div>


          <div className="flex items-end justify-end w-full max-w-3xl gap-x-5">
            <div className=" w-full hidden xl:flex items-center justify-end gap-2 ">
              <Link href={"/search"} className=" border w-full border-black h-10 justify-between rounded py-2 px-3 flex items-center gap-3">
                <div className=" w-full flex items-center" >
                  <img src="./nav/search.png" alt="" />
                  <p className="font-medium text-gray-400">Search</p>
                </div>
                <div className=" px-1 border-l w-full max-w-52 justify-around border-black flex items-center gap-2 ">
                  <img src="./search-locaion.svg" alt="" />
                  <p className="font-medium">Jaipur</p>
                  <img src="./map-pin.svg" alt="" />
                </div>
              </Link>

              <Link href={"/partner-login"} className="bg-red-700 h-10 shrink-0 rounded py-2 px-3 flex items-center gap-2">
                <img src="./nav/hand-shake.png" alt="" />
                <p className="font-medium whitespace-nowrap text-sm text-white">Partner with us</p>
              </Link>
              <div onClick={() => { setIsUserProfile(true) }} className=" size-8 shrink-0 cursor-pointer" >
                <img src="./nav/navUser.svg" alt="" />
              </div>

            </div>
            <div className="xl:hidden">
              <MobMenu setIsUserProfile={setIsUserProfile} Menus={Menus} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
};

export default NavBar;