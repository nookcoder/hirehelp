const menuState = {
    menus: [
      {
        id:1,
        icon: "loop",
        title: "메뉴 설정",
        target: "HelloWorld",
      },
      {
        id:2,
        icon: "android",
        title: "페이지2",
        target: "register",
        model: false,
        childrens: [
          {
            id:21,
            icon: "assignment_ind",
            title: "페이지2_1",
            target: "register",
          },
          {
            id:22,
            icon: "people_alt",
            title: "페이지2_2",
            target: "register",
          }
        ]
      },
      {
        id:3,
        icon: "trending_up",
        title: "페이지3",
        target: "register",
      },
    ]
  }
    
  export default menuState;