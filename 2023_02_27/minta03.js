document.addEventListener("DOMContentLoaded", () => {
    const urlap = document.forms.programozasi_preferenciak;

    urlap.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const nyelvek_szama = parseInt(urlap.nyelvek_szama.value);
        const leggyakrabban_hasznal_nyelv = urlap.leggyakrabban_hasznal_nyelv.value;
        const IDE = urlap.IDE.value;
        const szintema = urlap.szintema.value;

        const adatok = {
            nyelvek_szama: nyelvek_szama,
            leggyakrabban_hasznal_nyelv: leggyakrabban_hasznal_nyelv,
            IDE: IDE,
            szintema: szintema,
        }
        console.log(adatok);
    });


})