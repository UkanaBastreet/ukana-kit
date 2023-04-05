import React, { Component, FC, ReactNode } from "react";
import { clns } from "../../helpers";
import s from "./Badge.module.scss";

type BadgeProps = basicBadgeProps | statusBadgeProps | ribbonBadgeProps;

export const Badge: FC<BadgeProps> = ({ type, ...props }) => {
  return (
    <>
      {type === "basic" ? (
        <BasicBadge {...props} />
      ) : type === "status" ? (
        <StatusBadge {...props} />
      ) : (
        <RibbonBadge {...props} />
      )}
    </>
  );
};
interface basicBadgeProps {
  type: "basic";
  children?: ReactNode;
  size?: "dot" | "default" | "small";
}
interface statusBadgeProps {
  type: "status";
  children?: ReactNode;
  view?: "success" | "default" | "error" | "processing" | "warning";
}
interface ribbonBadgeProps {
  type: "ribbon";
  children?: ReactNode;
  color?: "blue" | "volcano" | "magenta" | "red" | "cyan" | "green" | "purple";
}

const BasicBadge: FC<Omit<basicBadgeProps, "type">> = ({ children, size }) => {
  return (
    <span className={clns(s.Badge, s.basic, size ? s[size] : s.default)}>
      {size !== "dot" && children}
    </span>
  );
};
const StatusBadge: FC<Omit<statusBadgeProps, "type">> = ({
  children,
  view,
}) => {
  return (
    <span className={clns(s.Badge, s.status)}>
      <div className={clns(s.round)}>
        <div className={clns(view ? s[view] : s.default)}></div>
      </div>
      <div className={clns(s.text)}>
        <p>{children}</p>
      </div>
    </span>
  );
};
const RibbonBadge: FC<Omit<ribbonBadgeProps, "type">> = ({
  children,
  color = "blue",
}) => {
  return (
    <span className={clns(s.Badge, s.ribbon, color ? s[color] : s.blue)}>
      {children}
    </span>
  );
};
