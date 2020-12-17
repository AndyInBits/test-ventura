from flask import Flask, jsonify
app = Flask(__name__)


@app.route("/get-trips", methods=["GET"])
def api():
    data = [
        {
            "id": 1,
            "logo": "https://cdn.puraventura.info/img/480x360/101.jpg",
            "title": "Cuba - Cuba dans tous ses états",
            "price": "2499 EUR"
        },
        {
            "id": 2,
            "logo": "https://cdn.puraventura.info/img/480x360/331440.jpg",
            "title": "Cuba - Cuba dans tous ses états",
            "price": "2499 EUR"
        },
        {
            "id": 3,
            "logo": "https://cdn.puraventura.info/img/480x360/331448.jpg",
            "title": "Cuba - Cuba dans tous ses états",
            "price": "2499 EUR"
        },
        {
            "id": 4,
            "logo": "https://cdn.puraventura.info/img/480x360/101.jpg",
            "title": "Cuba - Cuba dans tous ses états",
            "price": "2499 EUR"
        },
        {
            "id": 5,
            "logo": "https://cdn.puraventura.info/img/480x360/331440.jpg",
            "title": "Cuba - Cuba dans tous ses états",
            "price": "2499 EUR"
        },
        {
            "id": 6,
            "logo": "https://cdn.puraventura.info/img/480x360/331448.jpg",
            "title": "Cuba - Cuba dans tous ses états",
            "price": "2499 EUR"
        },
    ]

    response = jsonify(data)
    response.headers.add("Access-Control-Allow-Origin", "*")

    return response
