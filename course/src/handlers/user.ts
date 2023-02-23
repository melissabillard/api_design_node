import prisma from "../db"
import { createJWT, hashPassword, comparePasswords } from "../modules/auth"

export const createNewUser = async (req, res) => {
    const hash = await hashPassword(req.body.password);

    const user = await prisma.user.create({
        data: {
            username: req.body.username,
            password: hash, //req.body.password NO !  use the fonction hash like await hadhPassword(req.body.password)
        },
    });

    const token = createJWT(user);
    res.json({ token }); // <=> token : token
};

export const signin = async (req, res) => { // check if the user login is valid and if the values ​​match with my database
    const user = await prisma.user.findUnique({
        where: { id: req.body.username }, // we not pass the password because it's hash he never going to the recognize
    });

    const isValid = await comparePasswords(req.body.password, user.password); // check the password

    if (!isValid) {
        res.status(401);
        res.send("Invalid username or password");
        return;
    }

    const token = createJWT(user);
    res.json({ token });
};