var student=[
  { description: "Jesus Broski", //student name
  picture:"http://dreamatico.com/data_images/jesus/jesus-5.jpg", //student picture
  from:"dreamatico.com"
  },
  { description: "Moses Splitwater",
  picture:"https://i.ytimg.com/vi/mWSBPRFd1UU/maxresdefault.jpg",
  from:"ytimg.com"
  },
  { description: "Nickie Degree",
  picture:"http://www2.pictures.zimbio.com/gi/2014+iHeartRadio+Music+Festival+Night+1+Show+Zps8AASHpwgl.jpg",
  from:"zimbio.com"
  },
  { description: "Kevin Hart",
  picture:"https://68.media.tumblr.com/da45d6dc931fd8efa7bf272fd913a8ff/tumblr_inline_ohc482ukQU1qlbkes_1280.jpg",
  from:"tumblr.com"
  },
  { description: "John Masters",
  picture:"http://www.profightdb.com/img/wrestlers/thumbs-600/4d54a6c767johncena.jpg",
  from:"profightdb.com"
  }];
var current = student;
var correct = "student clicked on";
var answer =correct.toString();
function correctanswer0()
{
  document.getElementById("picture").src= current[0].picture;
  document.getElementById("caption").innerHTML= answer;
}
function correctanswer1()
{
  document.getElementById("picture").src= current[1].picture;
  document.getElementById("caption").innerHTML= answer;
}
function correctanswer2()
{
  document.getElementById("picture").src= current[3].picture;
  document.getElementById("caption").innerHTML= answer;
}
function correctanswer3()
{
  document.getElementById("picture").src= current[2].picture;
  document.getElementById("caption").innerHTML= answer;
}
function correctanswer4()
{
  document.getElementById("picture").src= current[4].picture;
  document.getElementById("caption").innerHTML= answer;
}
