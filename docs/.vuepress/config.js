module.exports = {
  base: "/WebDocumentation/",
  title: "Hello VuePress",
  description: "Just playing around",
  themeConfig: {
    logo: "/img/taotao.jpeg",
    nav: [
      {
        text: "Web前端",
        items: [
          {
            text: "JS",
            link: "/pages/testMenu/"
          }
        ]
      },
      {
        text: "工具",
        items: [
          // 下面有二级目录，就这样设置
          {
            text: "webpack",
            link: "/pages/webpack/"
          }
        ]
      },
      { text: "Github", link: "https://github.com/Jen0" }
    ],
    displayAllHeaders: true, // 默认值：false
    sidebar: {
      //增加新文章，需要从首页进去，不然会报 组件未注册的问题
      "/pages/webpack/": ["", "test1"],
      "/pages/testMenu/": [""]
    }
    // [
    //   {
    //     title: "webpack1",
    //     collapsable: true,
    //     sidebarDepth: 1,
    //     path: "/pages/webpack/",
    //     children: ["/pages/webpack/", "/pages/webpack/test1"]
    //   }
    // ]
  },
  markdown: {
    lineNumbers: true
  }
};
