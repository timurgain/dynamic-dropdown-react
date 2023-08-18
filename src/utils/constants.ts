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
    title: 'Поделиться в социальных сетях',
  },
  { id: 2, action: print, iconPath: editPath, title: 'Редактировать страницу' },
  { id: 3, action: print, iconPath: deletePath, title: 'Удалить страницу' },
];
