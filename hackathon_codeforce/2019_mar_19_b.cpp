
#include <iostream>
#include <vector>

using namespace std;

int MaxiRest(vector<int> vHours) {
	int maxRest=0;
	int rest=0;
	for (int i = 0; i < vHours.size(); i++) {
		if (vHours[i] == 0) {
			rest = 0;
			continue;
		}
		rest++;
		if (maxRest < rest) {
			maxRest = rest;
		}
	}
	if (maxRest != vHours.size()) {		// maxRest == nHour -> normally we don't rest hall day.
		for (int i = 0; i < vHours.size(); i++) {	// to connect to second day
			if (vHours[i] == 0) {
				break;
			}
			rest++;
			if (maxRest < rest) {
				maxRest = rest;
			}
		}
	}
	return maxRest;
}
int main()
{
	for (int i = 0; i < 10; i++) {	// remove: test
		int n;
		vector<int> vHours;
		cin >> n;
		while (n--) {
			int rest;
			cin >> rest;
			vHours.push_back(rest);
		}
		cout << MaxiRest(vHours) << endl;
	}
	return 0;
}
