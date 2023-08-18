import sharePath from '../assets/icon-share.svg';
import editPath from '../assets/icon_edit.svg';
import deletePath from '../assets/icon-delete.svg';

function print(text: string) {
  console.log(text);
}

export type ItemMenu = {
  id: number;
  action: (_text: string) => void;
  iconPath: string;
  title: string;
};

export const menuItems = [
  {
    id: 1,
    action: print,
    iconPath: sharePath,
    title: 'Share on your social media platforms',
  },
  {
    id: 2,
    action: print,
    iconPath: editPath,
    title: 'Edit the latest content',
  },
  { id: 3, action: print, iconPath: deletePath, title: 'Remove the page' },
];
