#&amp; // &

# User Instructions
# 
# Implement the function escape_html(s), which replaces:
# > with &gt;
# < with &lt;
# " with &quot;
# & with &amp;
# and returns the escaped string
# Note that your browser will probably automatically 
# render your escaped text as the corresponding symbols, 
# but the grading script will still correctly evaluate it.
# 

def escape_html(s):
    #print 'Begin: ' + s
    for (i, o) in (('&', '&amp;'),  # replace this first or they'll be hell to pay
                   ('>', '&gt;'),
                   ('<', '&lt;'),
                   ('"', '&quot;')):
        s = s.replace(i, o)
                               
    return s
    
print escape_html('<My> &ame is "Jaime"')
print escape_html('"""why& won\'t it work?><>&')


# There is a built-in function, though:
#
# import cgi
# def escape_html(s):
# 	return cgi.escape(s, quote = True)
#
# print escape_html('"hell, & = &amp;"')