//index.js
//获取应用实例
const app = getApp()
getApp.getId=""
Page({
  data: {
    list: [{
      title: "2.被割伤后，棕色的印记（不是新愈合时粉色的疤）会残留多久： ",
      content: [{
        fraction: 1,
        message: "A、我不会留下棕色的疤痕 "
      }, {
        fraction: 2,
        message: "B、 1 周 "
      }, {
        fraction: 3,
        message: "C、几周"
      }, {
        fraction: 4,
        message: "D、好几个月"
      }]
    }, {
        title: "3.当你怀孕、服用口服避孕药丸或其他荷尔蒙替代类药物时，脸上会长出多少深色斑点：",
      content: [{
        fraction: 1,
        message: "A、没有"
      }, {
        fraction: 2,
        message: "B、1 个"
      }, {
        fraction: 3,
        message: "C、少量"
      }, {
        fraction: 4,
        message: "D、很多"
      }, {
        fraction: 2.5,
        message: "E、这个问题不适用于我（因为我是男性，或者我从未怀孕或服过以上药物，或者我不确认是否有斑点）"
      }]
    },
    {
      title: "4.你的上唇或面颊有深色斑点／块吗？或者曾经有，你通过一些方法把它们除去了：",
      content: [{
        fraction: 1,
        message: "A、没有 "
      }, {
        fraction: 2,
        message: "B、我不确定 "
      }, {
        fraction: 3,
        message: "C、是的，它们现在（曾经）比较明显"
      }, {
        fraction: 4,
        message: "D、是的，它们现在（曾经）非常明显"
      }]
    },
    {
      title: "5.日晒之后斑点会加深吗:",
      content: [{
        fraction: 1,
        message: "A、我没有深色斑点 "
      }, {
        fraction: 2,
        message: "B、无法确定  "
      }, {
        fraction: 3,
        message: "C、有点加深 "
      }, {
        fraction: 4,
        message: "D、变深很多 "
      }, {
        fraction: 2.5,
        message: "E、我整天都涂防晒霜，从不直接接触阳光（如果是因为你特别担心或曾经被晒出过斑来才这样做，请选 D )"
      }]
    },
    {
      title: "6.	你的面部皮肤曾经被诊断为有色素沉积或有浅／深棕／灰色斑：",
      content: [{
        fraction: 1,
        message: "A、没有  "
      }, {
        fraction: 2,
        message: "B、有一次，但后来消失了  "
      }, {
        fraction: 3,
        message: "C、是的"
      }, {
        fraction: 4,
        message: "D、是的，而且状况严重 "
      },
      {
        fraction:2.5,
        message: "E、无法确认 "
      }]
    },
    {
      title: "7.脸部、前胸、后背或手臂是否有或者曾经有小的棕色斑点（雀斑或晒斑）:",
      content: [{
        fraction: 1,
        message: "A、没有"
      }, {
        fraction: 2,
        message: "B、有一些（ 1 一 5 个）"
      }, {
        fraction: 3,
        message: "C、有很多（ 6 一 15个）"
      }, {
        fraction: 4,
        message: "D、非常多（ 16 个以上）"
      }]
    },
    {
      title: "8.几个月来第一次晒太阳（例如刚入春或入夏）．皮肤感觉：",
      content: [{
        fraction: 1,
        message: "A、灼热 "
      }, {
        fraction: 2,
        message: "B、灼热然后变黑 "
      }, {
        fraction: 3,
        message: "C、直接变黑 "
      }, {
        fraction: 4,
        message: "D、我的肤色已经很深了，我也分不清这样是否会变得更深"
      }]
    },
    {
      title: "9.	连续数天暴露于阳光下：",
      content: [{
        fraction: 1,
        message: "A、灼热甚至起泡，但我的肤色没有什么变化"
      }, {
        fraction: 2,
        message: "B、肤色变深了一点  "
      }, {
        fraction: 3,
        message: "C、肤色变深了很多"
      }, {
        fraction: 4,
        message: "D、我的肤色已经很深了，我也分不清这样是否会变得更深  "
      }, {
        fraction: 2.5,
        message: "E、不确定（如果近期没有，可以回忆一下小时候的经历） "
      }]
    },
    {
      title: "10.	日晒有没有引起雀斑（一种直径 1 一 2mm ，大头针的针尖大小的平滑的棕色斑点）：",
      content: [{
        fraction: 1,
        message: "A、不，我从没长过雀斑"
      }, {
        fraction: 2,
        message: "B、每年长出一些新的 "
      }, {
        fraction: 3,
        message: "C、经常长出新的"
      }, {
        fraction: 4,
        message: "D、我的肤色已经很深了，看不出是否新长了雀斑  "
      },{
          fraction: 2.5,
        message: "E、从不晒太阳 "
      }]
    }, {
      title: "11.你的父母中有人长雀斑吗？如果有，请描述程度。如果仅有一方有，请按其程度选择。如果两方都有，请根据雀斑更多的那一方的情况选择：",
      content: [{
        fraction: 1,
        message: "A、没有"
      }, {
        fraction: 2,
        message: "B、有一些   "
      }, {
        fraction: 3,
        message: "C、脸上有很多"
      }, {
        fraction: 4,
        message: "D、脸上、前胸、后背、颈脖、肩膀都有很多"
      }, {
        fraction: 2.5,
        message: "E、不确定 "
      }]
    }, {
      title: "12.	你的天然发色是：",
      content: [{
        fraction: 1,
        message: "A、金发"
      }, {
        fraction: 2,
        message: "B、棕色 "
      }, {
        fraction: 3,
        message: "C、黑色"
      }, {
        fraction: 4,
        message: "D、红色"
      }]
    },
     {
       title: "13.家庭的直系亲属中是否有黑素瘤病史：",
    content: [{
      fraction: 1,
      message: "A、没有"
    }, {
      fraction: 2,
      message: "B、有一个人 "
    }, {
      fraction: 3,
      message: "C、一人以上"
    }, {
      fraction: 4,
      message: "D、我自己有黑素瘤病史 "
    }, {
      fraction: 2.5,
      message: "E、不确定 "
    }]
    },{
       title: "14.	全身被阳光晒到的皮肤中已经出现深色斑点：",
      content: [{
        fraction: 5,
        message: "A、是"
      }, {
        fraction: 0,
        message: "B、否 "
      }]
    }],
    bianliang: 0, //变量 控制显示第几个
    numbers:1,//控制底部页码
    integral: 0,  //分数
    array: { //初始显示页面显示内容
      title: "1.长过痘痘或毛发倒生后的部位会留下深棕色／黑色的印记：",
      content: [{
        fraction: 1,
        message: "A、从不  "
      }, {
        fraction: 2,
        message: "B、有时会"
      }, {
        fraction: 3,
        message: "C 、经常会"
      }, {
        fraction: 4,
        message: "D、总是这样 "
      },
      {
        fraction: 2.5,
        message: "E、我从没长过痘痘或倒生的毛发  "
      }]
    }
  }, clickBt: function (event) {
    if (this.data.bianliang >= 13) {
      var integral = event.currentTarget.dataset.fs;
      integral += this.data.integral;
      console.log("目前分数:" + integral);
      if(integral>28){
        wx.setStorageSync('fs', 1)
      }else{
        wx.setStorageSync('fs', 2)
      }
     ;
      wx.redirectTo({
        url: '../sesu/result'
      })
    } else {
      //分数累计相加
      var integral = event.currentTarget.dataset.fs;
      integral += this.data.integral;
      console.log("目前分数:" + integral);
      //变量累计相加
      var i = this.data.bianliang;
      this.data.bianliang = (i + 1);
      this.setData({
        array: this.data.list[i],
       integral:integral,
       numbers:i+2
      })
    }
    }
  })
