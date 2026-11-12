const {validarReserva, haySolapamiento } = require("../src/horario");

describe("Test de Reservas validas", () => {
    test("Reserva valida", () => {
        expect(validarReserva(8, 10));
    })
})

describe("Test de mas de 4 horas", () => {
    test("Mas de 4 horas", () => {
        expect(()=> validarReserva(8, 13).toThrow("horario invalido"));
    })
})

describe("Test fuera del horario de atencion", () => {
    test("Fuera de horario", () => {
        expect(()=> validarReserva(6, 9).toThrow("horario invalido"));
    })
})

describe("Test fin menor o igual que inicio", () => {
    test("fin menor o igual que inicio", () => {
        expect(()=> validarReserva(8, 8).toThrow("horario invalido"));
    })
})

describe("Test dos reservas superpuestas", () => {
    test("dos reservas superpuestas", () => {
        const reservaA = {inicio: 8, fin: 10};
        const reservaB = {inicio: 9, fin: 11};
        expect(haySolapamiento(reservaA, reservaB));
    })
})

describe("Test dos reservas continuas", () => {
    test("dos reservas continuas", () => {
        const reservaA = {inicio: 6, fin:8};
        const reservaB = {inicio: 8, fin:10};
        expect(haySolapamiento(reservaA, reservaB));
    })
})