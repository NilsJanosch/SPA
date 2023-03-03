/* General Styling */

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
body {
  background-color: #111;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  perspective: 1000px;
}

.cube {
  width: 100px;
  height: 100px;
  position: relative;
  transform-style: preserve-3d;
  animation: rotate-cube 2s infinite linear;
}

.cube .side {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0.7;
  border: 2px solid black;
}

.cube .front {
  transform: translateZ(50px);
}

.cube .back {
  transform: translateZ(-50px);
}

.cube .left {
  transform: rotateY(-90deg) translateZ(50px);
}

.cube .right {
  transform: rotateY(90deg) translateZ(50px);
}

.cube .top {
  transform: rotateX(90deg) translateZ(50px);
}

.cube .bottom {
  transform: rotateX(-90deg) translateZ(50px);
}

@keyframes rotate-cube {
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
