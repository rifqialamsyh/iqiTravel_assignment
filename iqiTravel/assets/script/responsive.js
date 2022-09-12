function myCommand() {
  document.getElementById('myPacket').classList.toggle('show');
}

window.onclick = function (i) {
  if (!i.target.matches('.packetDrop')) {
    let myPacket = document.getElementById('myPacket');
    if (myPacket.classList.contains('show')) {
      myPacket.classList.remove('show');
    }
  }
};
