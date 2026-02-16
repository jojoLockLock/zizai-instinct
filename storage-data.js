// 每个节点都支持可选别称：aliases: ["别称1", "别称2"]
window.STORAGE_DATA = [
  {
    name: "白色展示柜",
    children: [
      { name: "透明（展示区）" },
      {
        name: "左下",
        children: [
          { name: "电池" },
          { name: "眼镜" },
          { name: "照片" },
          { name: "其他小玩具周边等" },
        ],
      },
      {
        name: "右下",
        children: [{ name: "药物" }],
      },
    ],
  },
  {
    name: "餐边柜",
    children: [
      { name: "文件柜" },
      { name: "PTCG" },
      { name: "打印机" },
      { name: "A4 纸张" },
      { name: "救生物资" },
      { name: "消防面具" },
    ],
  },
  {
    name: "书桌下抽屉",
    children: [
      {
        name: "电子产品",
        children: [
          {
            name: "switch 及相关配件",
            aliases: ["任天堂", "ns", "switch 配件"],
          },
          { name: "鼠标", aliases: ["mouse"] },
          { name: "U 盘 / 移动硬盘" },
          { name: "录音笔" },
          { name: "麦克风" },
          { name: "移动 WIFI" },
          { name: "小风扇" },
        ],
      },
      { name: "电线" },
    ],
  },
  {
    name: "电视顶",
    children: [
      { name: "switch 卡带盒子" },
      { name: "游戏手柄" },
      { name: "switch 底座" },
    ],
  },
  {
    name: "电视柜",
    children: [
      { name: "路由器 / 插线板 / 转换头" },
      { name: "数据线（网线/HDMI 线）" },
      { name: "HUB / 电源适配器" },
      { name: "螺丝刀、螺丝" },
      { name: "MIDI 键盘" },
    ],
  },
  {
    name: "储物柜",
    children: [
      {
        name: "左边",
        children: [{ name: "鞋子" }, { name: "雨伞" }],
      },
      {
        name: "右边",
        children: [{ name: "抽纸 / 湿纸巾 / 厨房用纸" }],
      },
    ],
  },
];
