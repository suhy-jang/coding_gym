#include <iostream>
using namespace std;

int main() {
  int num;
  cin >> num;
  int data[num+1];
  for(int i = 1; i <= num; i++) {
    cin >> data[i];
    if (i) data[i] += data[i-1];
  }
  int quiry_num;
  cin >> quiry_num;
  for(int i=0;i<quiry_num;i++) {
    int l, r;
    cin >> l >> r;
    cout << (data[r] - data[l - 1]) / 10 << "\n";
  }
  return 0;
}
