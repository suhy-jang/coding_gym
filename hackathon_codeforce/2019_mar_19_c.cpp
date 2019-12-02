
#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

int a[1000000], b[1000000];
int main()
{
	int n, flag;
	cin >> n;
	flag = a[0] = 1;
	for (int i=1; i<n; i++) {
		cin >> b[i];
		a[i] = a[i-1] + b[i];
	}
	sort(a, a+n);
	int up = 1 - a[0];
	for(int i=1; i<n; i++) {
		if (a[i] != a[i-1] + 1) {
			flag = 0;
			break;
		}
	}
	if (flag) {
		a[0] = 1;
		cout << a[0] + up;
		for(int i=1; i<n; i++) {
			a[i] = a[i-1] + b[i];
			cout << " " << a[i] + up;
		}
		cout << endl;
	} else {
		cout << -1 << endl;
	}
	return 0;
}
