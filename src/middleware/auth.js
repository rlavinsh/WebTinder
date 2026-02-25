const authAdmin = (req, res, next) => {
  const token = "xyz";
  const isAdmin = token === "xyz";

  if (isAdmin) {
    next();
  } else {
    res.status(401).send("Unauthorized access");
  }
};

const userAuth = (req, res, next) => {
  const token = "xyz";
  const isUsre = token === "xyz";

  if (isUsre) {
    next();
  } else {
    res.status(401).send("Unauthorized access");
  }
};

module.exports = {
  authAdmin,
  userAuth,
};
