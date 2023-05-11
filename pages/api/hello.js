export default function handler(req, res) {
    // req is an instance of http.IncomingMessage
    // res is an instance of http.ServerResponse
    res.status(200).json({ text: 'Hello' });
}