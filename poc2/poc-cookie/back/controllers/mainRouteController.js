const mainRouteController = (req, res) => {
    const { name, nick, pass } = req.headers;
    res.setHeader('Set-Cookie', [`name: ${name}`]);
    console.log(res.getHeaders());
    res.sendStatus(200);
}

export default mainRouteController;