import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function MobMenu({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  return (
    <div>
      <button className="xl:hidden z-[999] relative" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-gray-50 backdrop-blur text-black p-6 pb-20"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <ul>
          {Menus.map(({ label, subMenu }, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu?.length;
            // const hasSubMenu = true;
            return (
              <div key={i} className="">
                <span
                  className="flex items-center justify-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
                  onClick={() => setClicked(isClicked ? null : i)}
                >
                  {label}
                  {hasSubMenu && (
                    <ChevronDown
                      className={`ml-auto ${isClicked && "rotate-180"} `}
                    />
                  )}
                </span>
                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5"
                  >
                    {subMenu.map(({ title, items },i) => (
                      <div
                        key={i}
                        className="p-2 hover:bg-white/5 rounded-md text-red-500 cursor-pointer"
                      >
                        {/* <Icon size={17} /> */}
                        {title}
                        <div className=" pl-2 flex flex-col gap-1 text-gray-700" >
                          {
                            items.map(({name, slug},i) => (
                              <Link href={slug} key={i}>{name}</Link>
                            ))
                          }
                        </div>
                      </div>
                    ))}
                  </motion.ul>
                )}
              </div>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}
