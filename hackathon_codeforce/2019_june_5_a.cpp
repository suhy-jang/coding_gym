#include <iostream>
using namespace std;

int main() {
  int t;
  cin >> t;
  while(t--) {
    long long int n, k, count=0;
    cin >> n >> k;
    while(n > 0){
      if(n % k == 0){
        count++;
        n = n / k;
      }
      count = count + n % k;
      n = n / k * k;
    }
    cout << count << endl;
  }
  return 0;
}
