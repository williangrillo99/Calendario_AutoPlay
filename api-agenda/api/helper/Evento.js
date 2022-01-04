const Data = require("./Data");

class Evento{
    static verificaDataEvento(eventos, data){
        data = Data.verificaData(data)

        const eventosDoDia = eventos.filter(evento => {
            if(evento.data == data.toLocaleDateString()){
                return evento 
            }
        });

        return (eventosDoDia);
    }
}

module.exports = Evento;