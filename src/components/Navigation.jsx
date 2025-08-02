import React from "react";
import styled from "styled-components";

const navItems = [
  { id: "main", label: "", color: "#AEE9F5" },
  { id: "about", label: "ABOUT", color: "#AEE9F5" },
  { id: "skills", label: "SKILL", color: "#AEE9F5" },
  { id: "projects", label: "PROJECTS", color: "#AEE9F5" },
  { id: "contact", label: "CONTACT", color: "#AEE9F5" },
];

export default function Navigation({ currentSection }) {
  return (
    <NavWrapper>
      <ul>
        {navItems.map(({ id, label, color }) => {
          const isActive = currentSection === id;
          const isMain = currentSection === "main";
          const showLabel = id !== "main" && !isMain;

          return (
            <NavItem key={id} $active={isActive}>
              <ColorDot
                style={{
                  backgroundColor: isActive ? "#0099cc" : color,
                }}
              />
              {showLabel && (
                <NavLink $active={isActive} href={`#${id}`}>
                  {label}
                </NavLink>
              )}
            </NavItem>
          );
        })}
      </ul>
    </NavWrapper>
  );
}

// ---------------- styled-components ----------------
const NavWrapper = styled.nav`
  position: fixed;
  top: 30%;
  left: 20px;
  z-index: 1000;
  margin: 60px;
  ul {
    display: flex;
    flex-direction: column;
    gap: 60px;
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  opacity: ${({ $active }) => ($active ? 1 : 0.4)};
  transition: all 0.3s ease;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${({ $active }) => ($active ? "#0099cc" : "#333")};
  font-weight: ${({ $active }) => ($active ? "700" : "500")};
  transition: color 0.3s, font-weight 0.3s;

  &:hover {
    text-decoration: underline;
  }
`;

const ColorDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  transition: background-color 0.3s;
`;
