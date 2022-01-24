let data = new Date()

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.querySelector('#calendar');
    
    var calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: { // Navbar do calendário
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,dayGridDay,listYear' //A lista pode ser Diária, Semanal, Mensal e Anual
      },
      initialDate: data.toLocaleDateString().split('/').reverse().join('-'), // 
      nowIndicator: true,

      eventClick: function(info) { // Função para quando clicar em cima de um evento mostrar um modal com as informações abaixo
        if (info.event.title === "Evento") {
          info.jsEvent.preventDefault();
          $('#visualizar2 #nomeEvento').text(info.event.title)
          $('#visualizar2 #descricao').text(info.event._def.extendedProps.dsc_evento)
          $('#visualizar2 #responsavelEvento').text(info.event._def.extendedProps.responsavel)
          $('#visualizar2 #localEvento').text(info.event._def.extendedProps.local)
          $('#visualizar2 #qtdPessoas').text(info.event._def.extendedProps.qtd_pessoas)
          $('#visualizar2 #inicioEvento').text(info.event.start.toLocaleString())
          $('#visualizar2 #fimEvento').text(info.event.end.toLocaleString())
          $('#visualizar2').modal('show')
        } else {
          info.jsEvent.preventDefault();
          $('#visualizar #nomeEvento').text(info.event.title)
          $('#visualizar #inicioEvento').text(info.event.start.toLocaleString())
          $('#visualizar #fimEvento').text(info.event.end.toLocaleString())
          $('#visualizar #responsavelEvento').text(info.event._def.extendedProps.responsavel)
          $('#visualizar #localEvento').text(info.event._def.extendedProps.local)
          $('#visualizar #disciplinaEvento').text(info.event._def.extendedProps.disciplina)
          $('#visualizar').modal('show')
        }
        
      },

      timeZone: 'local',
      dayMaxEvents: 2,
      dayMaxEventRows: false,
      navLinks: false,
      businessHours: true,
      editable: false,
      selectable: true,
      locale: 'pt-br',

      buttonText: { // Renomeando os botôes
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
      moreLinkText: 'evento', // Renomeia o +2 eventos
      noEventsText: 'Sem eventos para mostrar',

      // ↓ Define o horário mínimo e máximo exibido
      slotMinTime: '08:00:00',
      slotMaxTime: '18:00:01', // Necessário esse segundo para mostrar até as 18h na visualização diária, se colocar apenas 18:00:00 no calendário aparece até as 17h
      businessHours: {
        daysOfWeek: [1, 2, 3, 4, 5],
        startTime: '08:00:00',
        endTime: '18:00:00' // Se o segundo adicionado acima estiver dando conflito com o endTime adiciona o segundo aqui também
      },
      
      buttonHints: { //Texto que aparece quando o mouse fica em cima do botão
        prev: '$0 Anterior',
        next: 'Próximo $0',
        today: function (buttonText, unit) {
            return (unit === 'dia')
                ? 'Hoje'
                : "Este " + buttonText;
        },
      }, viewHint: 'Visualização $0', navLinkHint: 'Vá para $0', moreLinkHint: function (eventCnt) { // Mesma coisq que o buttonHints
          return "Mostrar mais " + eventCnt + " evento" +     (eventCnt === 1 ? '' : 's');
      },

      events: {
          url: 'http://localhost:3001/calendario/eventos'
      }
    });

    calendar.render();
  });