from flask import Flask, render_template, jsonify, request, send_file
import os
import sys
import time


app = Flask(__name__)


@app.route('/time')
def get_current_time():
    return jsonify({'time' : 1241})

@app.route('/make_move', methods=['GET','POST'])
def chess_move():
    print(request.data, file=sys.stderr)
    return 'success'



if __name__ == "__main__":
    app.run(host='0.0.0.0', port=os.environ.get('PORT', 3000), debug=True)
