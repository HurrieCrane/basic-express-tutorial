import { v4 as uuidv4 } from 'uuid';

const baskets = {}

function GetUIDCookie(req) {
    if (req.cookies === null || req.cookies === undefined
        || req.cookies.uid === null || req.cookies.uid === undefined) {
            return null;
    }
    return req.cookies.uid;
}

export default function(req, res) {
    const productId = req.query.id;
    let uid = GetUIDCookie(req);

    if (uid === null) {
        uid = uuidv4();
        res.cookie("uid", uid);
    }

    if (!baskets[uid]) {
        baskets[uid] = {};
    }

    baskets[uid][productId] = !baskets[uid][productId] ? 1 : baskets[uid][productId] + 1;

    console.log(`${productId} = ${baskets[uid][productId]}`);

    var basketCount = 0;
    Object.keys(baskets[uid]).forEach((key) => {
        basketCount += baskets[uid][key];
    });

    var response = {
        Count: basketCount
    }

    res.end(JSON.stringify(response));
}