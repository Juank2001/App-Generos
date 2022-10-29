const axios = require('axios');
module.exports = {
    tabla(req, res) {

        let params = req.params;
        let page = 1
        if (params.page) {
            page = params.page
        }
        let rows = 10
        if (params.rows) {
            rows = params.rows
        }

        let pagina = (page - 1) * 10;
        axiosConfig = {
            method: 'GET',
            url: 'https://musicbrainz.org/ws/2/genre/all?limit=' + rows + '&offset=' + pagina + '&fmt=json',
            headers: {
                'Content-type': 'application/json'
            }
        }

        axios(axiosConfig).then(resp => {
            let pagemax = resp.data['genre-count']
            if (page <= (pagemax / rows) - 1) {
                sigtext = ''
            } else {
                sigtext = 'disabled'
            }
            if (page > 1) {
                prevtext = ''
            } else {
                prevtext = 'disabled'
            }

            res.render('tabla', { generos: resp.data.genres, prev: (parseInt(page) - 1), sig: (parseInt(page) + 1), act: page, prevtext: prevtext, sigtext: sigtext, rows: rows })
        }).catch(error => {
            console.log(error)
            res.send('Error al cargar la data')
        })
    }
}