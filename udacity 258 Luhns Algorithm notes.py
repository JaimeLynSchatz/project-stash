six leading digits
account number - can be even or odd number of digits
final check digit at the end
import random

def luhn_digit(n):
	n = 2*n
	if (n>9):
		return n - 9
	else:
		return n
		
def luhn_checksum(n):
	l = len(n)
	sum = 0
	if l%2 == 0:
		for i in range(l):
			if (i+1)%2 == 0:
				sum += int(n[i])
			else:
				sum += luhn_digit (int(n[i]))
	else:
		for i in range(l):
			if (i+1)%2 == 0:
				sum += luhn_digit (int(n[i]))
			else:
				sum += int(n[i])
	return sum%10
	
def generate (pref, l):
	nrand = l - len(pref) - 1
	assert nrand > 0
	n = pref
	for i in range(nrand):
		n += str(randomrandrange(10))
	n += "0"
	check = luhn_checksum(n)
	if check != 0:
		check = 10-check