//0 单选  1 输入框 2 矩阵单选 3 多行输入框
const Questions = [{
  label: "1、Before you begin the survey, please understand the following: /n - Your participation in this survey is voluntary. In the course of completing this survey, you may refuse to answer specific questions. You may also choose to end the survey at any time./n- There are no right or wrong answers—we want to hear about your experiences and opinions./n- All of the answers you provide will be maintained in a secure manner. We will not disclose your responses or anything about you. Your name will not be linked to any responses you provide in this survey./n- Your responses will be combined with those from other employees to provide an overall average for feedback about the organization. The results will be used to guide decisions about policies and programs related to employee health, safety, and wellness./n- There are no risks or rewards anticipated for completing the survey. However, it is possible that programs developed in the future may benefit you and your coworkers./nIf you would like to participate, please click 'Agree' to indicate you have read the information on this page.",
  type: "0",
  selections: [{
    label: "yes",
    value: 1
  },{
    label: "no",
    value: 0
  }]
},{
  label: "2、Would you say that in general your health is?",
  type: "0",
  selections: [{
    label: "Excellent",
    value: 0
  },{
    label: "Very good",
    value: 1
  },{
    label: "Good",
    value: 2
  },{
    label: "Fair",
    value: 3
  },{
    label: "Poor",
    value: 4
  },{
    label: "Don't know/not sure",
    value: 5
  }]
},{
  label: "3、Has a doctor or other healthcare provider told you that you have currently any of the following conditions? If so, is this condition currently being treated? Check all that apply.",
  type: "2",
  selections: {
    choosees: [{
      label: "Diagnosed",
      value: 0
    },{
      label: "Taking medication for",
      value: 1
    }],
    contents: [{
      label: "a) Elevated blood sugar or diabetes",
    },{
      label: "b) High blood pressure/hypertension"
    },{
      label: "c) Elevated cholesterol level"
    },{
      label: "d) Low back disease or spine problems"
    },{
      label: "e) Anxiety/depression"
    }]
  }
},{
  label: "4、What is your weight?",
  type: "1",
  selections: [{
    label: "In pounds"
  }]
},{
  label: "5、What is your height?",
  type: "1",
  selections: [{
    label: "Feet"
  },{
    label: "Inches"
  }]
},{
  label: "6、Nutrition experts recommend filling half your plate with fruits and vegetables at every meal and snacking occasion. How often do you meet this goal?",
  type: "0",
  selections: [{
    label: "Never",
    value: 0
  },{
    label: "Rarely",
    value: 1
  },{
    label: "Half the time",
    value: 2
  },{
    label: "Often",
    value: 3
  },{
    label: "Always",
    value: 4
  }]
},{
  label: "7、Health experts say that you should do strength training exercise twice a week plus do other activities that increase your heart rate and breathing on several days each week. How often do you meet this goal?",
  type: "0",
  selections: [{
    label: "Never",
    value: 0
  },{
    label: "Rarely",
    value: 1
  },{
    label: "Half the time",
    value: 2
  },{
    label: "Often",
    value: 3
  },{
    label: "Always",
    value: 4
  }]
},{
  label: "8、Do you now smoke cigarettes every day, some days, or not at all?",
  type: "0",
  selections: [{
    label: "Everyday",
    value: 0
  },{
    label: "Some days",
    value: 1
  },{
    label: "Not at all",
    value: 2
  }]
},{
  label: "9、Do you now smoke cigarettes every day, some days, or not at all?",
  type: "2",
  selections: {
    choosees: [{
      label: "Never",
      value: 0
    },{
      label: "Sometimes",
      value: 1
    },{
      label: "Often",
      value: 2
    },{
      label: "Always",
      value: 3
    }],
    contents: [{
      label: "a) I had trouble keeping my mind on what I was doing."
    },{
      label: "b) I felt depressed."
    }]
  }
},{
  label: "10、In the past 30 days.",
  type: "2",
  selections: {
    choosees: [{
      label: "No stress",
      value: 0
    },{
      label: "A little stress",
      value: 1
    },{
      label: "Moderate stress",
      value: 2
    },{
      label: "Substantial stress",
      value: 3
    },{
      label: "Extreme stress",
      value: 4
    }],
    contents: [{
      label: "a) How would you rate the average amount of stress at work?"
    },{
      label: "b) How would you rate the average amount of stress at home?"
    }]
  }
},{
  label: "11、In the past 30 days.",
  type: "2",
  selections: {
    choosees: [{
      label: "Strongly disagree",
      value: 0
    },{
      label: "Disagree",
      value: 1
    },{
      label: "Neutral",
      value: 2
    },{
      label: "Agree",
      value: 3
    },{
      label: "Strongly agree",
      value: 4
    }],
    contents: [{
      label: "a) I had a hard time doing my work because of my health."
    },{
      label: "b) My health kept me from concentrating on my work."
    }]
  }
},{
  label: "12、During the past 3 months, to what extent have you had pain, aching, numbness or tingling in any of these body areas?",
  type: "2",
  selections: {
    choosees: [{
      label: "None",
      value: 0
    },{
      label: "Mild",
      value: 1
    },{
      label: "Moderate",
      value: 2
    },{
      label: "Severe",
      value: 3
    },{
      label: "Extreme",
      value: 4
    }],
    contents: [{
      label: "a. Hand or wrist"
    },{
      label: "b. Shoulder, neck, or upper back"
    },{
      label: "c. Low back"
    },{
      label: "d. Knee"
    },{
      label: "e. Foot"
    }]
  }
},{
  label: "13、During the past week, to what extent have you had difficulty sleeping because of any physical or emotional problem?",
  type: "0",
  selections: [{
    label: "No difficulty",
    value: 0
  },{
    label: "Mild difficulty",
    value: 1
  },{
    label: "Moderate difficulty",
    value: 2
  },{
    label: "Severe difficulty",
    value: 3
  },{
    label: "So much difficulty that I can't sleep",
    value: 4
  }]
},{
  label: "14、Please answer the following questions about sleep.",
  type: "2",
  selections: {
    choosees: [{
      label: "6 hours or less",
      value: 0
    },{
      label: "About 7 hours",
      value: 1
    },{
      label: "About 8 hours",
      value: 2
    },{
      label: "About 9 hours",
      value: 3
    },{
      label: "About 10 hours or more",
      value: 4
    }],
    contents: [{
      label: "a) During the work week, about how many hours of sleep do you typically get per 24­hour period?"
    },{
      label: "b) How many hours of sleep do you usually need to have good functioning the next day?"
    }]
  }
},{
  label: "15、How would you describe the quality of your sleep on a typical night?",
  type: "0",
  selections: [{
    label: "Very good",
    value: 0
  },{
    label: "Fairly good",
    value: 1
  },{
    label: "Fairly poor",
    value: 2
  },{
    label: "Very poor",
    value: 3
  }]
},{
  label: "16、Please indicate how ready you are to make changes or improvements in your health in the following areas:",
  type: "2",
  selections: {
    choosees: [{
      label: "I am not interested in making changes or improvements.",
      value: 0
    },{
      label: "I have considered making healthier choices.",
      value: 1
    },{
      label: "I am ready to make a change.",
      value: 2
    },{
      label: "I have started making healthier choices. ",
      value: 3
    },{
      label: "I make healthy choices on a regular basis.",
      value: 4
    }],
    contents: [{
      label: "a)Be physically active"
    },{
      label: "b)Practice good eating habits"
    },{
      label: "c)Avoid smoking or using tobacco"
    },{
      label: "e)Reduce the amount of stress in your daily life "
    },{
      label: "f)Get a full night’s sleep every night"
    },{
      label: "g)Avoid alcohol, or drink in moderation"
    }]
  }
},{
  label: "17、The following questions ask about your experiences at your place of work.",
  type: "2",
  selections: {
    choosees: [{
      label: "Strongly disagree",
      value: 0
    },{
      label: "Disagree",
      value: 1
    },{
      label: "Neutral",
      value: 2
    },{
      label: "Agree",
      value: 3
    },{
      label: "Strongly agree",
      value: 4
    }],
    contents: [{
      label: "a)In this facility, management considers employee health, safety, and wellbeing to be important."
    },{
      label: "b) My coworkers would support my use of sick days support my use of sick days"
    },{
      label: "c) My supervisor encourages healthy behaviors"
    },{
      label: "d) My organization provides me with opportunities to be healthy."
    }]
  }
},{
  label: "18、My employer has provided me with the opportunities to:",
  type: "2",
  selections: {
    choosees: [{
      label: "Strongly disagree",
      value: 0
    },{
      label: "Disagree",
      value: 1
    },{
      label: "Neutral",
      value: 2
    },{
      label: "Agree",
      value: 3
    },{
      label: "Strongly agree",
      value: 4
    }],
    contents: [{
      label: "a) Be physically active"
    },{
      label: "b) Eat a healthy diet"
    },{
      label: "c) Live tobacco free"
    },{
      label: "d) Manage my stress"
    }]
  }
},{
  label: "19、Please indicate how much you agree or disagree with the following statements.",
  type: "2",
  selections: {
    choosees: [{
      label: "Strongly disagree",
      value: 0
    },{
      label: "Disagree",
      value: 1
    },{
      label: "Neutral",
      value: 2
    },{
      label: "Agree",
      value: 3
    },{
      label: "Strongly agree",
      value: 4
    }],
    contents: [{
      label: "a) Overall, my workplace is safe."
    },{
      label: "b) My job duties often interfere with my ability to comply with safety rules."
    },{
      label: "c) Taking risks is part of my job."
    },{
      label: "d) Safety is a high priority with my supervisor."
    },{
      label: "e) Employees in my work group comply with the safety rules."
    },{
      label: "f) My employer has provided me with the opportunity to work safely."
    },{
      label: "g) I am concerned about my personal safety on this job."
    },{
      label: "h) My supervisor understands and supports my family and other personal responsibilities."
    }]
  }
},{
  label: "20、To what extent do any adults depend on you in any way to help them due to disability, chronic illness, or aging?",
  type: "0",
  selections: [{
    label: "No adults depend on me due to disability, chronic illness, or aging.",
    value: 0
  },{
    label: "Another adult has primary responsibility.",
    value: 1
  },{
    label: "I share responsibility equally with another adult.",
    value: 2
  },{
    label: "I have primary responsibility.",
    value: 3
  }]
},{
  label: "21、How much responsibility do you personally have for any children under 18 in your household?",
  type: "0",
  selections: [{
    label: "I have no children under 18 at home.",
    value: 0
  },{
    label: "Another adult has primary responsibility.",
    value: 1
  },{
    label: "I share responsibility with another adult.",
    value: 2
  },{
    label: "I have primary responsibility.",
    value: 3
  }]
},{
  label: "22、Please answer the following questions.",
  type: "2",
  selections: {
    choosees: [{
      label: "Never",
      value: 0
    },{
      label: "Occasionally",
      value: 1
    },{
      label: "Neutral",
      value: 2
    },{
      label: "Sometimes",
      value: 3
    },{
      label: "Often",
      value: 4
    },{
      label: "Always",
      value: 5
    }],
    contents: [{
      label: "a) How often do things going on at work make you feel tense and irritable at home?"
    },{
      label: "b) How often do things going on at home make you feel tense and irritable on the job?"
    },{
      label: "c) How often do the demands of your job interfere with your family life?"
    },{
      label: "d) How often do the demands of your family interfere with your work on the job?"
    }]
  }
},{
  label: "23、How much do you agree or disagree with the following statements about your work?",
  type: "2",
  selections: {
    choosees: [{
      label: "Strongly disagree",
      value: 0
    },{
      label: "Disagree",
      value: 1
    },{
      label: "Neutral",
      value: 2
    },{
      label: "Agree",
      value: 3
    },{
      label: "Strongly agree",
      value: 4
    }],
    contents: [{
      label: "a) All employee concerns are heard before job decisions are made."
    },{
      label: "b) Job decisions are applied consistently to all affected employees."
    },{
      label: "c) More and more often, I talk about my work in a negative way."
    },{
      label: "d) At work, I often feel emotionally drained. "
    },{
      label: "e) I would be taken seriously if I complained about disrespectful treatment."
    },{
      label: "f) Respectful treatment is the norm in my unit/work group."
    }]
  }
},{
  label: "24、How much do you agree or disagree with the following statements about your work?",
  type: "2",
  selections: {
    choosees: [{
      label: "Strongly disagree",
      value: 0
    },{
      label: "Disagree",
      value: 1
    },{
      label: "Neutral",
      value: 2
    },{
      label: "Agree",
      value: 3
    },{
      label: "Strongly agree",
      value: 4
    }],
    contents: [{
      label: "a) On my job, I have very little freedom to decide how I do my work."
    },{
      label: "b) My job allows me to make a lot of decisions on my own."
    },{
      label: "c) I have enough time to get the job done. "
    },{
      label: "d) My job requires working very hard."
    },{
      label: "e) The people I work with take a personal interest in me."
    },{
      label: "f) The people I work with can be relied on when I need help."
    },{
      label: "g) My supervisor is concerned about the welfare of those under him or her."
    },{
      label: "h) My supervisor is helpful in getting the job done."
    },{
      label: "i) My job requires me to be creative."
    },{
      label: "j) My job requires a high level of skill"
    },{
      label: "k) My job requires me to do repeated lifting, pushing, pulling or bending"
    },{
      label: "l) My job regularly requires me to perform repetitive or forceful hand movements."
    },{
      label: "b) Job decisions are applied consistently to all affected employees."
    },{
      label: "n) My job is emotionally demanding."
    }]
  }
},{
  label: "25、Please indicate how much you agree or disagree with the following statements.",
  type: "2",
  selections: {
    choosees: [{
      label: "Strongly disagree",
      value: 0
    },{
      label: "Disagree",
      value: 1
    },{
      label: "Neutral",
      value: 2
    },{
      label: "Agree",
      value: 3
    },{
      label: "Strongly agree",
      value: 4
    }],
    contents: [{
      label: "a ) All in all, I am satisfied with my job"
    },{
      label: "b ) Overall I would recommend working with this organization to my family and friends."
    },{
      label: "c ) I often think about quitting my job"
    },{
      label: "d ) I will probably look for a new job during the next year."
    }]
  }
},{
  label: "26、How much responsibility do you personally have for any children under 18 in your household?",
  type: "0",
  selections: [{
    label: "< 15 minutes",
    value: 0
  },{
    label: "15 - 30 minutes",
    value: 1
  },{
    label: "30 - 60 minutes",
    value: 2
  },{
    label: "60 - 90 minutes",
    value: 3
  },{
    label: "> 90 minutes",
    value: 4
  }]
},{
  label: "27、What is your age (in years)?",
  type: "1",
  selections: [{
    label: ""
  }]
},{
  label: "28、What is your gender?",
  type: "0",
  selections: [{
    label: "Male",
    value: 0
  },{
    label: "Female",
    value: 1
  }]
},{
  label: "29、What is your racial background? Mark all that apply.",
  type: "0",
  selections: [{
    label: "White, European descent",
    value: 0
  },{
    label: "Black, African American, African",
    value: 1
  },{
    label: "American Indian, Alaska Native",
    value: 2
  },{
    label: "Asian, Asian American (includes Filipino, Korean, Chinese, Pacific Islander, etc.)",
    value: 3
  },{
    label: "Other",
    value: 4
  }]
},{
  label: "30、Do you consider yourself Latino or Hispanic origin or descent?",
  type: "0",
  selections: [{
    label: "Yes (includes Puerto Rican, Cuban American, Mexican American, etc.)",
    value: 0
  },{
    label: "No, not Latino, Hispanic, Spanish",
    value: 1
  }]
},{
  label: "31、Please indicate the highest grade or year of school that you have completed.",
  type: "0",
  selections: [{
    label: "Less than high school",
    value: 0
  },{
    label: "High school graduate or GED",
    value: 1
  },{
    label: "Some college",
    value: 2
  },{
    label: "College degree (2 or 4 year college)",
    value: 3
  },{
    label: "Graduate degree",
    value: 4
  }]
},{
  label: "32、What is your current marital status?",
  type: "0",
  selections: [{
    label: "Married or live with partner",
    value: 0
  },{
    label: "Widowed",
    value: 1
  },{
    label: "Divorced or separated",
    value: 2
  },{
    label: "Single, never married",
    value: 3
  }]
},{
  label: "33、How many years have you worked at this organization? (Answer with a number only)",
  type: "1",
  selections: [{
    label: ""
  }]
},{
  label: "34、How many hours do you typically work each week? (Answer with a number only)",
  type: "1",
  selections: [{
    label: ""
  }]
},{
  label: "35、What shift do you usually work?",
  type: "0",
  selections: [{
    label: "First Shift",
    value: 0
  },{
    label: "Second Shift",
    value: 1
  },{
    label: "Third  Shift",
    value: 2
  },{
    label: "Rotating",
    value: 3
  }]
},{
  label: "36、What is your level of supervisory responsibility?",
  type: "0",
  selections: [{
    label: "No supervisory responsibility",
    value: 0
  },{
    label: "Team leader",
    value: 1
  },{
    label: "Supervisor",
    value: 2
  },{
    label: "Manager",
    value: 3
  },{
    label: "Executive",
    value: 4
  }]
},{
  label: "37、Please provide any other comments you wish about your health and the workplace.",
  type: "3",
  selections: [{
    label: ""
  }]
}]


export default Questions;