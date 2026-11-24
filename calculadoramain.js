const app = Vue.createApp({
    data() {
        return {
            firstNumber: '',
            secondNumber: '',
            result: null,
            error: ''
        };
    },
    methods: {
        calculate(operation) {
            const first = Number(this.firstNumber);
            const second = Number(this.secondNumber);
            let value;

            this.error = '';

            if (this.firstNumber === '' || !Number.isFinite(first)) {
                this.error = 'Ingresa un primer número válido.';
                this.result = null;
                return;
            }

            if (operation !== 'sqrt' && (this.secondNumber === '' || !Number.isFinite(second))) {
                this.error = 'Ingresa un segundo número válido.';
                this.result = null;
                return;
            }

            switch (operation) {
                case 'add':
                    value = first + second;
                    break;
                case 'subtract':
                    value = first - second;
                    break;
                case 'multiply':
                    value = first * second;
                    break;
                case 'divide':
                    if (second === 0) {
                        this.error = 'No se puede dividir entre cero.';
                        this.result = null;
                        return;
                    }
                    value = first / second;
                    break;
                case 'sqrt':
                    if (first < 0) {
                        this.error = 'No se puede calcular la raíz cuadrada de un número negativo.';
                        this.result = null;
                        return;
                    }
                    value = Math.sqrt(first);
                    break;
                case 'power':
                    value = Math.pow(first, second);
                    break;
                default:
                    this.error = 'La operación no es válida.';
                    this.result = null;
                    return;
            }

            if (!Number.isFinite(value)) {
                this.error = 'El resultado no es un número válido.';
                this.result = null;
                return;
            }

            this.result = value;
        },
        clear() {
            this.firstNumber = '';
            this.secondNumber = '';
            this.result = null;
            this.error = '';
        }
    }
});

app.mount('#app');
