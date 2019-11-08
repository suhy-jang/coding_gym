#include <stdio.h>
#include <iostream>

using namespace std;


int Game23(int n, int m) {
	if (m % n != 0) {
		return -1;
	}
	if (n == m) return 0;

	int f = m / n;
	int nCount = 0;
	while (f % 2 == 0) {
		f /= 2;
		nCount++;
	}
	while (f % 3 == 0) {
		f /= 3;
		nCount++;
	}
	// f== 5 or 7 => -1
	return (f == 1)? nCount : -1;
}

int main()
{
	int n;
	int m;
	for (int i = 0; i < 10; i++) {
		cin >> n;
		cin >> m;

		cout << Game23(n, m) << endl;
	}
	return 0;
}
