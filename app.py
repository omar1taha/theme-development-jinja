from flask import Flask, render_template
import json
import os

app = Flask(__name__, template_folder='src')

@app.route('/')
@app.route('/product/<product_id>')
def product_detail(product_id='sku-123'):
    with open('data/product.json', 'r', encoding='utf-8') as f:
        product = json.load(f)
    
    return render_template('templates/product.jinja', product=product)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5002)