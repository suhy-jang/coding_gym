/* https://www.hackerrank.com/challenges/beautiful-pairs/problem */

int beautifulPairs(vector<int> A, vector<int> B) {
    map<int, int> m;
    int pair = 0;
    bool flag = false;

    for(int& num : A) {
        m[num]++;
    }
    for(int& num : B) {
        m[num]--;
        if(m[num] >= 0) {
            pair++;
        } else {
            flag = true;
        }
    }
    if(flag) return pair + 1;
    return pair - 1;
}

int main() {
  cout << beautifulPairs([1,2,3,4], [1,2,3,3]);
  return 0;
}
