
#include <iostream>
#include <vector>
#include <set>

using namespace std;

// to get valid n permutation
// among the vArr(n-1) array
vector<int> ValidPermutation(int n, vector<int> vArr) {
	if (vArr.empty()) return { -1 };
	vector<int> vResult;

	int start = 1;
	int value = start;	// start from 1
	int minValue = start;	// increase only->first value is minist value
	set<int> permutation;
	for (int i = 0; i < n - 1; i++) {
		value += vArr[i];
		if (vArr[i] == 0) return { -1 };
		if (minValue > value) {
			minValue = value;
		}
	}

	int f = (minValue < start) ? start - minValue : 0;

	value = start + f;	// for init
	vResult.push_back(value);
	permutation.insert(value);
	for (int i = 0; i < n - 1; i++) {
		value += vArr[i];
		vResult.push_back(value);
		permutation.insert(value);
	}

	value = 0;	// 0+1 = 1
	auto itr = permutation.begin();
	if (permutation.size() == n) {
		while (itr != permutation.end()) {
			if ((value + 1) != *itr) {
				vResult.clear();
				vResult.push_back(-1);
				break;
			}
			value = *itr;
			itr++;
		}
	}
	return vResult;
}
int main()
{
	for (int j = 0; j < 10; j++) {	// remove: test
		int n;
		vector<int> vq;
		cin >> n;
		for (int i = 0; i < n - 1; i++) {
			int q;
			cin >> q;
			vq.push_back(q);
		}
		vector<int> result = ValidPermutation(n, vq);
		for (int r : result) {
			cout << r << " ";
		}
		cout << endl;
	}
	return 0;
}
