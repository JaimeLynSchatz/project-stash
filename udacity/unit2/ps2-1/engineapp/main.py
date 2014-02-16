import webapp2
import cgi

textarea= '''
<!DOCTYPE html>
<html>
  <head>
    <title>Unit 2 Rot 13</title>
  </head>

  <body>
    <h2>Enter some text to ROT13:</h2>
    <form method="post">
      <textarea name="text"
                style="height: 100px; width: 400px;">%(value)s
      </textarea>
      <br>
      <input type="submit">
    </form>
  </body>

</html>

'''
class MainPage(webapp2.RequestHandler):
    def write_textarea(self):
    	self.response.out.write(textarea % {'value': value})
    
    def get(self):
        self.write_textarea()

    def post(self):
    	user_value = self.request.get('value')
    	self.write_textarea()

#What follows will be the ROT 13 Exercise


class ROT13(webapp2.RequestHandler):
    def write_textarea(self):
        self.response.out.write(textarea % {'value': "test string"})

    def get(self):
        self.write_textarea()

#What follows is URL mapping section

app = webapp2.WSGIApplication([('/', MainPage), ('/rot13', ROT13)], debug=True)

#('/rot13', ROT13)],