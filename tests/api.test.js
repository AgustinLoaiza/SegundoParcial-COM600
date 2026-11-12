const request = require("supertest");
const { crearApp } = require("../src/app");

test("POST /reservas response 201 y publica", async () => {
    const publicar = jest.fn().mockResolvedValue(true);
    const res = await request(crearApp({ publicar })).post("/reservas").send({ laboratorio: "B006", docente: "Carlos Montellano", correo: "monte@gmail.com", inicio:8, fin:10});
    expect(res.status).toBe(201);
    expect(publicar).toHaveBeenCalledWith("reserva.creada", expect.objectContaining({ id: res.body.id }));
});
