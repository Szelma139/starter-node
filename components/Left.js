import React from "react";
import styled from "styled-components";
import { MenuElement } from "./MenuElement";

import { RiDashboardLine, RiArticleLine, RiTaskLine } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { BsInbox } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";

const TopMenu = styled.div`
  color: white;
  margin-top: 20px;
`;

export const Left = () => {
  return (
    <>
      <TopMenu>
        <MenuElement title="Dashboard" notificiationsNumber="3">
          <RiDashboardLine color="white" />
        </MenuElement>
      </TopMenu>

      <TopMenu>
        <MenuElement title="Home">
          <AiOutlineHome color="white" />
        </MenuElement>
        <MenuElement title="Article">
          <RiArticleLine color="white" />
        </MenuElement>
      </TopMenu>

      <TopMenu>
        <MenuElement title="Manage Orders">
          <RiTaskLine color="white" />
        </MenuElement>
        <MenuElement title="Orders"></MenuElement>
        <MenuElement title="Order Tracking"></MenuElement>
      </TopMenu>

      <TopMenu>
        <MenuElement title="Inbox" notificiationsNumber="9">
          <BsInbox color="white" />
        </MenuElement>
        <MenuElement title="Notifications">
          <IoMdNotificationsOutline color="white" />
        </MenuElement>
        <MenuElement
          title="SupportTickets"
          notificiationsNumber="1"
        ></MenuElement>

        <MenuElement title="DirectMessages"></MenuElement>
      </TopMenu>
    </>
  );
};
