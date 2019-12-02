#include <iostream>
#include <stack>
using namespace std;
typedef long long ll;
const long long maxn = (ll)1 << 33 - 1;

int main() {
  stack<ll> st;
  st.push(1);
  int nQuery;
  ll x = 0;
  string command;

  cin >> nQuery;
  while(nQuery--){
    cin >> command;
    if (command == "add") {
      x = min(maxn, x + st.top());
    } else if (command == "for") {
      ll count;
      cin >> count;
      st.push(min(maxn, count * st.top()));
    } else {
      st.pop();
    }
  }
  if(x == maxn){
    cout << "OVERFLOW!!!";
  } else {
    cout << x;
  }
  cout << endl;
  return 0;
}
