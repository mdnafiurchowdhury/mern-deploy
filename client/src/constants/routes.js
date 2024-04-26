import Main from "../pages/Main";
import Email from "../components/Email";
import ViewEmails from "../components/ViewEmails";

export const routes ={

  main:{
     path: '/',
     element: Main
  },
  emails:{
    path: '/emailss',
    element: Email


  },
  invalid:{
    path: '/*',
    element: Email

  },
  view:{
  path: '/view',
  element: ViewEmails
  }
}