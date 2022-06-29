import validator from "validator";

export default class Login{
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passInput = el.querySelector('input[name="password"]');
        const htmlFail = document.querySelector('.login-cadastro-fail');
        let error = false;

        if(!validator.isEmail(emailInput.value) || (passInput.value.length < 4 || passInput.value.length > 20)){
            htmlFail.classList.add('row', 'col', 'my-3', 'alert', 'alert-danger');
            htmlFail.innerHTML = `E-mail ou senha podem estar inválidos.`;
            error = true;
        }

        if(!error) el.submit();
    }
}

