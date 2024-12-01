from flask_jwt_extended import decode_token

def get_user_from_token(token):
    try:
        decoded_token = decode_token(token)
        user_id = decoded_token['identity']
        return user_id
    except Exception as e:
        return None
