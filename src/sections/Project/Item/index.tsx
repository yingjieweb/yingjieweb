import React, { ReactNode } from "react";
import { Fade } from "react-awesome-reveal";
import { Tooltip } from "antd";
import styles from "./styles.module.scss";

interface Image {
  image: string;
  content: string;
}

export type ProjectItem = {
  logo?: string;
  logoFont?: string;
  title?: string | ReactNode;
  badges?: string[];
  content?: string | ReactNode;
  description?: string | ReactNode;
  links?: Image[];
  techUsed?: Image[];
};

const Item: React.FC<ProjectItem> = (props) => {
  const {
    logo,
    logoFont,
    title,
    badges,
    content,
    description,
    links,
    techUsed,
  } = props;

  return (
    <div className={styles.item}>
      <Fade>
        <div className={styles.container}>
          {logo && <img className={styles.logo} src={logo} alt="logo" />}
          {logoFont && <div className={styles.logoFont}>{logoFont}</div>}

          {title && <h4 className={styles.title}>{title}</h4>}

          {badges && (
            <div className={styles.badges}>
              {badges.map((badge) => (
                <img key={badge} src={badge} alt="badge" />
              ))}
            </div>
          )}

          {content && <div className={styles.content}>{content}</div>}

          {description && (
            <div className={styles.description}>{description}</div>
          )}

          {links && (
            <div className={styles.links}>
              {links.map((link) => (
                <a
                  key={link.content}
                  href={link.content}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={link.image} alt="linkImage" />
                </a>
              ))}
            </div>
          )}

          {techUsed && (
            <div className={styles.techUsed}>
              <h4>技术栈</h4>
              <ul>
                {techUsed.map((tech, index) => (
                  <li
                    key={tech.content}
                    style={{ animationDelay: `${index * 300}ms` }}
                  >
                    <Tooltip placement="top" title={tech.content} color="black">
                      <img src={tech.image} alt="techUsed" />
                    </Tooltip>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Fade>
    </div>
  );
};

export default Item;
