import { Link } from "react-router-dom";
import { GoPerson } from "react-icons/go";
import { FiMapPin } from "react-icons/fi";
import { useAuth } from "~/store/auth/hooks";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import classNames from "classnames";
import { firebaseLogout } from "~/firebase/auth";
import { setModal } from "~/store/modal/actions";
import { FaUserGear } from "react-icons/fa6";
import { BiSolidLogOut } from "react-icons/bi";

export default function Header() {
  const user = useAuth();

  return (
    <div className="flex items-center justify-between h-16 mb-5">
      <Link to="/" className="flex items-center gap-x-3">
        <FiMapPin className="text-blue-400" size={28} />
        <p className="text-xl md:text-2xl font-medium">Location Share</p>
      </Link>
      {user ? (
        <div className="flex items-center gap-x-4">
          <p className="hidden md:block text-sm">{user.displayName}</p>
          <Menu as="div" className="relative inline-block text-right">
            <Menu.Button className="cursor-pointer w-11 h-11 rounded-full flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 transition-all">
              {user.photoURL ? (
                <img
                  className="w-11 h-11 rounded-full object-cover"
                  src={user.photoURL}
                  alt="user photo"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <p>{user?.displayName?.slice(0, 1).toLocaleUpperCase("TR")}</p>
              )}
            </Menu.Button>
            {user && (
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute w-max top-full right-0 mt-2 origin-top-right rounded-md bg-zinc-700 shadow-lg focus:outline-none overflow-hidden z-[5]">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/profile"
                        className={classNames(
                          "w-full flex items-center gap-x-2.5 px-3 py-1 transition-all",
                          {
                            "!bg-zinc-600": active,
                          },
                        )}
                      >
                        <FaUserGear
                          size={20}
                          className="flex-shrink-0 text-white"
                        />
                        <p>Profil Ayarları</p>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => firebaseLogout()}
                        className={classNames(
                          "w-full flex items-center gap-x-2.5 px-3 py-1 transition-all",
                          {
                            "!bg-zinc-600": active,
                          },
                        )}
                      >
                        <BiSolidLogOut
                          size={20}
                          className="flex-shrink-0 text-white"
                        />
                        <p>Çıkış Yap</p>
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            )}
          </Menu>
        </div>
      ) : (
        <div
          onClick={() => setModal("login")}
          className="cursor-pointer w-11 h-11 rounded-full flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 transition-all"
        >
          <GoPerson className="pointer-events-none select-none" size={18} />
        </div>
      )}
    </div>
  );
}
