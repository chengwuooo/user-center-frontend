import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';
import {GITHIB_LINK} from "@/constants";

const links = [
  {
    key: 'github',
    title: <><GithubOutlined />我的GitHub</>,
    href: GITHIB_LINK,
    blankTarget: true,
  },
  {
    key: '我的上线项目',
    title: 'fcw的上线项目',
    href: 'http://47.109.196.49',
    blankTarget: true,
  },

];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const defaultMessage = 'fcw';
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      style={{ background: 'none' }}
      links={links}
    />
  );
};


export default Footer;
