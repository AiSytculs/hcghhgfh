 function selectRole(role) {
      if (role === "passenger") {
        alert("Переход к интерфейсу пассажира");
        location.href = "nsaa.html";
      } else if (role === "driver") {
        alert("Переход к интерфейсу водителя");
        location.href = "vod.html";
      }
    }
  