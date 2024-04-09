function initTranslate() {
    try{
        translate.listener.start();
        translate.language.setLocal('chinese_simplified');
        translate.setAutoDiscriminateLocalLanguage();
        translate.language.setUrlParamControl();
    }
    catch(e){console.log(e);}
    translate.setUseVersion2();
    translate.ignore.class.push('notTranslate');
    translate.execute();
}

window.addEventListener('load', initTranslate);