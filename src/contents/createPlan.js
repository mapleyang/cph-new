const createPlan = {
  zh: {
    smokingSence: {
      title: "找出吸烟诱因",
      extra: "最开始戒烟最好避免诱因。在戒烟后，也可采用其他应对办法。",
      emotional: {
        title: "情绪诱因",
        options: [{
          label: "压力大时",
          value: "压力大时"
        },{
          label: "焦虑时",
          value: "焦虑时"
        },{
          label: "情绪低落时",
          value: "情绪低落时"
        },{
          label: "孤单时",
          value: "孤单时"
        },{
          label: "无聊时",
          value: "无聊时"
        },{
          label: "吵架后",
          value: "吵架后"
        }]
      },
      habitual: {
        title: "习惯诱因",
        options: [{
          label: "早晨起床后",
          value: "早晨起床后"
        },{
          label: "吃完饭",
          value: "吃完饭"
        },{
          label: "工作间休",
          value: "工作间休"
        },{
          label: "看电视时",
          value: "看电视时"
        },{
          label: "饮酒时",
          value: "饮酒时"
        },{
          label: "饮咖啡时",
          value: "饮咖啡时"
        },{
          label: "做爱后",
          value: "做爱后"
        },{
          label: "通话时",
          value: "通话时"
        }]
      },
      social: {
        title: "社交诱因",
        options: [{
          label: "聚餐",
          value: "聚餐"
        },{
          label: "聚会",
          value: "聚会"
        },{
          label: "节假日",
          value: "节假日"
        },{
          label: "看到他人吸烟",
          value: "看到他人吸烟"
        },{
          label: "上酒吧",
          value: "上酒吧"
        }]
      }
    }
  },
  en: {
    smokingSence: {
      title: "Identify Your Smoking Triggers",
      extra: "最开始戒烟最好避免诱因。在戒烟后，也可采用其他应对办法。",
      emotional: {
        title: "Emotional",
        options: [{
          label: "Feeling stressed",
          value: "stressed"
        },{
          label: "Feeling anxious",
          value: "anxious"
        },{
          label: "Feeling lonely",
          value: "lonely"
        },{
          label: "Feeling down",
          value: "down"
        },{
          label: "Feeling boring",
          value: "boring"
        },{
          label: "Cooling off after a fight",
          value: "fight"
        }]
      },
      habitual: {
        title: "Habitual",
        options: [{
          label: "After get up",
          value: "up"
        },{
          label: "Finishing a meal",
          value: "meal"
        },{
          label: "Work break",
          value: "workBreak"
        },{
          label: "Watching TV",
          value: "tv"
        },{
          label: "Drinking alcohol",
          value: "alcohol"
        },{
          label: "Drinking coffee",
          value: "coffee"
        },{
          label: "After having sex",
          value: "sex"
        },{
          label: "Talking on the phone",
          value: "phone"
        }]
      },
      social: {
        title: "Social",
        options: [{
          label: "Dinner Party",
          value: "dinner"
        },{
          label: "Party",
          value: "party"
        },{
          label: "During festival",
          value: "festival"
        },{
          label: "Seeing someone else smoking",
          value: "someone"
        },{
          label: "Going to a bar",
          value: "bar"
        }]
      }
    }
  }
}

export default createPlan;