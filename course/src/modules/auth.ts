import jwt from "jsonwebtoken";

export const createJWT = (user) => {
    const token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_SECRET
    );
    return token;
};

export const protect = (req, res, next) => {
    const bearer = req.headers.authorization;

    if (!bearer) {
        res.status(401);
        res.send("Not authorized");
        // res.json({ message: 'not authorized' });
        return;
    }

    const [, token] = bearer.split(" ");
    if (!token) { // if the token is not valid
        console.log("here");
        res.status(401);
        res.send("Not valid token");
        return;
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = payload;
        console.log(payload);
        next(); // mean i'm down go next
        return;
    } catch (e) {
        console.error(e);
        res.status(401);
        res.send("valid token");
        return;
    }
};