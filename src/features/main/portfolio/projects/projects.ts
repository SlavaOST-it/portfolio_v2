import todo_img from "../../../../assets/images/projectBG/ToDoList.jpg"
import socialNet_img from "../../../../assets/images/projectBG/socialNet.jpg"
import education_img from "../../../../assets/images/projectBG/educationBG.jpg"

export const projects = [
    {
        id: 1,
        title: "Social Network",
        href: "https://github.com/SlavaOST-it/social-network-ver-2",
        description: "Social network app with using react hooks, routing,\n" +
            "lazy loading, working with REST api, login/logout flow,\n" +
            "pagination, form and validation / file uploading using\n" +
            "unit-tests for code workability check",
        img: socialNet_img,
        gradient1: "#6d6052",
        gradient2: "#554b40",
    },

    {
        id: 2,
        title: "Education cards",
        href: "https://github.com/SlavaOST-it/education-cards",
        description: "The application implements the possibility of registration, login.\n" +
            "Profile editing. Creation of decks with educational cards.\n" +
            "Create question cards. Their editing.",
        img: education_img,
        gradient1: "#010e1f",
        gradient2: "#014256",
    },

    {
        id: 3,
        title: "To-do List",
        href: "https://github.com/SlavaOST-it/ToDoList",
        description: "Todolist app created with react hooks, routing and\n" +
            "redirects, material UI, REST api request / response flow,\n" +
            "unit-tests and etc.",
        img: todo_img,
        gradient1: "#d4a870",
        gradient2: "#53361c",
    },

    // {
    //     id: 4,
    //     title: "Online-Store",
    // href: "https://github.com/SlavaOST-it/education-cards",
    //     description: "",
    //     img:"",
    //     bg: ""
    // },
]