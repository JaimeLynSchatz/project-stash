import webapp2
import cgi

form="""
<!DOCTYPE html>
<html>
	<head>
		<title>Udacity Problem Set 2-1</title>

		 <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>

		 <script src="script.js"></script> <!--your script here-->
	</head>
<body>
	<h1>ROT13</h1>
	<input type="textarea" value="content">

	</textarea>

	<input type="submit" 

</body>


</html>
"""

def escape_html(s):
	return cgi.escape(s, quote = True)

class MainPage(webapp2.RequestHandler()):
	def write_form(self, content=""):
		self.response.out.write_form(content)

def get(self):
	self.write_form()
		#self.response.headers['Content-Type'] = 'text/plain'

def post(self):
	if (content == ""):
		self.write_form("Give me something to encrypt!")
	else:
		self.redirect("/thanks")

class ThanksHander(webapp2.RequestHandler):
	def get(self):
		self.response.out.write_form(escape_html(content))

app = webapp2.WSGIApplication([('/', MainPage), ('/thanks', ThanksHandler)], debug=True)	