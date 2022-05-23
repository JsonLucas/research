const initialPageController = (req, res) => {
    console.log(req.headers);
    res.sendStatus(200);
}

export default initialPageController;