let errorCont = 0;



class contact {
    constructor(fullName, landline, celphone, url, date, email, CEP, city, insta, github) {

        this.fullName = fullName;
        this.landline = landline;
        this.celphone = celphone;
        this.url = url;
        this.date = date;
        this.email = email;
        this.CEP = CEP;
        this.city = city;
        this.insta = insta;
        this.github = github;
    }

}



class listContact {
    constructor() {
        this.listContact = [];
    }

    addContact(User) {
        this.listContact.push(User);
    }

    getZodiacSign() {
        let birthdate = new Date(contact.birthdate);
        let day = birthdate.getDate();
        let month = birthdate.getMonth() + 1;
        console.log("Passou pelo getZodiac() da class User");

        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
            return "Capricórnio ♑";
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
            return "Aquário ♒";
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            return "Peixes ♓";
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
            return "Áries ♈";
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
            return "Touro ♉";
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            return "Gêmeos ♊";
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
            return "Câncer ♋";
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
            return "Leão ♌";
        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
            return "Virgem ♍";
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
            return "Libra ♎";
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
            return "Escorpião ♏";
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
            return "Sagitário ♐";
        }
    }
    sendsuccessMsg() {
        document.getElementById("success-msg").classList.remove("hidden");
        setTimeout(function () {
            document.getElementById("success-msg").classList.add("hidden");
        }, 4000)
    }
    sendErrorMsg() {
        document.getElementById("error-msg").classList.remove("hidden");
        setTimeout(function () {
            document.getElementById("error-msg").classList.add("hidden");
        }, 4000)
    };
}

function formatedCellphone(cellphone) {
    console.log("Passou pela funcao formatedCellphone()");

    let cellphoneArray = cellphone.split("");
    let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
        + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
        + cellphoneArray[5] + cellphoneArray[6] + "-"
        + cellphoneArray[7] + cellphoneArray[8]
        + cellphoneArray[9] + cellphoneArray[10];
    return cellphoneFormated;
}

function formatedLandline(landline) {
    console.log("Passou pela funcao formatedLandline()");

    let landlineArray = landline.split("");
    let formatedLandline = "(" + landlineArray[0] + landlineArray[1] + ")"
        + " " + landlineArray[2] + landlineArray[3] + landlineArray[4] + "-"
        + landlineArray[5] + landlineArray[6] + landlineArray[7];

    return formatedLandline;
}

function formatedCEP(CEP) {
    console.log("Passou pela funcao formatedCEP()");

    let CEPArray = CEP.split("");
    let formatedCEP = CEPArray[0] + CEPArray[1] + CEPArray[2] + CEPArray[3] + "-"
        + CEPArray[4] + "-" + CEPArray[5] + CEPArray[6] + CEPArray[7];
    return formatedCEP;
}

function clearFields() {
    console.log("Passou pela funcao clearFields()");

    document.getElementById("fullName").value = "";
    document.getElementById("landline").value = "";
    document.getElementById("celphone").value = "";
    document.getElementById("url").value = "";
    document.getElementById("date").value = "";
    document.getElementById("email").value = "";
    document.getElementById("CEP").value = "";
    document.getElementById("city").value = "";
    document.getElementById("insta").value = "";
    document.getElementById("github").value = "";
}

function createContact() {
    let fullName = document.getElementById("fullName").value;
    let landline = document.getElementById("landline").value;
    let celphone = document.getElementById("celphone").value;
    let url = document.getElementById("url").value;
    let date = document.getElementById("date").value;
    let email = document.getElementById("email").value;
    let CEP = document.getElementById("CEP").value;
    let city = document.getElementById("city").value;
    let insta = document.getElementById("insta").value;
    let github = document.getElementById("github").value;

    const contato = new contact(fullName, landline, celphone, url, date, email, CEP, city, insta, github);
    lista.addContact(contato);


    renderContact();
    clearFields();
}

function isAnyInputEmpty() {

    document.getElementById("fullName").value;
    document.getElementById("landline").value;
    document.getElementById("celphone").value;
    document.getElementById("url").value;
    document.getElementById("date").value;
    document.getElementById("email").value;
    document.getElementById("CEP").value;
    document.getElementById("city").value;
    document.getElementById("insta").value;
    document.getElementById("github").value;

    if (fullName == "" || landline == "" || celphone == "" || url == "" || date == "" || email == "" || CEP == "" || city == "" || insta == "" || github == "") {
        return sendErrorMsg("Preencha todos os campos");
    } else {
        return sendsuccessMsg("Cadastrado com sucesso");
    }
}
const jorge = new listContact();



function renderContact() {

    let html = "";

    lista.listContact.forEach(contact => {
        html += `<div id="newmensage" onclick="bigCard()">
            <img src="${contact.url}">
            <p>${contact.fullName}</p>
            <p> Telefone Fixo: ${contact.formatedLandline}</p>
            <p> Telefone Celular: ${contact.formatedCellphone}</p>
        </div>`;


    });

    document.getElementById("lil-card").innerHTML = html;
}

function bigCard() {
    `<div id="bigcard">
    <p>Detalhe</p>
    <img src="${url}"
    
    <p>${fullName}</p>

    <p>Celular: ${formatedLandline}</p>
    <p> Data de nascimento: ${date}</p>
    <p> Idade: {}</p>
    <p> Signo: {}</p>
    <p> Email: ${email}</p>
    <p> CEP: ${formatedCEP()}</p>
    <p> Cidade: ${city}</p>
    <p> Instagram: ${insta}</p>
    <p> Gitgub: ${github}</p>

    <a href="${createLinkGithub}" target="_blank"> <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
    alt="logo do github" id="github" ></a>
<a href="${createLinkInsta}" target="_blank"> <img  src="https://marcas-logos.net/wp-content/uploads/2020/01/instagram_icon_logo.png"
    alt="logo do github" id="insta"></a>
<a href="${createLinkWpp}" target="_blank"> <img  src="https://static.vecteezy.com/system/resources/thumbnails/024/806/426/small/whatsapp-logo-transparent-free-png.png"
    alt="logo do github" id="wpp"></a>
    `
}

const lista = new listContact();