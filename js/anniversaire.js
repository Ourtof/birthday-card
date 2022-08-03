$('body').on('click', function(){
    $('.prefab_box:first').css({
        'visibility': 'visible'
    });
    $('body').on('click', function(){
        $('.prefab_box:last').css({
            'visibility': 'visible'
        });
        $('body').on('click', function(){
            $('.prefab_box:first').text('T\'es un mec fantastique !');
                $('.prefab_box:first').css({
                    'padding-top': '10px'
                });
                $('body').on('click', function(){
                    $('.card').css({
                        'background-color': 'lightgreen',
                    });
                });
            });
        });
    });