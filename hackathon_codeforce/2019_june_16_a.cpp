#include <iostream>

using std::cin;
using std::cout;

int main() {
  long long x,y,z;
  cin >> x >> y >> z;

  long long temp, left, right, buy, give=0;
  left = x%z;
  right = y%z;
  temp = (left + right)/z;
  buy = x/z + y/z + temp;
  if (temp > 0)
    give = ((z-left) < (z-right)) ? (z-left) : (z-right);

  cout << buy << " " << give;
  return 0;
}
