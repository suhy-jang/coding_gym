/* https://www.hackerrank.com/challenges/beautiful-pairs/problem */

int beautifulPairs(vector<int> A, vector<int> B) {
    map<int, int> m1, m2;
    int pair;
    bool flag = false;

    for(int& num : A) {
        m1[num]++;
    }
    for(int& num : B) {
        m2[num]++;
    }
    map<int, int>::iterator itr = m1.begin();
    while(itr != m1.end()) {
        pair += min(itr->second, m2[itr->first]);
        if(itr->second != m2[itr->first]) {
            flag = true;
        }
        itr++;
    }
    if(flag) return pair + 1;
    return pair - 1;
}

int main() {
  cout << beautifulPairs([1,2,3,4], [1,2,3,3]);
  return 0;
}
