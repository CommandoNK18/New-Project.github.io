//Hamburger menu
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

//graph
const x1= document.querySelector("#x1");
const x2= document.querySelector("#x2");
const x3= document.querySelector("#x3");
const x4= document.querySelector("#x4");
const x5= document.querySelector("#x5");

const y1= document.querySelector("#y1");
const y2= document.querySelector("#y2");
const y3= document.querySelector("#y3");
const y4= document.querySelector("#y4");
const y5= document.querySelector("#y5");

const draw= document.querySelector(".draw");

const ctx = document.getElementById('myChart');

const chart= new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 7, 3],
      borderWidth: 1,
      backgroundColor: 'black',
      borderColor: '#727778'
      }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});


/*
const x2=chart.data.labels[1];
const x3=chart.data.labels[2];
const x4=chart.data.labels[3];*/
//console.log(x7);
draw.addEventListener("click",()=>{
  
  chart.data.labels[0]=x1.value;
  chart.data.labels[1]=x2.value;
  chart.data.labels[2]=x3.value;
  chart.data.labels[3]=x4.value;
  chart.data.labels[4]=x5.value;
  chart.data.datasets[0].data[0]=y1.value;
  chart.data.datasets[0].data[1]=y2.value;
  chart.data.datasets[0].data[2]=y3.value;
  chart.data.datasets[0].data[3]=y4.value;
  chart.data.datasets[0].data[4]=y5.value;
  chart.update();
});