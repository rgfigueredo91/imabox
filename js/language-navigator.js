function changeLanguageStart() {		
    if (!window.location.hash) {
        const language = navigator.language;
        console.log(language);
        if (/^es\b/.test(language)) {
            window.location.hash = "#esp";
        } else {
            window.location.hash = "#eng";
        }
    }
}
changeLanguageStart()
