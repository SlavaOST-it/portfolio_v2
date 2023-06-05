import sprite from "../../../assets/icons/sprite.svg";
import {PATH} from "../../../utils/routes/routes";

export const linksMenu = [
    {title: 'Home', logoLink: `${sprite}#home`, href: PATH.home},
    {title: 'About', logoLink: `${sprite}#man`, href: PATH.aboutMe},
    {title: 'Skills', logoLink: `${sprite}#skills`, href: PATH.skills},
    {title: 'Portfolio', logoLink: `${sprite}#portfolio`, href: PATH.portfolio},
    {title: 'Contacts', logoLink: `${sprite}#mail`, href: PATH.contacts},
]