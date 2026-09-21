"use client";

import React, { useEffect, useState } from "react";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
// components
import { NavItem } from "./components/nav-item";
// constants
import { navItems } from "./constants";
// i18n
import "@/app/i18n";

export default function NavBar() {
  const { t, i18n } = useTranslation();
  const [curActiveNavEl, setCurActiveNavEl] = useState<string>("#home");
  const [mobileNavVisible, setMobileNavVisible] = useState<boolean>(false);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("i18nextLng");

    if (savedLanguage === "zh") {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  useEffect(() => {
    document.documentElement.lang =
      i18n.resolvedLanguage === "en" ? "en" : "zh-CN";
    document.title = t("meta.title");
  }, [i18n.resolvedLanguage, t]);

  const scrollToElement = (targetEl: string) => {
    const element = document.querySelector(targetEl) as HTMLElement;
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[3] flex items-center justify-between bg-white pt-[6px] pr-5 pb-[6px] pl-[25px] text-[rgba(0,0,0,0.65)] shadow-[0_4px_8px_0_rgba(0,0,0,0.1)]">
      <div className="flex-1 px-[4px] py-[2px] text-[1.5em] font-bold text-[#409EFF]">
        Yingjieweb
      </div>

      {/* desktop nav */}
      <ul className="flex items-center justify-center">
        {navItems.map((nav) => (
          <NavItem
            key={nav.targetEl}
            label={t(`nav.${nav.translationKey}`)}
            isActive={nav.targetEl === curActiveNavEl}
            className="hidden min-[993px]:block leading-[1.5] transition-colors duration-300"
            onClick={() => {
              setCurActiveNavEl(nav.targetEl);
              scrollToElement(nav.targetEl);
            }}
          />
        ))}
        <li
          className="block cursor-pointer px-3 py-2 text-[1.2em] font-bold leading-[1.5] text-[#409eff]"
          onClick={() => {
            const nextLanguage =
              i18n.resolvedLanguage === "zh" ? "en" : "zh";

            window.localStorage.setItem("i18nextLng", nextLanguage);
            i18n.changeLanguage(nextLanguage);
          }}
          aria-label={t("language.switch")}
        >
          {t("language.label")}
        </li>
        <li
          className="block min-[993px]:hidden cursor-pointer px-3 py-2 text-[1.2em] font-bold"
          onClick={() => setMobileNavVisible(!mobileNavVisible)}
        >
          {mobileNavVisible ? <CloseOutlined /> : <MenuOutlined />}
        </li>
      </ul>

      {/* mobile nav */}
      {mobileNavVisible && (
        <ul className="absolute top-full right-0 z-[3] flex w-[30%] flex-col items-center bg-white font-bold shadow-[0_4px_8px_0_rgba(0,0,0,0.1)]">
          {navItems.map((nav) => (
            <NavItem
              key={nav.targetEl}
              label={t(`nav.${nav.translationKey}`)}
              isActive={nav.targetEl === curActiveNavEl}
              onClick={() => {
                setCurActiveNavEl(nav.targetEl);
                scrollToElement(nav.targetEl);
                setMobileNavVisible(false);
              }}
            />
          ))}
        </ul>
      )}
    </nav>
  );
}
