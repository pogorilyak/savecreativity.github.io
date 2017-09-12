var influencers = [
    {
        id: 'felixVonLadden',
        image: 'images/felix.png',
        name: 'Felix von Laden ',
        description: 'Creativity means to me … Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.',
        socials: {
            youtube: 'javascript:;',
            twitter: 'javascript:;',
            instagram: 'javascript:;'
        }
    },
    {
        id: 'paulinaRojinski',
        image: 'images/paulina.png',
        name: 'Paulina Rojinski',
        description: 'Creativity means to me … Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.',
        socials: {
            youtube: 'javascript:;',
            twitter: 'javascript:;',
            instagram: 'javascript:;'
        }
    },
    {
        id: 'julienBam',
        image: 'images/julien.png',
        name: 'Julien Bam',
        description: 'Creativity means to me … Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.',
        socials: {
            youtube: 'javascript:;',
            twitter: 'javascript:;',
            instagram: 'javascript:;'
        }
    },
    {
        id: 'felixVonLadden',
        image: 'images/felix.png',
        name: 'Felix von Laden ',
        description: 'Creativity means to me … Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.',
        socials: {
            youtube: 'javascript:;',
            twitter: 'javascript:;',
            instagram: 'javascript:;'
        }
    },
    {
        id: 'paulinaRojinski',
        image: 'images/paulina.png',
        name: 'Paulina Rojinski',
        description: 'Creativity means to me … Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.',
        socials: {
            youtube: 'javascript:;',
            twitter: 'javascript:;',
            instagram: 'javascript:;'
        }
    },
    {
        id: 'julienBam',
        image: 'images/julien.png',
        name: 'Julien Bam',
        description: 'Creativity means to me … Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.',
        socials: {
            youtube: 'javascript:;',
            twitter: 'javascript:;',
            instagram: 'javascript:;'
        }
    }
];

$(document).ready(function() {
    var height = window.innerHeight;
    var width = window.innerWidth;
    var $slider = $('#slider');

    if (width <= 767) {
        var $toggleBtn = $('#toggleBtn');
        var $menu = $('#menu');

        $toggleBtn.on('click', function (event) {
            $menu.toggleClass('open')
        })
    }

    if (width >= 768) {
        $('#pagepiling').pagepiling({
            menu: '#menu',
            anchors: ['page1', 'page2', 'page3'],
            scrollBar: false,
            navigation: false,
            afterRender: function(){
                //playing the video
                $('video').get(0).play();
                $('.header-block').removeClass('placeholder');
            }
        });
    }

    $('#wallsio-widget-script').attr('data-height', height);

    function showForm() {
        $('#saveCreativity').addClass('show')
    }

    function createInfluencer(el, data) {
        var item = el;
        item.find('.influencer-image')
            .attr('src', data.image)
            .attr('alt', data.name);
        item.find('.influencer-description').text(data.description);
        item.find('.influencer-name').text(data.name);
        item.find('.linkYoutube').attr('href', data.socials.youtube);
        item.find('.linkTwitter').attr('href', data.socials.twitter);
        item.find('.linkInstagram').attr('href', data.socials.instagram);

        return item;
    }

    setTimeout( showForm, 1000);

    function createSlider(data) {
        var $slider = $('#slider');
        var $template = $('#template');
        var $templateItem = $template.find('.influencer-item');

        data.map(function (el) {
            $slider.append(createInfluencer($templateItem.clone(), el));
        });

        $slider.bxSlider({
            pager: false,
            infiniteLoop: false,
            minSlides: 4,
            maxSlides: 4,
            slideWidth: 320,
            slideMargin: 0
        });
    }

    createSlider(influencers);
});









