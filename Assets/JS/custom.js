  $(function() {
    $('#txt_input_GIT_token').blur(function() {
        if($(this).val() == '') {
            $(this).css({'background-color':'#60656d'});
        }
        if($(this).val() != '') {
            $(this).css({'background-color':'#ffffff'});
        }
    });
});
$(function() {
    $('#txt_input_GIT_token').focus(function() {        
            $(this).css({'background-color':'#ffffff'});
    });
});

  $(function() {
    $('#div_search_btn').mouseover(function() {
            $('#spn_search').css({'color':'#2c2f33'});
    });
    $('#div_search_btn').mouseout(function() {
            $('#spn_search').css({'color':'#C0C0C0'});
    });
});

function research() {
        $("#center_elements").animsition( {
            inClass: 'zoom-in-lg',
            outClass: 'zoom-out-lg',
    })
}; 

function login() {
        $(".animsition").animsition( {
            inClass: 'flip-in-y',
            outClass: 'flip-out-y',
            inDuration: 1500,
            outDuration: 800,
    })
};   
