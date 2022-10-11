import React from "react";
import classNames from "classnames";
import { Menu } from "~/components";

export function BasicLayout(props) {
  const { children, className } = props;

  return (
    <>
      <Menu />

      <div
        className={classNames("container mx-auto", {
          [className]: className,
        })}
      >
        {children}
      </div>
    </>
  );
}
