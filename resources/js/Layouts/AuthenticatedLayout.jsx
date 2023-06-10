import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import { useEffect } from "react";

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
    );
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    // console.log('darkQuery:', darkQuery);

    const options = [
        { text: "light", icon: "sunny" },
        { text: "dark", icon: "moon" },
        { text: "system", icon: "desktop-outline" },
    ];

    function onWindowMatch() {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) && darkQuery.matches)
        ) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }
    onWindowMatch();

    useEffect(() => {
        switch (theme) {
            case "dark":
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme", "dark");
                break;
            case "light":
                document.documentElement.classList.remove("dark");
                localStorage.setItem("theme", "light");
                break;
            default:
                localStorage.removeItem("theme");
                onWindowMatch();
                break;
        }
    }, [theme]);

    darkQuery.addEventListener("change", (e) => {
        if (!("theme" in localStorage)) {
            if (e.matches) {
                window.document.documentElement.classList.add("dark");
            } else {
                window.document.documentElement.classList.remove("dark");
            }
        }
    });

    return (
        <div className="min-h-screen dark:text-gray-100 dark:bg-slate-800 dark:text-slate-100 duration-100">
            <nav className="bg-white border-b border-gray-100 pl-18">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link
                                    href={route("reservation")}
                                    active={route().current("reservation")}
                                >
                                    <div>
                                        <img
                                            src={"../img/BFO-logo.png"}
                                            className="block h-9 w-auto fill-current text-gray-800"
                                        ></img>
                                    </div>
                                </Link>
                            </div>
                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink
                                    href={route("reservation")}
                                    active={route().current("reservation")}
                                >
                                    Réservation
                                </NavLink>
                                <NavLink
                                    href={route("mesreservations")}
                                    active={route().current("mesreservations")}
                                >
                                    Mes réservations
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                <div className="absolute right-28 flex space-x-2 dark:bg-slate-800 bg-gray-100 rounded">
                                    {options?.map((option) => (
                                        <button
                                            key={option.text}
                                            aria-label="darkmode"
                                            onClick={() =>
                                                setTheme(option.text)
                                            }
                                            className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${
                                                theme === option.text &&
                                                "text-sky-600"
                                            }`}
                                        >
                                            <ion-icon
                                                name={option.icon}
                                            ></ion-icon>
                                        </button>
                                    ))}
                                </div>
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {auth.user.username}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Profil
                                        </Dropdown.Link>                                        
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Se déconnecter
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink
                            href={route("reservation")}
                            active={route().current("reservation")}
                        >
                            Réservation
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("mesreservations")}
                            active={route().current("mesreservations")}
                        >
                            Mes réservations
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">
                                {auth.user.name}
                            </div>
                            <div className="font-medium text-sm text-gray-500">
                                {auth.user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route("profile.edit")}>
                                Profil
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Se déconnecter
                            </ResponsiveNavLink>
                        </div>

                        <div className="mt-3 border-t border-gray-200 pt-3">
                            <div className="px-4">
                                <div className="font-medium text-base text-gray-800">
                                    Changer de thème
                                </div>
                            </div>
                            <div className="mt-3 space-y-1">
                                {options?.map((option) => (
                                    <button
                                        key={option.text}
                                        aria-label="darkmode"
                                        onClick={() => setTheme(option.text)}
                                        className={`w-full flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none transition ease-in-out duration-150 ${
                                            theme === option.text &&
                                            "text-sky-600"
                                        }`}
                                    >
                                        <ion-icon name={option.icon}></ion-icon>
                                        <span className="ml-2">
                                            {option.text}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow dark:bg-gray-900">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
