let data = new Date()

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.querySelector('#calendar');
    
    var calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,timeGridDay,listYear' //A lista pode ser Diária, Semanal, Mensal e Anual
      },
      initialDate: data.toLocaleDateString().split('/').reverse().join('-'),
      navLinks: true,
      editable: true,
      nowIndicator: true,
      dayMaxEvents: true,
      
      // Modificações

      eventClick: function(info) {
        info.jsEvent.preventDefault();
        $('#visualizar #nomeEvento').text(info.event.title)
        $('#visualizar #inicioEvento').text(info.event.start.toLocaleString())
        $('#visualizar #fimEvento').text(info.event.end.toLocaleString())
        // $('#visualizar #responsavelEvento').text(info.)
        // $('#visualizar #localEvento').text(info.)
        // $('#visualizar #disciplinaEvento').text(info.)
        $('#visualizar').modal('show')
      },

      timeZone: 'local',
      dayMaxEventRows: true,
      navLinks: false,
      businessHours: true,
      editable: false,
      selectable: true,
      locale: 'pt-br',

      buttonText: {
        // prev: 'Anterior',
        // next: 'Próximo',
        // prevYear: 'Ano Anterior',
        // nextYear: 'Próximo Ano',
        list:'LISTA',
        year:'ANO',
        today:'HOJE',
        month:'MÊS',
        week:'SEMANA',
        day:'DIA'
      },
      weekText: 'W',
      weekTextLong: 'Semana',
      closeHint: 'Fechar',
      timeHint: 'Hora',
      eventHint: 'Evento',
      allDayText: 'Dia Todo',
      moreLinkText: 'eventos',
      noEventsText: 'Sem eventos para mostrar',

      slotMinTime: '08:00:00',
      slotMaxTime: '18:00:01', // Neessário esse segundo para mostrar até as 18h na visualização diária, se colocar apenas 18:00:00 no calendário aparece até as 17h
      businessHours: {
        daysOfWeek: [1, 2, 3, 4, 5],
        startTime: '08:00:00',
        endTime: '18:00:00' // Se o segundo adicionado acima estiver dando conflito com o endTime adiciona o segundo aqui também
      },
      
      buttonHints: {
        prev: '$0 Anterior',
        next: 'Próximo $0',
        today: function (buttonText, unit) {
            return (unit === 'dia')
                ? 'Hoje'
                : "Este " + buttonText;
        },
      }, viewHint: 'Visualização $0', navLinkHint: 'Vá para $0', moreLinkHint: function (eventCnt) {
          return "Mostrar " + eventCnt + " mais evento" +     (eventCnt === 1 ? '' : 's');
      },

      // Fim das modificações

      events: {
          url: 'http://localhost:3001/calendario/eventos'
      }
    });

    calendar.render();
  });
