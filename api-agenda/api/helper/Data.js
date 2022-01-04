class Data{
    static dataFormatada(novaDate) {
        novaDate =  Data.verificaData(novaDate)

        let dayName = new Array("Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado");
        let monName = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

        var dia = dayName[novaDate.getDay()];
        var data = novaDate.getDate();
        var mes = monName[novaDate.getMonth()];
        var ano = novaDate.getFullYear();

        return `${dia}, ${data} de ${mes} de ${ano}`
    }

    static verificaData(data){
        if (!data) {
            data = new Date();
        } else {
            data = new Date(data)
            data.setDate(data.getDate() + 1)
        }

        return data;
    }
}

module.exports = Data;