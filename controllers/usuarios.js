const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {

    const { q } = req.query;

    res.json({
        ok: true,
        msg: 'get API - controlador',
        q
    });
}

const usuariosPut = (req, res) => {

    const { id } = req.params;

    res.json({
        ok: true,
        msg: 'put API - controlador',
        id
    });
}

const usuariosPost = (req, res) => {

    const { nombre } = req.body;

    res.json({
        ok: true,
        msg: 'post API - controlador',
        nombre
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        ok: true,
        msg: 'delete API - controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}