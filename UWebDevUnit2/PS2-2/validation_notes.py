# Username: "^[a-zA-Z0-9_-]{3,20}$" Password: "^.{3,20}$" Email: "^[\S]+@[\S]+\.[\S]+$"
# Example code for validating a username is as follows:

#  import re
#  USER_RE = re.compile(r"^[a-zA-Z0-9_-]{3,20}$")
#  def valid_username(username):
#    return USER_RE.match(username)