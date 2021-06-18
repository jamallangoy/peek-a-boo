var balls = document.getElementsByClassName("ball");
    document.onmousemove = () => {
      var x = (event.clientX * 100) / window.innerWidth + "%";
      var y = (event.clientY * 100) / window.innerHeight + "%";

      for (let i = 0; i < 4; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].transform = "translate(-" + x + ",-" + y + ")";
      }
    };

    function message(){
      setTimeout(() => {
          const message = document.createElement('div');
          document.body.append(message);
          message.classList = 'message'
          message.innerText = "Peek-A-Boo...I see you..."
      },3000)
      }

    
  message()
    