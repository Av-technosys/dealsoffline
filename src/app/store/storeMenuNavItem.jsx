import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function StoreMenuNavItem({ subMenuNameToShow, setShowSubMenu, setSubMenuNameToShow, menu, storeMenu }) {
    const [isHover, toggleHover] = useState(false);
    const toggleHoverMenu = () => {
        toggleHover(!isHover);
    };

    const subMenuAnimate = {
        enter: {
            opacity: 1,
            rotateX: 0,
            transition: {
                duration: 0.3,
            },
            display: "block",
        },
        exit: {
            opacity: 0,
            rotateX: -15,
            transition: {
                duration: 0.3,
            },
            transitionEnd: {
                display: "none",
            },
        },
    };

    function handleMobileMenu() {
        if (subMenuNameToShow === menu.label) {
            setShowSubMenu(false);
            setSubMenuNameToShow(null);
        } else {
            setShowSubMenu(true);
            setSubMenuNameToShow(menu.label);
        }
    }

    const hasSubMenu = menu?.subMenu?.length;

    return (
        <motion.div
            className=" group/link"
            onHoverStart={() => {
                toggleHoverMenu();
            }}
            onHoverEnd={toggleHoverMenu}
            key={menu.label}
            onClick={handleMobileMenu}
        >
            <span className={`flex gap-2 select-none rounded-md items-center relative text-black cursor-pointer px-3 border font-semibold py-2 ${menu.label === "Men" && "bg-secondary-red"} ${menu.label === subMenuNameToShow && "border border-primary-red"}`}>
                {menu.label}
                <img src={menu.image} alt="" />

            </span>
            <div className="hidden lg:block" >
                {hasSubMenu && (
                    <motion.div
                        className="absolute z-50 translate-y-full lg:top-[2.6rem] p-8 max-w-3xl rounded-[6px] origin-[50%_-170px] shadow-md backdrop-blur bg-gray-50"
                        initial="exit"
                        animate={isHover ? "enter" : "exit"}
                        variants={subMenuAnimate}
                    >
                        <div
                            className={`gap-7 columns-1 space-y-0 ${menu.gridCols == 1
                                ? "lg:columns-1"
                                : menu.gridCols == 2
                                    ? "lg:columns-2"
                                    : menu.gridCols == 3
                                        ? "lg:columns-3"
                                        : "lg:columns-4"
                                }`}
                            style={{ columnGap: "1.75rem" }} // Adjusts spacing between columns
                        >
                            {hasSubMenu &&
                                menu.subMenu.map((submenu, index) => {
                                    const [storeItems] = storeMenu.subMenu.filter((filItem) => {
                                        return filItem.title == submenu.title
                                    });
                                    // console.log(storeItems)
                                    // if (!storeItems) return;


                                    const storeSubMenuItems = storeItems?.items;

                                    return (
                                        <div key={index} className="  space-y-0.5" >
                                            <h6 className=" leading-5 py-1 mt-2 font-semibold text-lg text-primary-red">{submenu.title}</h6>
                                            {submenu?.items?.map((item, i) => {
                                                const currentItem = storeSubMenuItems?.find((filItem) => filItem.name == item.name);
                                                const isAvailable = currentItem?.name == item.name;
                                                return (
                                                    <Link href={item.slug} key={i} className={`block text-sm cursor-pointer  ${isAvailable ? "text-black" : "text-gray-500"}`}>
                                                        {item.name}
                                                    </Link>)
                                            })}
                                        </div>)
                                })}
                        </div>


                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}
