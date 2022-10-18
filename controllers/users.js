const { response, request } = require('express');

const usersGet = (req = request, res = response) => {

    const { q, nombre = 'no name', apikey } = req.query;

    res.status(500).json({
        ok: true,
        msg: 'get API - controller',
        q,
        nombre,
        apikey
    })
}

const usersPut = (req, res) => {

    const id = req.params.id;

    res.status(400).json({
        ok: true,
        msg: 'put API',
        id
    })
}

const usersPost = (req, res) => {

    const body = req.body;

    res.status(201).json({
        ok: true,
        msg: 'post API',
        body
    })
}

const usersDelete = (req, res) => {
    res.status(500).json({
        ok: true,
        msg: 'delete API'
    })
}

const usersPatch = (req, res) => {
    res.status(500).json({
        ok: true,
        msg: 'patch API'
    })
}

module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete,
    usersPatch
}