let data = new Date()

document.addEventListener('DOMContentLoaded', function() {
    let dia = data.getDate().toString();
    if(dia.length == 1){
      dia = "0"+data.getDate();
    }
    let dataFormatada = data.getFullYear()+"-"+(data.getMonth()+1)+"-"+dia;
    var calendarEl = document.querySelector('#calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: 'prev, next',
        center: 'title',
        right: 'timeGridWeek, dayGridMonth, timeGridDay'
      },

      initialDate: dataFormatada,
      navLinks: false, // can click day/week names to navigate views
      editable: true,
      dayMaxEvents: true, // allow "more" link when too many events
      events: {
          url: 'http://localhost:3001/calendario/eventos'
      }
    });

    calendar.render();
  });
