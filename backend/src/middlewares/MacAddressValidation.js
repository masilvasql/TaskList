const MacAddresValidation = (req, res, next) => {
  if (!req.body.macaddress) {
    return res.status(400).json({ error: "macaddres é obrigatório" });
  } else {
    next();
  }
};

module.exports = MacAddresValidation;
