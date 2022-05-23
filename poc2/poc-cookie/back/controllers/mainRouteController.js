const mainRouteController = (req, res) => {
    console.log(req.headers);
    res.sendStatus(200);
}

export default mainRouteController;