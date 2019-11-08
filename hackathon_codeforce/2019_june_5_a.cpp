#include <iostream>
#include <vector>
using namespace std;

int HeroToZero(long long n, long long k) {
  int cnt = 0;

  while(n>0){
    if(n%k == 0){
      n/=k;

    } else {
      n-=1;
    }
    cnt++;
  }

  return cnt;
}

int main() {
  int nQuery;
  long long n, k;
  vector<int> vR;
  cin >> nQuery;
  while(nQuery--){
    cin >> n >> k;
    vR.push_back(HeroToZero(n, k));
  }
  auto itr = vR.begin();
  while(itr != vR.end()){
    cout << *itr << endl;
    itr++;
  }
  return 0;
}
