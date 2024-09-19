# Python code to demonstrate Knuth's Up-Arrow
# Notation For Exponentiation


def knuth_arrow(a, k, b):
		# a (k's ↑) b
	if b == 0:
		return 1
	if k == 1:
		return a**b
	return knuth_arrow(a, k-1, knuth_arrow(a, k, b-1))


# 5↑4 = 5 ^ 4 = 625
print(knuth_arrow(5, 1, 4))

# 3↑↑3 = 3^(3 ^ 3) = 3 ^ 27
print(knuth_arrow(3, 2, 3))

# 2↑↑↑3 = 2↑↑(2↑↑2) = 2↑↑(2 ^ 2) = 2↑↑4 =
# (2^(2^(2 ^ 2))) = 2 ^ 16
print(knuth_arrow(2, 3, 3))
