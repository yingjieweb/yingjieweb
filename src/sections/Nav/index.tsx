import React, { useState } from "react";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import classNames from "classnames";
import { navItems } from "./constants";
import styles from "./styles.module.scss";

export interface NavItem {
  text: string;
  targetEl: string;
}

const Nav: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("#home");
  const [verticalNavVisible, setVerticalNavVisible] = useState<boolean>(false);

  const scrollTo = (targetEl: string) => {
    const $targetEl = document.querySelector(targetEl);
    if ($targetEl) {
      setActiveItem(targetEl);
      $targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.title}>Yingjieweb</div>

      <ul className={styles.horizontalNav}>
        {navItems.map((nav) => (
          <li
            key={nav.targetEl}
            className={classNames({
              [styles.active]: nav.targetEl === activeItem,
            })}
            onClick={() => scrollTo(nav.targetEl)}
          >
            {nav.text}
          </li>
        ))}
        <li
          onClick={() => {
            window.open("http://www.baidu.com");
          }}
        >
          简历
        </li>
        <li
          className={styles.navBtn}
          onClick={() => setVerticalNavVisible(!verticalNavVisible)}
        >
          {verticalNavVisible ? <CloseOutlined /> : <MenuOutlined />}
        </li>
      </ul>

      {verticalNavVisible && (
        <ul className={styles.verticalNav}>
          {navItems.map((nav) => (
            <li
              key={nav.targetEl}
              className={classNames({
                [styles.active]: nav.targetEl === activeItem,
              })}
              onClick={() => {
                setVerticalNavVisible(false);
                scrollTo(nav.targetEl);
              }}
            >
              {nav.text}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
