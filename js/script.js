$(function () {

    // Adiciona a sombra
    $('.form-control, .btn').hover(function () {
        $(this).toggleClass("shadow");
    });

    // Faz a verificação dos campos
    $('#cep').mask('00000-000');
    $('#date').mask('00/00/0000');
    $('#celular').mask('(00) 00000-00000');
    $('#rg').mask('00.000.000-0');
    $('#cpf').mask('000.000.000-00');
    $('#cnpj').mask('00.000.000/0000-00');
    $('#rj').mask('00000-000');

    // Verifica a força da senha
    $('#senha').bind('keyup', function () {
        var txt = $(this).val();
        var forca = 0;

        // Letras, numeros e caracteres especiais

        if (txt.length > 5) {
            forca += 25;
        }

        var reg = new RegExp(/[a-z]/i);
        if (reg.test(txt)) {
            forca += 25;
        }

        var reg = new RegExp(/[0-9]/i);
        if (reg.test(txt)) {
            forca += 25;
        }

        var reg = new RegExp(/[^a-z0-9^]/i);
        if (reg.test(txt)) {
            forca += 25;
        }

        $('#forca').html('Força: ' + forca + '%');
    });

    // Mostra a senha
    $('#view').bind('click', function () {
        if ($('#view').is(':checked')) {
            $('#senha').attr('type', 'text')
        } else {
            $('#senha').attr('type', 'password')
        }
    });

});
