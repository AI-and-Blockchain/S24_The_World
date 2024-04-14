import { encrypt } from 'eth-sig-util';

export default function handler(req, res) {
    const publicKey = req.query.publicKey.replace(' ', '+');
    const message = req.query.message;

    console.log("PUBLIC KEY: ", publicKey);

    (async() => {
        const encrypted = encrypt(
            publicKey,
            {data: message},
            "x25519-xsalsa20-poly1305"
        );

        res.status(200).json(encrypted);
    })();
}
