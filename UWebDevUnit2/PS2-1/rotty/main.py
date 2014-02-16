# ROT13 for Udacity Web Development Course

import webapp2

import cgi

def escape_html(s):
    return cgi.escape(s, quote = True)

form = """
<form method="post">
    Enter some text to ROT13:
    <br>
    <textarea name="text">%(text)s</textarea>
    <br>
    <input type="submit">
</form>
"""

class MainPage(webapp2.RequestHandler):
    def write_form(self, text=""):
        self.response.out.write(form %{"text": text})

    def get(self):
        self.write_form()

    def post(self):
        user_input = self.request.get('text')
        #print "user_input: " + user_input
        self.write_form(user_input.encode("rot13"))

app = webapp2.WSGIApplication([('/', MainPage)],debug=True)