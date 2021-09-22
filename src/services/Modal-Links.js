export default function modalApp(id) {
    const links = [
    "https://github.com/emquiroga/crowdfunding-product-page-main",
    "https://relaxed-noether-77d0b1.netlify.app/",
    "https://github.com/emquiroga/easybank-landing-page",
    "https://emquiroga.github.io/easybank-landing-page/",
    "https://github.com/emquiroga/intro-component-with-signup-form-master",
    "https://emquiroga.github.io/intro-component-with-signup-form-master/"    
    ];
    if (id === 'link-1') {
        let myRepo = links[0];
        let myLive = links[1];
        return [myRepo, myLive] = myLinks;
    }
    if (id === 'link-2') {
        let myRepo = links[2];
        let myLive = links[3];
        return [myRepo, myLive] = myLinks;
    }
    if (id === 'link-3') {
        let myRepo = links[4];
        let myLive = links[5];
        return [myRepo, myLive] = myLinks;
    }
}
