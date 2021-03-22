var $vlrAlvo = $('#vlrAlvo');
var $vlrAlterar = $('#vlrAlterar');
var $btnSubtraiValor = $('#btnSubtraiValor');
var $btnSomavalor = $('#btnSomavalor');
var subMeta1 = 100000;
var restante;

var counter=0;

$vlrAlvo.append(`R$ ${subMeta1.toLocaleString('pt-br', {minimumFractionDigits: 2})}`);
$vlrAlvo.val(subMeta1);

$btnSomavalor.off().on('click', (e)=>{
    e.preventDefault();
    if($vlrAlterar.val()!=''){
        $('.alert-danger').addClass('visually-hidden');
        restante = $vlrAlvo.val();
        var vlrNovo = parseFloat(restante) + parseFloat($vlrAlterar.val());
        $vlrAlvo.empty();
        $vlrAlvo.append(`R$ ${vlrNovo.toLocaleString('pt-br', {minimumFractionDigits: 2})}`);
        $vlrAlvo.val(vlrNovo);
        $vlrAlterar.empty();
    }else{
        $('.alert-danger').removeClass('visually-hidden');
    }
});


$btnSubtraiValor.click((e)=>{
    e.preventDefault();
    if($vlrAlterar.val()!=''){
        $('.alert-danger').addClass('visually-hidden');
        restante = $vlrAlvo.val();
        var vlrNovo = parseFloat(restante) - parseFloat($vlrAlterar.val());
        $vlrAlvo.empty();
        $vlrAlvo.append(`R$ ${vlrNovo.toLocaleString('pt-br', {minimumFractionDigits: 2})}`);
        $vlrAlvo.val(vlrNovo);
        $vlrAlterar.empty();
    }else{
        $('.alert-danger').removeClass('visually-hidden');
    }

});
