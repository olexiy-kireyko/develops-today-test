import s from "./SidebarMenu.module.css";
import { useState, useEffect } from "react";

interface Item {
  id: string;
  name: string;
  itemChildren: string[];
}

interface SidebarMenu {
  list: Item[];
  expandedId: string;
  isShowMenu: boolean;
}

export default function SidebarMenu({
  list,
  expandedId = "none",
  isShowMenu = false,
}: SidebarMenu) {
  const [stateExpandedId, setStateExpandedId] = useState(expandedId);
  const [isShow, setIsShow] = useState(isShowMenu);
  useEffect(() => {
    setTimeout(() => {
      setIsShow(true);
    }, 10);
  }, []);

  const handleExpend = (e: React.MouseEvent<HTMLLIElement>) => {
    let id = e.currentTarget.dataset.id;
    if (id === undefined) id = "none";
    if (stateExpandedId === id) {
      setStateExpandedId("none");
      return;
    }
    setStateExpandedId(id);
  };

  return (
    <div className={`${s.box} ${isShow ? s.show : s.hide} `}>
      <ul className={s.list}>
        {list.map((item) => {
          return (
            <li
              data-id={item.id}
              className={s.item}
              key={item.id}
              onClick={handleExpend}
            >
              <p> {item.name} </p>
              {stateExpandedId === item.id && (
                <ul>
                  {item.itemChildren.map((child, i) => {
                    return <li key={i}>{child}</li>;
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
