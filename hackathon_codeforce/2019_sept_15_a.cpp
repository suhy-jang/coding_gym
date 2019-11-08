#include <iostream>
using namespace std;

int get_maximum(int a1,int a2,int k1,int k2,int n) {
  int temp = a2 - n/k2;
  return (temp>0)? n/k2 : (n-a2*k2)/k1 + a2;
}

int main(){
  int a1, a2, k1, k2, n;
  cin >> a1 >> a2 >> k1 >> k2 >> n;
  int temp = a1*(k1-1)+a2*(k2-1);
  int min_cnt = (temp<n)?(n-temp):0;
  int max_cnt = (k1>=k2) ? get_maximum(a1,a2,k1,k2,n) : get_maximum(a2,a1,k2,k1,n);
  cout << min_cnt << " " << max_cnt << "\n";
  return 0;
}
