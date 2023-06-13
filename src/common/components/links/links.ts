import {PATH} from "../../../utils/routes/routes";
import sprite from "../../../assets/icons/sprite.svg";


export const linksLeftSideBarSVG = [
    {title: 'github', logoLink: `${sprite}#github`, href: "https://github.com/SlavaOST-it"},
    {
        title: 'linkedin',
        logoLink: `${sprite}#linkedin`,
        href: "https://www.linkedin.com/in/vyacheslav-ostapkevich-918112254"
    },
    {title: 'telegram', logoLink: `${sprite}#telegram`, href: "https://t.me/SlavaOST"},
    {title: 'codewars', logoLink: `${sprite}#codewars`, href: "https://www.codewars.com/users/SlavaOST-it"},
]


export const linksMobileMenuSVG = [
    {title: 'vk', logoLink: `${sprite}#vk`, href: "https://vk.com/slavaost"},
    {
        title: 'instagram',
        logoLink: `${sprite}#instagram`,
        href: "https://www.instagram.com/slavkent_ost"
    },
    {title: 'facebook', logoLink: `${sprite}#facebook`, href: "https://www.facebook.com/profile.php?id=100041663271241"},
]

export const linksMenu = [
    {title: 'Home', logoLink: `${sprite}#home`, href: PATH.home},
    {title: 'About', logoLink: `${sprite}#man`, href: PATH.aboutMe},
    {title: 'Skills', logoLink: `${sprite}#skills`, href: PATH.skills},
    {title: 'Portfolio', logoLink: `${sprite}#portfolio`, href: PATH.portfolio},
    {title: 'Contacts', logoLink: `${sprite}#mail`, href: PATH.contacts},
]