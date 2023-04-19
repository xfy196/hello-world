import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
export default function Layouts(props) {
  return (
    <>
      <main>{props.children}</main>
      <footer className={styles.footer}>
        <span>备案号:</span>
        &nbsp; &nbsp;
        <span>
          <Link target="_blank" href={"https://beian.miit.gov.cn/"}>
            皖ICP备18011786号-1
          </Link>
        </span>
      </footer>
    </>
  );
}
