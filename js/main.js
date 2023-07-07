function submitSearch() {
    var input = document.querySelector('.search input');
    var url = input.value.trim();

    // 进行校验
    if (url != "") {
        url = 'https://www.bing.com/search?q=' + encodeURIComponent(url);
        // 在新标签页打开
        window.open(url);
    }else{
        url = './default.html';
        // 滚动到窗口
        document.querySelector('#page').scrollIntoView({ behavior: 'smooth' });
        // 更换嵌入的页面的网址为script中的url
        document.querySelector('.page').src = url;
    }

    // 阻止表单默认提交行为
    return false;
}

function manual() {
    document.querySelector('.page').src = './manual/';
    document.querySelector('#page').scrollIntoView({ behavior: 'smooth' });
}

function license() {
    document.querySelector('.page').src = './license_page/';
    document.querySelector('#page').scrollIntoView({ behavior: 'smooth' });
}