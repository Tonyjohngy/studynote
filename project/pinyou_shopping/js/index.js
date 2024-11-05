$(document).ready(function() {
    // 刷新置顶网页
    $(window).scrollTop(0);

    // 更改定位
    $('.dropdown').each(function () {
        var dropdown = $(this)
        var dropdownContent = dropdown.find('.dropdown-content')
        var icon = dropdown.find('.arrow-icon')
        var item = dropdownContent.find('a')
        dropdown.mouseenter(function () {
            dropdownContent.show()
        })
        dropdown.mouseleave(function () {
            dropdownContent.hide()
        })

        item.each(function () {
            item.click(function (e) {
            // 阻止浏览器默认行为
            e.preventDefault
            icon.text($(this).text())
            dropdownContent.hide()
        })
        })
    })
    
    
    $('.item a').each(function () {
        var a = $(this)
        a.mouseenter(function () {
            a.css({
                'color':'red'
            })
        })
        a.mouseleave(function () {
             a.css({
                'color':'black'
            })
        })    
    })
    // 播报栏
    const b_data= [
        {url: './upload/banner_bg.png',title: '1',link:'http://www.baidu.com'},
        {url: './upload/bobao1.jpg',title: '2',link:'#'},
        {url: './upload/bobao2.jpg',title: '3',link:'#'},
        {url: './upload/bobao3.jpg',title: '4',link:'#'},
        {url: './upload/bobao4.jpg.avif',title: '5',link:'#'},
        {url: './upload/bobao5.jpg',title: '6',link:'#'},
    ]

    var dots = $('.dots li')
    var banner = $('.focus')

    const l = b_data.length 
    let currentIndex = 0

    function showSlide(index){
        // 
        dots.eq(currentIndex).removeClass('active')
        currentIndex = index
        dots.eq(currentIndex).addClass('active')
        banner.css({'background-image':`url(${b_data[currentIndex].url})`})
    }
    //下一个广告 
    function showNextSlide() {
        showSlide((currentIndex+1)%l)
    }
    //上一个广告 
    function showPrevSlide() {  
        showSlide((currentIndex-1+l)%l)
    }
    banner.css({'background':`url(./upload/banner_bg.png)`})
    setInterval(showNextSlide,3000)

    $('.left-icon').click(function(){
        showPrevSlide()
    })
    $('.right-icon').click(function(){
        showNextSlide()
    })

    banner.click(function () {
        window.location.href = b_data[currentIndex].link
    })

    dots.mouseenter(function (event) {
        event.stopPropagation(); // 阻止事件冒泡
        // 获取点击小圆点的索引
       showSlide($(this).index())
    })
    // 侧边导航栏定位
    const floor = $('.floor')
    $(window).scroll(function () {
        let mainHeight = $('.app').offset().top
        if (window.pageYOffset > mainHeight) {
            floor.css({
                'position':'fixed',
                'top':'0px',
                'left':'50%',
                'margin-left':'625px',
                'display':'block'
            })
        }else{
             floor.css({
                'position':'absolute',
                'top':'0px',
                'left':'50%',
                'margin-left':'625px',
            })
        }
    })

    // 点击跳转顶部
    $('.up').click(function(){
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    })
    // 跳转到推荐
    $('.goRecom').click(function() {
        const recomTop = $('.app').offset().top
        console.log(recomTop);
        window.scrollTo({
            top: recomTop,
            behavior: 'smooth'
        });
    });
    // 跳转到猜你喜欢
    $('.goLike').click(function() {
        const recomTop = $('.like').offset().top
        console.log(recomTop);
        window.scrollTo({
            top: recomTop,
            behavior: 'smooth'
        });
    });
    // 跳转到家具电器
    $('.goFurniture').click(function() {
        const recomTop = $('.Furniture').offset().top
        console.log(recomTop);
        window.scrollTo({
            top: recomTop,
            behavior: 'smooth'
        });
    });
    // 跳转到手机通讯
    $('.goPhone').click(function() {
        const recomTop = $('.phone').offset().top
        console.log(recomTop);
        window.scrollTo({
            top: recomTop,
            behavior: 'smooth'
        });
    });
    // 跳转到电脑办公
    $('.goComputer').click(function() {
        const recomTop = $('.computer').offset().top
        console.log(recomTop);
        window.scrollTo({
            top: recomTop,
            behavior: 'smooth'
        });
    });
})